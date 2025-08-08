document.addEventListener('DOMContentLoaded', () => {
  // Navigation menu toggle for mobile
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.getElementById('nav-list');
  menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // account for fixed header
          behavior: 'smooth'
        });
        // Close menu after navigation on mobile
        navList.classList.remove('active');
      }
    });
  });

  // Contact form submission (client-side only)
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    // Collect form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      ticket: document.getElementById('ticket').value,
      message: document.getElementById('message').value
    };
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    form.reset();
  });
});