// Mobile Navigation
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const closeMenu = document.querySelector('.close-menu');
const body = document.body;

function openMobileMenu() {
  mobileNav.classList.add('active');
  mobileNavOverlay.classList.add('active');
  body.classList.add('menu-open');
}

function closeMobileMenu() {
  mobileNav.classList.remove('active');
  mobileNavOverlay.classList.remove('active');
  body.classList.remove('menu-open');
}

mobileMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
mobileNavOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu on window resize if it's open
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
    closeMobileMenu();
  }
}); 