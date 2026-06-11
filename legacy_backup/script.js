// ===== SWIFT EXPRESS CARGO - GLOBAL SCRIPT =====

// ===== PRELOADER =====
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('hide'), 500);
  }
});

// ===== MOBILE MENU =====
const menubtn = document.getElementById('menubtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menubtn && mobileMenu) {
  menubtn.addEventListener('click', e => {
    e.stopPropagation();
    mobileMenu.classList.toggle('hidden');

    // Animate hamburger icon
    const icon = menubtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });

  // Close menu on outside click
  document.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target) && !menubtn.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      const icon = menubtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    }
  });

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ===== NAVBAR SCROLL EFFECT =====
const navWrapper = document.querySelector('header > div:nth-child(2)');
window.addEventListener('scroll', () => {
  if (navWrapper) {
    if (window.scrollY > 50) {
      navWrapper.classList.add('nav-scrolled');
    } else {
      navWrapper.classList.remove('nav-scrolled');
    }
  }
});

// ===== PROGRESS BAR =====
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
}

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
);

document
  .querySelectorAll('.reveal, .reveal-left, .reveal-right')
  .forEach(el => {
    revealObserver.observe(el);
  });

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);

  const timer = setInterval(() => {
    start += step;

    if (start >= target) {
      el.textContent = target.toLocaleString() + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent =
        Math.floor(start).toLocaleString() + (el.dataset.suffix || '');
    }
  }, 16);
}

const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll('[data-target]').forEach(el => {
  counterObserver.observe(el);
});

// ===== TOAST NOTIFICATION =====
function showToast(message, duration = 3000) {
  let toast = document.querySelector('.toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => toast.classList.remove('show'), duration);
}

// ===== ACTIVE NAV LINK (FIXED VERSION) =====
let currentPage = window.location.pathname.split('/').pop();

// If homepage like "/" then set index.html
if (currentPage === '' || currentPage === '/') {
  currentPage = 'index.html';
}

document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (!href) return;

  const cleanHref = href.split('/').pop();

  if (cleanHref === currentPage) {
    link.classList.add('nav-active');
  } else {
    link.classList.remove('nav-active');
  }
});

// ===== NEWSLETTER FORM =====
document.querySelectorAll('footer form, .newsletter-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      showToast('✓ Successfully subscribed!');
      input.value = '';
    }
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');

    if (btn) {
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '✓ Message Sent!';
        showToast('✓ Your message has been sent successfully!');

        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1500);
    }
  });
}

// ===== TRACKING FORM =====
const trackingForms = document.querySelectorAll(
  '.tracking-form, [data-tracking]',
);

trackingForms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');

    if (input && input.value.trim()) {
      window.location.href = `tracking.html?id=${input.value.trim()}`;
    } else {
      showToast('⚠ Please enter a tracking number');
    }
  });
});

// ===== HEADER SLIDER (index.html) =====
const bgImages = [
  './assets/boat.png',
  './assets/cargo-ship-sailing-ocean.jpg',
  './assets/arialview.jpg',
];

let currentIndex = 0;
const header = document.querySelector('header');

function updateBackground(index) {
  if (!header) return;

  header.style.transition = 'background-image 0.5s ease';
  header.style.backgroundImage = `url('${bgImages[index]}')`;
  header.style.backgroundSize = 'cover';
  header.style.backgroundPosition = 'center';
  header.style.backgroundRepeat = 'no-repeat';
}

// Auto-slide
if (header && bgImages.length > 1) {
  let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % bgImages.length;
    updateBackground(currentIndex);
    updateDots();
  }, 5000);

  // Arrow buttons
  ['leftArrow', 'leftbtn1'].forEach(id => {
    const btn = document.getElementById(id);

    if (btn)
      btn.addEventListener('click', () => {
        clearInterval(autoSlide);
        currentIndex = (currentIndex - 1 + bgImages.length) % bgImages.length;
        updateBackground(currentIndex);
        updateDots();
      });
  });

  ['rightArrow', 'rightbtn1'].forEach(id => {
    const btn = document.getElementById(id);

    if (btn)
      btn.addEventListener('click', () => {
        clearInterval(autoSlide);
        currentIndex = (currentIndex + 1) % bgImages.length;
        updateBackground(currentIndex);
        updateDots();
      });
  });
}

// Update slider dots
function updateDots() {
  const dots = document.querySelectorAll('.slider-dot');

  dots.forEach((dot, i) => {
    if (i === currentIndex) {
      dot.classList.add('bg-primary-green');
      dot.classList.remove('bg-primary-green/40');
    } else {
      dot.classList.remove('bg-primary-green');
      dot.classList.add('bg-primary-green/40');
    }
  });
}

// ===== ACCORDION =====
document.querySelectorAll('.accordion-item').forEach(item => {
  const btn = item.querySelector('.accordion-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    document.querySelectorAll('.accordion-item').forEach(i => {
      if (i !== item) {
        i.querySelector('.accordion-content')?.style &&
          (i.querySelector('.accordion-content').style.maxHeight = '0px');

        i.querySelector('.arrow')?.style &&
          (i.querySelector('.arrow').style.transform = 'rotate(0deg)');
      }
    });

    const content = item.querySelector('.accordion-content');
    const arrow = item.querySelector('.arrow');

    if (content) {
      if (!content.style.maxHeight || content.style.maxHeight === '0px') {
        content.style.maxHeight = content.scrollHeight + 'px';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
      } else {
        content.style.maxHeight = '0px';
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      }
    }
  });
});

// ===== SMOOTH IMAGE LOADING =====
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('load', () => {
    img.style.opacity = '1';
  });

  if (!img.complete) {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  }
});

// ===== COST CALCULATOR =====
const calcForm = document.getElementById('calculatorForm');
if (calcForm) {
  calcForm.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'after-cost-calculator.html';
  });
}

// ===== NEWSLETTER SUBSCRIBE =====
document.querySelectorAll('.subscribe-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const input = e.target.closest('div').querySelector('input[type="email"]');

    if (input && input.value) {
      showToast("✓ You've been subscribed!");
      input.value = '';
    } else {
      showToast('⚠ Please enter your email address');
    }
  });
});

// ===== STAR RATING (feedback) =====
document.querySelectorAll('.star-rating').forEach(container => {
  const stars = container.querySelectorAll('.star');

  stars.forEach((star, i) => {
    star.addEventListener('mouseover', () => {
      stars.forEach((s, j) => {
        s.classList.toggle('text-yellow-400', j <= i);
        s.classList.toggle('text-gray-300', j > i);
      });
    });

    star.addEventListener('click', () => {
      container.dataset.rating = i + 1;
    });
  });

  container.addEventListener('mouseleave', () => {
    const rating = parseInt(container.dataset.rating || 0);

    stars.forEach((s, j) => {
      s.classList.toggle('text-yellow-400', j < rating);
      s.classList.toggle('text-gray-300', j >= rating);
    });
  });
});

// ===== COPY TO CLIPBOARD =====
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(btn.dataset.copy).then(() => {
      showToast('✓ Copied to clipboard!');
    });
  });
});

console.log('✅ Swift Express Cargo - Scripts Loaded');
