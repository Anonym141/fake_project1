document.addEventListener('DOMContentLoaded', function() {
  
  const container = document.querySelector('.container');
  container.style.opacity = '0';
  
  setTimeout(() => {
    container.style.transition = 'opacity 1s ease-in-out';
    container.style.opacity = '1';
  }, 100);

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.layanan-section, .tentang, .kontak, .footer');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
  });

  const layananContent = document.querySelector('.layanan-content');
  if (layananContent) {
    layananContent.style.opacity = '0';
    layananContent.style.transform = 'translateX(-30px)';
    layananContent.style.transition = 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s';
    observer.observe(layananContent);
  }

  const card = document.querySelector('.card');
  if (card) {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    card.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';
    observer.observe(card);
  }

  const boxes = document.querySelector('.boxs');
  if (boxes) {
    boxes.style.opacity = '0';
    boxes.style.transform = 'translateY(30px)';
    boxes.style.transition = 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s';
    observer.observe(boxes);
  }

  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) translateX(0) scale(1) !important;
    }
  `;
  document.head.appendChild(style);

  const btnHero = document.querySelector('.btn-hero');
  if (btnHero) {
    btnHero.addEventListener('', function(e) {
      e.preventDefault();
      const layananSection = document.getElementById('layanan');
      if (layananSection) {
        layananSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const navLinks = document.querySelectorAll('.navbar ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  const socialLinks = document.querySelectorAll('.links a, .icon a');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease';
      this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    } else {
      navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
  });

});