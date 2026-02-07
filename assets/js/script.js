'use strict';

/**
 * Mobile Menu Toggle
 */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = mobileMenuBtn.querySelector('ion-icon');
  if (navLinks.classList.contains('active')) {
    icon.setAttribute('name', 'close-outline');
  } else {
    icon.setAttribute('name', 'menu-outline');
  }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuBtn.querySelector('ion-icon').setAttribute('name', 'menu-outline');
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
      // Stop observing once visible if you want it to only animate once
      // observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(element => {
  observer.observe(element);
});


/**
 * Smooth Scrolling for Anchor Links (Polyfill-like behavior)
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