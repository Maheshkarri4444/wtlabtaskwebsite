// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 50
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Masonry Layout
document.addEventListener('DOMContentLoaded', function() {
    var grid = document.querySelector('.row[data-masonry]');
    if (grid) {
        var masonry = new Masonry(grid, {
            itemSelector: '.col-sm-6',
            percentPosition: true
        });

        // Update layout after images are loaded
        imagesLoaded(grid).on('progress', function() {
            masonry.layout();
        });
    }
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Animate button
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            // Show success message
            const alert = document.createElement('div');
            alert.className = 'alert alert-success mt-3';
            alert.innerHTML = '<i class="fas fa-check-circle me-2"></i>Thank you! We\'ll get back to you soon.';
            this.appendChild(alert);

            // Reset form
            this.reset();
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;

            // Remove alert after 5 seconds
            setTimeout(() => {
                alert.remove();
            }, 5000);
        }, 1500);
    });
}

// Modal Image Gallery
document.querySelectorAll('.design-card img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.querySelector('#designModal');
        const modalImg = modal.querySelector('.modal-body img');
        modalImg.src = this.src;
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate section titles
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
});

// Animate cards
gsap.utils.toArray('.card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Previous Typography Animations Remain Here
// [Previous typography-related animations...]