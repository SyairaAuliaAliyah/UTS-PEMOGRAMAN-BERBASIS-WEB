('DOMContentLoaded', function() {
   
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', function() {
       
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            console.log({
                name,
                email,
                subject,
                message
            });
        
            contactForm.reset();
            
           
            alert('Pesan Anda berhasil dikirim! Terima kasih telah menghubungi kami.');
        });
    }
    
    
    const allSections = document.querySelectorAll('.section');
    const elementsToAnimate = document.querySelectorAll('.portfolio-item, .achievement-card, .contact-form, .contact-info, .profile');
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
    });
    
    function checkScroll() {
        const fadeElements = document.querySelectorAll('.fade-in');
        const triggerBottom = window.innerHeight * 0.8;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }
    
    
    checkScroll();

    window.addEventListener('scroll', checkScroll);
    
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', function() {
        if (heroSection) {
            const scroll = window.pageYOffset;
            heroSection.style.backgroundPositionY = `${scroll * 0.5}px`;
        }
    });
    
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent || "Hello"; 
        heroTitle.textContent = ''; 
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        
        typeWriter();
    }
    
    
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioFilters = document.querySelectorAll('.portfolio-filter button');
    
    if (portfolioFilters.length > 0) {
        portfolioFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                
                portfolioFilters.forEach(btn => btn.classList.remove('active'));
                
                
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});