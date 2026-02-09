'use strict';

/**
 * Mobile Menu Toggle
 */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('ion-icon');
    if (navLinks.classList.contains('active')) {
      icon.setAttribute('name', 'close-outline');
    } else {
      icon.setAttribute('name', 'menu-outline');
    }
  });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    if (mobileMenuBtn) {
      mobileMenuBtn.querySelector('ion-icon').setAttribute('name', 'menu-outline');
    }
  });
});


/**
 * Active Link Highlighting on Scroll
 */
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function activeLink() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').includes(current)) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', activeLink);

/**
 * Scroll Progress Bar
 */
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = `${progress}%`;
  }
});


/**
 * Scroll Reveal Animation
 */
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(element => {
  observer.observe(element);
});


/**
 * Smooth Scrolling for Anchor Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


/**
 * Typewriter Effect
 */
const typingTextElement = document.querySelector('.typing-text');
const roles = [
  "Software Engineer",
  "Cloud Enthusiast",
  "Problem Solver"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
  if (!typingTextElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500; // Pause before new word
  }

  setTimeout(typeWriter, typeSpeed);
}

document.addEventListener('DOMContentLoaded', typeWriter);


/**
 * 3D Tilt Effect
 * Simple vanilla JS implementation
 */
document.querySelectorAll('.project-card, .service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

/**
 * Back to Top Button
 */
const backToTopBtn = document.querySelector('.back-to-top');



/**
 * Theme Toggle
 */
const themeToggleBtn = document.querySelector('.theme-toggle');
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('ion-icon') : null;

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('theme')) {
  const currentTheme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'light' && themeIcon) {
    themeIcon.setAttribute('name', 'moon-outline');
  } else if (themeIcon) {
    themeIcon.setAttribute('name', 'sunny-outline');
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';

    if (currentTheme === 'light') {
      targetTheme = 'dark';
    } else {
      targetTheme = 'light';
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);

    if (themeIcon) {
      if (targetTheme === 'default' || targetTheme === 'dark') { // Default is dark
        themeIcon.setAttribute('name', 'moon-outline');
      } else {
        themeIcon.setAttribute('name', 'sunny-outline');
      }
    }
  });
}

/**
 * Preloader Control
 */
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    // The last text appears at ~1.2s (0.9s delay + 0.3s anim)
    // We start the timer immediately to overlap with asset loading
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 100);
    }, 1300);
  }
});

/**
 * Spotlight Cursor
 */
const cursorSpotlight = document.querySelector('.cursor-spotlight');

if (cursorSpotlight) {
  document.addEventListener('mousemove', (e) => {
    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
      cursorSpotlight.style.left = e.clientX + 'px';
      cursorSpotlight.style.top = e.clientY + 'px';
    });
  });

  // Hide custom cursor when leaving window
  document.addEventListener('mouseout', () => {
    cursorSpotlight.style.opacity = '0';
  });

  document.addEventListener('mouseover', () => {
    cursorSpotlight.style.opacity = '1';
  });
}



