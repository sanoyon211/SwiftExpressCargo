// Demo tracking data
const trackingData = {
  'SEC-2025-001234': {
    status: 'In Transit',
    statusClass: 'bg-blue-500',
    from: 'New York, USA',
    to: 'Dhaka, Bangladesh',
    weight: '2.5 kg',
    estDelivery: 'Mar 30, 2025',
    currentStep: 2, // 0-indexed
    history: [
      {
        date: 'Mar 25, 2025 14:30',
        location: 'Frankfurt, Germany',
        event: 'Package in transit hub',
        icon: 'fas fa-plane',
        active: true,
      },
      {
        date: 'Mar 24, 2025 08:15',
        location: 'London, UK',
        event: 'Departed from facility',
        icon: 'fas fa-plane-departure',
        active: false,
      },
      {
        date: 'Mar 23, 2025 22:00',
        location: 'New York, USA',
        event: 'Cleared export customs',
        icon: 'fas fa-passport',
        active: false,
      },
      {
        date: 'Mar 23, 2025 10:30',
        location: 'New York, USA',
        event: 'Package received at warehouse',
        icon: 'fas fa-warehouse',
        active: false,
      },
      {
        date: 'Mar 22, 2025 16:45',
        location: 'Online',
        event: 'Shipment booked',
        icon: 'fas fa-clipboard-check',
        active: false,
      },
    ],
  },
  'SEC-2025-005678': {
    status: 'Delivered',
    statusClass: 'bg-green-500',
    from: 'Los Angeles, USA',
    to: 'Chittagong, Bangladesh',
    weight: '1.2 kg',
    estDelivery: 'Mar 20, 2025',
    currentStep: 4,
    history: [
      {
        date: 'Mar 20, 2025 14:00',
        location: 'Chittagong, Bangladesh',
        event: 'Package delivered successfully',
        icon: 'fas fa-check-circle',
        active: true,
      },
      {
        date: 'Mar 20, 2025 09:00',
        location: 'Chittagong, Bangladesh',
        event: 'Out for delivery',
        icon: 'fas fa-truck',
        active: false,
      },
      {
        date: 'Mar 19, 2025 18:00',
        location: 'Dhaka, Bangladesh',
        event: 'Cleared import customs',
        icon: 'fas fa-passport',
        active: false,
      },
      {
        date: 'Mar 18, 2025 12:00',
        location: 'Dubai, UAE',
        event: 'In transit hub',
        icon: 'fas fa-plane',
        active: false,
      },
      {
        date: 'Mar 15, 2025 08:00',
        location: 'Los Angeles, USA',
        event: 'Package picked up',
        icon: 'fas fa-box',
        active: false,
      },
    ],
  },
  'SEC-2025-009012': {
    status: 'Out for Delivery',
    statusClass: 'bg-yellow-500',
    from: 'Chicago, USA',
    to: 'Sylhet, Bangladesh',
    weight: '3.8 kg',
    estDelivery: 'Mar 26, 2025',
    currentStep: 3,
    history: [
      {
        date: 'Mar 25, 2025 09:30',
        location: 'Sylhet, Bangladesh',
        event: 'Out for delivery',
        icon: 'fas fa-truck',
        active: true,
      },
      {
        date: 'Mar 24, 2025 20:00',
        location: 'Dhaka, Bangladesh',
        event: 'Cleared customs & duties',
        icon: 'fas fa-passport',
        active: false,
      },
      {
        date: 'Mar 23, 2025 14:00',
        location: 'Dhaka, Bangladesh',
        event: 'Arrived at destination country',
        icon: 'fas fa-flag',
        active: false,
      },
      {
        date: 'Mar 20, 2025 06:00',
        location: 'Chicago, USA',
        event: 'Departed from origin',
        icon: 'fas fa-plane-departure',
        active: false,
      },
    ],
  },
};

const steps = ['Booked', 'Processing', 'In Transit', 'Customs', 'Delivered'];
const stepIcons = [
  'fas fa-clipboard-check',
  'fas fa-cog',
  'fas fa-plane',
  'fas fa-passport',
  'fas fa-check-circle',
];

