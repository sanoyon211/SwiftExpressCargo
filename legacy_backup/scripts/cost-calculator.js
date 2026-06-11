// ===== CALCULATOR ENGINE =====
let selectedSpeed = 'standard';
let selectedMult = 1;
const deliveryTimes = {
  standard: '7–14 business days',
  express: '3–5 business days',
  economy: '14–21 business days',
};

// Select shipping speed
function selectSpeed(el) {
  document
    .querySelectorAll('.speed-card')
    .forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  selectedSpeed = el.dataset.speed;
  selectedMult = parseFloat(el.dataset.mult);
  liveCalc();
}

// Rate calculation
function getBaseRate(lbs) {
  if (lbs <= 0) return 0;
  if (lbs <= 0.5) return 10;
  if (lbs <= 1) return 15;
  if (lbs <= 2) return 20;
  if (lbs <= 3) return 25;
  if (lbs > 25) return 50;
  return 25 + Math.ceil(lbs - 3) * 5;
}

function getBrokerage(value) {
  if (!value || value <= 0) return 0;
  if (value <= 500) return 0;
  if (value <= 1000) return 10;
  if (value <= 2000) return 15;
  if (value <= 3000) return 20;
  return value * 0.005;
}

function setResult(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function liveCalc() {
  const weightRaw = parseFloat(document.getElementById('weight').value) || 0;
  const unit = document.getElementById('unit').value;
  const value = parseFloat(document.getElementById('productValue').value) || 0;
  const insChecked = document.getElementById('addInsurance').checked;
  const photoChecked = document.getElementById('addPhoto').checked;

  if (weightRaw <= 0) return;

  // Convert to lbs
  const lbs = unit === 'kg' ? weightRaw * 2.20462 : weightRaw;

  // Calculations
  const base = getBaseRate(lbs);
  const adjusted = base * selectedMult;
  const speedAdj = adjusted - base;
  const brok = getBrokerage(value);
  const ins = insChecked ? Math.max(value * 0.015, 2) : 0;
  const photo = photoChecked ? 2 : 0;
  const total = adjusted + brok + ins + photo;
  const perLb = lbs > 0 ? total / lbs : 0;

  // Update result panel
  setResult('r-base', `$${base.toFixed(2)}`);
  setResult(
    'r-speed',
    speedAdj >= 0
      ? `+$${speedAdj.toFixed(2)}`
      : `-$${Math.abs(speedAdj).toFixed(2)}`,
  );
  setResult('r-brokerage', brok > 0 ? `$${brok.toFixed(2)}` : 'FREE');
  setResult('r-insurance', ins > 0 ? `$${ins.toFixed(2)}` : '—');
  setResult('r-photo', photo > 0 ? `$${photo.toFixed(2)}` : '—');
  setResult('r-total', `$${total.toFixed(2)}`);
  setResult('totalDisplay', `$${total.toFixed(2)}`);
  setResult('r-time', deliveryTimes[selectedSpeed]);
  setResult(
    'speedLabel',
    `${selectedSpeed.charAt(0).toUpperCase() + selectedSpeed.slice(1)} · ${deliveryTimes[selectedSpeed]}`,
  );
  setResult('r-weight', `${lbs.toFixed(2)} lb`);
  setResult('r-perlb', `$${perLb.toFixed(2)}/lb`);

  // Animate total
  const totalEl = document.getElementById('r-total');
  if (totalEl) {
    totalEl.style.animation = 'none';
    void totalEl.offsetHeight;
    totalEl.style.animation =
      'countUp 0.45s cubic-bezier(0.175,0.885,0.32,1.275)';
  }
}

function calculate() {
  const weight = parseFloat(document.getElementById('weight').value);
  if (!weight || weight <= 0) {
    showToast('⚠ Please enter a valid weight');
    document.getElementById('weight').focus();
    document.getElementById('weight').style.borderColor = '#ef4444';
    setTimeout(() => {
      document.getElementById('weight').style.borderColor = '#E8F0DC';
    }, 2000);
    return;
  }

  // Run calculation
  liveCalc();

  // Show toast
  const total = document.getElementById('r-total').textContent;
  showToast(`✓ Estimated cost: ${total}`);

  // Scroll to result on mobile
  if (window.innerWidth < 1024) {
    document
      .getElementById('r-total')
      .closest('.bg-white')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Show toast helper (fallback if script.js not loaded)
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Run initial calc on page load if values exist
window.addEventListener('load', () => {
  liveCalc();
});
