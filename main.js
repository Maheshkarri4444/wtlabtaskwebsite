// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  // Initialize Masonry layout
  window.addEventListener('load', () => {
    const grid = document.querySelector('.row[data-masonry]');
    new Masonry(grid, {
      itemSelector: '.col-sm-6',
      percentPosition: true
    });
  });
  
  // Form validation
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
    
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
    form.classList.remove('was-validated');
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Section visibility animation
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Initialize all tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));