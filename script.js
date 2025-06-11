document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
      }
    });
  });
  
  // Sticky navbar on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }
  
  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formValues);
      
      // Show success message
      alert('Grazie per il tuo messaggio! Ti risponderò al più presto.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress');
  if (skillBars.length > 0) {
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    };
    
    // Use Intersection Observer to trigger animation when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skills-list').forEach(section => {
      observer.observe(section);
    });
  }
  
  // Animate progress circles
  const progressCircles = document.querySelectorAll('.skill-progress-circle');
  if (progressCircles.length > 0) {
    const animateProgressCircles = () => {
      progressCircles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        const path = circle.querySelector('path:nth-child(2)');
        
        if (path) {
          const circumference = 2 * Math.PI * 15.9155;
          const offset = circumference - (percentage / 100) * circumference;
          path.style.strokeDashoffset = offset;
        }
      });
    };
    
    // Use Intersection Observer to trigger animation when element is in view
    const circleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressCircles();
          circleObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    progressCircles.forEach(circle => {
      circleObserver.observe(circle);
    });
  }
  
  // Simple AOS (Animate On Scroll) implementation
  const aosElements = document.querySelectorAll('[data-aos]');
  if (aosElements.length > 0) {
    const aosObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          aosObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    aosElements.forEach(element => {
      aosObserver.observe(element);
    });
  }
  
  // Floating card hover effect
  const floatingCards = document.querySelectorAll('.floating-card');
  floatingCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const x = e.clientX - card.getBoundingClientRect().left;
      const y = e.clientY - card.getBoundingClientRect().top;
      
      const centerX = card.offsetWidth / 2;
      const centerY = card.offsetHeight / 2;
      
      const angleX = (y - centerY) / 10;
      const angleY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
  
  // Set current year in footer
  const yearElement = document.querySelector('.footer-bottom p');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
  }
});
