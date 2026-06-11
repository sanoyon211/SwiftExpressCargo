// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.classList.add('text-[#606060]');
    });
    document
      .querySelectorAll('.tab-content')
      .forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    btn.classList.remove('text-[#606060]');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});
