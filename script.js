document.addEventListener('DOMContentLoaded', function() {
    // Page loader
    const pageLoader = document.getElementById('pageLoader');
    
    // Hide loader after page is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            pageLoader.classList.add('hidden');
        }, 0);
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate skill level bars when they come into view
    const skillBars = document.querySelectorAll('.level-bar');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            if (isElementInViewport(bar) {
                bar.style.width = level + '%';
            }
        });
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Run on load and scroll
    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);
    
    // Animate progress timeline
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            if (isElementInViewport(bar)) {
                bar.style.width = progress + '%';
            }
        });
    }
    
    // Run on load and scroll
    animateProgressBars();
    window.addEventListener('scroll', animateProgressBars);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const subject = this.querySelector('#subject').value;
            const message = this.querySelector('#message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            alert(`Grazie ${name}! Il tuo messaggio è stato inviato con successo. Ti risponderò al più presto.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Intersection Observer for animations
    const animateElements = document.querySelectorAll('.animate-fade-up, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-zoom-in, .animate-fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Reading progress indicator
    const readingProgress = document.getElementById('progressBar');
    if (readingProgress) {
        window.addEventListener('scroll', function() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            readingProgress.style.width = scrollProgress + '%';
        });
    }
    
    // Floating shapes animation
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length > 0) {
        shapes.forEach((shape, index) => {
            // Random initial position and animation
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            const randomDelay = Math.random() * 5;
            const randomDuration = 10 + Math.random() * 20;
            
            shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
            shape.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
        });
    }
    
    // Add floating animation to particles
    const particles = document.querySelectorAll('.particle');
    if (particles.length > 0) {
        particles.forEach((particle, index) => {
            const randomDuration = 15 + Math.random() * 15;
            const randomDelay = Math.random() * 10;
            
            particle.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
        });
    }
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(10px, 10px);
        }
        100% {
            transform: translate(-10px, -10px);
        }
    }
`;
document.head.appendChild(style);
