// Filter brands
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      b.classList.add('text-[#606060]');
    });
    btn.classList.add('active');
    btn.classList.remove('text-[#606060]');
    const cat = btn.dataset.cat;
    const cards = document.querySelectorAll('.brand-card');
    let visible = 0;
    cards.forEach(c => {
      const show = cat === 'all' || c.dataset.cat === cat;
      c.style.display = show ? 'flex' : 'none';
      if (show) visible++;
    });
    document
      .getElementById('noResults')
      .classList.toggle('hidden', visible > 0);
  });
});

// Search brands
document.getElementById('brandSearch').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.brand-card');
  let visible = 0;
  cards.forEach(c => {
    const match = c.dataset.name.includes(q);
    c.style.display = match ? 'flex' : 'none';
    if (match) visible++;
  });
  document.getElementById('noResults').classList.toggle('hidden', visible > 0);
});
