// Rate tables
const packageRates = { 0.5: 10, 1: 15, 2: 20, 3: 25 };
const brokerageRates = [
  { min: 0, max: 500, fee: 0 },
  { min: 501, max: 1000, fee: 10 },
  { min: 1001, max: 2000, fee: 15 },
  { min: 2001, max: 3000, fee: 20 },
];
const deliveryTimes = {
  standard: '7-14 business days',
  express: '3-5 business days',
  economy: '14-21 business days',
};
let selectedSpeed = 'standard';
let selectedMultiplier = 1;

// Shipping option selection
document.querySelectorAll('.shipping-option').forEach(opt => {
  opt.addEventListener('click', () => {
    document
      .querySelectorAll('.shipping-option')
      .forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    selectedSpeed = opt.dataset.speed;
    selectedMultiplier = parseFloat(opt.dataset.multiplier);
  });
});

// Calculate
document.getElementById('calcBtn').addEventListener('click', () => {
  const weightVal = parseFloat(document.getElementById('weight').value);
  const unit = document.getElementById('unit').value;
  const productValue =
    parseFloat(document.getElementById('productValue').value) || 0;

  if (!weightVal || weightVal <= 0) {
    showToast('⚠ Please enter a valid weight');
    return;
  }

  // Convert to lbs
  const weightLbs = unit === 'kg' ? weightVal * 2.20462 : weightVal;

  // Base rate calculation
  let baseRate;
  if (weightLbs <= 0.5) baseRate = 10;
  else if (weightLbs <= 1) baseRate = 15;
  else if (weightLbs <= 2) baseRate = 20;
  else if (weightLbs <= 3) baseRate = 25;
  else baseRate = 25 + Math.ceil(weightLbs - 3) * 5;

  // Brokerage fee
  let brokFee = 0;
  const brk = brokerageRates.find(
    r => productValue >= r.min && productValue <= r.max,
  );
  if (brk) brokFee = brk.fee;
  else if (productValue > 3000) brokFee = productValue * 0.005;

  // Insurance (1.5% of product value, min $2)
  const insuranceFee = productValue > 0 ? Math.max(productValue * 0.015, 2) : 0;

  // Speed adjustment
  const adjustedShipping = baseRate * selectedMultiplier;
  const speedAdj = adjustedShipping - baseRate;

  // Total
  const total = adjustedShipping + brokFee + insuranceFee;

  // Update UI
  document.getElementById('baseRate').textContent = `$${baseRate.toFixed(2)}`;
  document.getElementById('speedAdj').textContent =
    speedAdj >= 0
      ? `+$${speedAdj.toFixed(2)}`
      : `-$${Math.abs(speedAdj).toFixed(2)}`;
  document.getElementById('brokerageFee').textContent =
    brokFee > 0 ? `$${brokFee.toFixed(2)}` : 'FREE';
  document.getElementById('insurance').textContent =
    insuranceFee > 0 ? `$${insuranceFee.toFixed(2)}` : 'N/A';
  document.getElementById('totalCost').textContent = `$${total.toFixed(2)}`;
  document.getElementById('deliveryTime').textContent =
    deliveryTimes[selectedSpeed];
  document.getElementById('billableWeight').textContent =
    `${weightLbs.toFixed(2)} lbs`;

  // Animate total
  const totalEl = document.getElementById('totalCost');
  totalEl.style.animation = 'none';
  totalEl.offsetHeight;
  totalEl.style.animation = 'countUp 0.5s ease';

  showToast('✓ Estimate calculated!');
});

function showToast(msg) {
  let t = document.querySelector('.toast');
  if (t) {
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }
}
