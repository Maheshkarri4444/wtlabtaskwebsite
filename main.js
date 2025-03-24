// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 50
  });
  
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Animate typography cards on scroll
  gsap.utils.toArray('.typography-card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });
  });
  
  // Wave text animation
  const waveText = document.querySelector('.wave-text');
  if (waveText) {
    [...waveText.children].forEach((span, index) => {
      span.style.setProperty('--i', index);
    });
  }
  
  // Split text animation
  const splitText = document.querySelector('.split-text');
  if (splitText) {
    splitText.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains('char')) {
        e.target.style.color = getRandomColor();
        e.target.style.transform = 'translateY(-10px) rotate(' + (Math.random() * 20 - 10) + 'deg)';
      }
    });
  
    splitText.addEventListener('mouseout', (e) => {
      if (e.target.classList.contains('char')) {
        e.target.style.color = '';
        e.target.style.transform = '';
      }
    });
  }
  
  // Random color generator
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Perspective text animation
  const perspectiveText = document.querySelector('.perspective-text');
  if (perspectiveText) {
    const lines = perspectiveText.querySelectorAll('.perspective-line');
    lines.forEach(line => {
      const firstP = line.querySelector('p:first-child');
      const lastP = line.querySelector('p:last-child');
      if (firstP && lastP) {
        firstP.style.transform = 'rotateY(0deg)';
        lastP.style.transform = 'rotateY(90deg)';
      }
    });
  }
  
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 60;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });