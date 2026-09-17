/**
 * Pune Brew House — Production Client Website Script
 * Lightweight vanilla JavaScript for navigation accessibility and reading progress
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLink();
  initReadingProgressBar();
});

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Active Navigation Link Highlighter
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Match root or path
    const normalizedHref = href.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
    if (normalizedHref === currentPath || (currentPath === '' && normalizedHref === '/')) {
      link.classList.add('active');
    } else if (currentPath.startsWith('/blog') && normalizedHref.startsWith('/blog')) {
      link.classList.add('active');
    }
  });
}

/**
 * Reading Progress Indicator for Editorial Blog Posts
 */
function initReadingProgressBar() {
  const progressBar = document.querySelector('.reading-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  }, { passive: true });
}
