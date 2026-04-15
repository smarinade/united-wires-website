import { initParticles } from './animations.js';

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle background
    const particlesCanvas = document.getElementById('particles-bg');
    if (particlesCanvas) {
        initParticles(particlesCanvas);
    }

    // Game filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gameCards = document.querySelectorAll('.game-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get filter category
            const filter = button.dataset.filter;

            // Filter games with stagger animation
            gameCards.forEach((card, index) => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    // Stagger animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`;
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Add initial stagger animation to game cards
    gameCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`;
        card.style.opacity = '0';
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

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            const heroGlow = document.querySelector('.hero-glow');

            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
                heroContent.style.opacity = Math.max(0, 1 - (scrolled / 600));
            }

            if (heroGlow) {
                heroGlow.style.transform = `translate(-50%, -50%) scale(${1 + scrolled * 0.001})`;
                heroGlow.style.opacity = Math.max(0, 0.5 - (scrolled / 1000));
            }
        });
    }

    // Scroll reveal animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections - check if already in viewport
    document.querySelectorAll('.section').forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
            // Already in viewport, show immediately
            section.style.opacity = '1';
            section.style.animation = 'fadeInUp 0.6s ease-out forwards';
        } else {
            // Not in viewport, set up observation
            section.style.opacity = '0';
            observer.observe(section);
        }
    });

    // Add glow effect on card hover
    const cards = document.querySelectorAll('.blog-card, .game-card, .event-card, .featured-game');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            // Create glow element
            const glow = document.createElement('div');
            glow.className = 'card-glow';
            glow.style.cssText = `
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                background: linear-gradient(135deg, #c026d3, #ec4899, #06b6d4);
                border-radius: inherit;
                opacity: 0;
                z-index: -1;
                filter: blur(20px);
                transition: opacity 0.3s ease;
            `;
            this.style.position = 'relative';
            this.appendChild(glow);

            setTimeout(() => {
                glow.style.opacity = '0.5';
            }, 10);
        });

        card.addEventListener('mouseleave', function() {
            const glow = this.querySelector('.card-glow');
            if (glow) {
                glow.style.opacity = '0';
                setTimeout(() => glow.remove(), 300);
            }
        });
    });

    // Animate stats on scroll into view
    const stats = document.querySelectorAll('.stat');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target.querySelector('.stat-value');
                if (statValue && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    animateValue(statValue);
                }
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

    function animateValue(element) {
        const text = element.textContent;
        if (text === '∞') return;

        const target = parseInt(text);
        if (isNaN(target)) return;

        const duration = 1500;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Add ripple effect on button clicks
    const buttons = document.querySelectorAll('.btn, .filter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation CSS
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Mouse move parallax for hero glow
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const heroGlow = document.querySelector('.hero-glow');
            if (heroGlow) {
                const rect = hero.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;

                const moveX = (x - 0.5) * 50;
                const moveY = (y - 0.5) * 50;

                heroGlow.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
            }
        });

        hero.addEventListener('mouseleave', () => {
            const heroGlow = document.querySelector('.hero-glow');
            if (heroGlow) {
                heroGlow.style.transform = 'translate(-50%, -50%)';
            }
        });
    }

    // Add floating animation to game icons
    const gameIcons = document.querySelectorAll('.game-icon');
    gameIcons.forEach(icon => {
        const delay = Math.random() * 2;
        icon.style.animationDelay = `${delay}s`;
    });
});

// Resize handler for canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('particles-bg');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