function renderTracking(id) {
  const data = trackingData[id];
  if (!data) {
    document.getElementById('trackingResult').classList.remove('show');
    document.getElementById('trackingResult').style.display = 'none';
    document.getElementById('notFoundState').classList.remove('hidden');
    return;
  }

  document.getElementById('notFoundState').classList.add('hidden');
  document.getElementById('displayTrackId').textContent = id;
  document.getElementById('statusBadge').textContent = data.status;
  document.getElementById('estDelivery').textContent = data.estDelivery;

  // Progress Steps
  const stepsEl = document.getElementById('progressSteps');
  stepsEl.innerHTML = `
    <div class="flex items-center justify-between mb-6 overflow-x-auto pb-2">
      ${steps
        .map(
          (step, i) => `
        <div class="flex flex-col items-center gap-2 min-w-[60px]">
          <div class="w-12 h-12 rounded-full flex items-center justify-center shadow-md
            ${i < data.currentStep ? 'step-done' : i === data.currentStep ? 'step-current' : 'step-pending'}">
            <i class="${stepIcons[i]} ${i <= data.currentStep ? 'text-white' : 'text-gray-400'} text-sm"></i>
          </div>
          <span class="text-xs font-medium ${i <= data.currentStep ? 'text-[#6DA015]' : 'text-gray-400'} text-center leading-tight">${step}</span>
        </div>
        ${i < steps.length - 1 ? `<div class="flex-1 h-1 mx-1 rounded ${i < data.currentStep ? 'line-done' : 'line-pending'}"></div>` : ''}
      `,
        )
        .join('')}
    </div>
    <div class="bg-gradient-to-r from-[#F1F6F2] to-[#E8F8F5] rounded-2xl p-4 flex items-center gap-4">
      <div class="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-xl flex items-center justify-center">
        <i class="fas fa-info text-white"></i>
      </div>
      <div>
        <p class="font-semibold text-[#333] text-sm">Current Status: ${data.status}</p>
        <p class="text-[#606060] text-xs mt-1">${data.history[0].event} — ${data.history[0].location}</p>
      </div>
    </div>
  `;

  // History
  const historyEl = document.getElementById('trackingHistory');
  historyEl.innerHTML = data.history
    .map(
      (h, i) => `
    <div class="flex gap-4 ${i < data.history.length - 1 ? 'pb-6 border-l-2 ml-5 pl-0 border-[#DCE8C6]' : ''}">
      <div class="flex flex-col items-center ${i < data.history.length - 1 ? '-ml-5' : ''}">
        <div class="w-10 h-10 rounded-full flex items-center justify-center shadow-sm flex-shrink-0
          ${h.active ? 'bg-gradient-to-r from-[#6DA015] to-[#46C0A2]' : 'bg-[#F1F6F2] border border-[#DCE8C6]'}">
          <i class="${h.icon} ${h.active ? 'text-white' : 'text-[#6DA015]'} text-xs"></i>
        </div>
      </div>
      <div class="pb-2 flex-1">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
          <p class="font-semibold text-[#333] text-sm">${h.event}</p>
          <p class="text-[#606060] text-xs whitespace-nowrap">${h.date}</p>
        </div>
        <p class="text-[#606060] text-xs mt-1 flex items-center gap-1">
          <i class="fas fa-map-marker-alt text-[#6DA015]"></i>${h.location}
        </p>
      </div>
    </div>
  `,
    )
    .join('');

  const result = document.getElementById('trackingResult');
  result.style.display = 'block';
  result.classList.add('show');

  // Re-run reveal animations
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
}

// Track button
document.getElementById('trackBtn').addEventListener('click', () => {
  const val = document
    .getElementById('trackingInput')
    .value.trim()
    .toUpperCase();
  if (val) renderTracking(val);
  else showToast('⚠ Please enter a tracking number');
});

document.getElementById('trackingInput').addEventListener('keypress', e => {
  if (e.key === 'Enter') document.getElementById('trackBtn').click();
});

// Demo buttons
document.querySelectorAll('.demo-track').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    document.getElementById('trackingInput').value = id;
    renderTracking(id);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  });
});

// Auto-track from URL params
const urlParams = new URLSearchParams(window.location.search);
const urlId = urlParams.get('id');
if (urlId) {
  document.getElementById('trackingInput').value = urlId;
  setTimeout(() => renderTracking(urlId.toUpperCase()), 800);
}

function showToast(msg) {
  let t = document.querySelector('.toast');
  if (t) {
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }
}
