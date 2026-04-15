/**
 * Dark gaming-style particle animation
 * Creates floating particles with glow effects
 */

export function initParticles(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;
    const colors = [
        { r: 192, g: 38, b: 211, a: 0.6 },   // Purple
        { r: 236, g: 72, b: 153, a: 0.6 },   // Pink
        { r: 6, g: 182, b: 212, a: 0.4 },    // Cyan
        { r: 147, g: 51, b: 234, a: 0.5 }    // Purple variant
    ];

    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
            this.opacity = Math.random() * 0.5 + 0.3;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -10;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = Math.random() * 0.5 + 0.2;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.pulse += this.pulseSpeed;

            // Reset if out of bounds
            if (this.y > canvas.height + 10) {
                this.reset();
            }
            if (this.x < -10 || this.x > canvas.width + 10) {
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            const pulseSize = Math.sin(this.pulse) * 0.5 + 1;
            const currentSize = this.size * pulseSize;

            // Outer glow
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, currentSize * 4
            );
            gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`);
            gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize * 4, 0, Math.PI * 2);
            ctx.fill();

            // Core
            ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Connect nearby particles
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.2;
                    ctx.strokeStyle = `rgba(192, 38, 211, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        // Clear canvas with slight fade effect
        ctx.fillStyle = 'rgba(10, 1, 24, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Connect particles
        connectParticles();

        requestAnimationFrame(animate);
    }

    animate();

    // Mouse interaction
    let mouseX = -1000;
    let mouseY = -1000;

    canvas.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Attract particles to mouse
        particles.forEach(particle => {
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
                const force = (200 - distance) / 200;
                particle.speedX += (dx / distance) * force * 0.1;
                particle.speedY += (dy / distance) * force * 0.1;
            }
        });
    });

    canvas.addEventListener('mouseleave', () => {
        mouseX = -1000;
        mouseY = -1000;
    });

    // Click effect - create burst of particles
    canvas.addEventListener('click', (e) => {
        const clickX = e.clientX;
        const clickY = e.clientY;

        for (let i = 0; i < 10; i++) {
            const angle = (Math.PI * 2 / 10) * i;
            const speed = 2;
            const particle = new Particle();
            particle.x = clickX;
            particle.y = clickY;
            particle.speedX = Math.cos(angle) * speed;
            particle.speedY = Math.sin(angle) * speed;
            particle.size = 3;
            particle.opacity = 0.8;
            particles.push(particle);

            // Remove after animation
            setTimeout(() => {
                const index = particles.indexOf(particle);
                if (index > -1) {
                    particles.splice(index, 1);
                }
            }, 2000);
        }
    });
}

/**
 * Create energy pulse effect
 */
export function createEnergyPulse(element) {
    const pulse = document.createElement('div');
    pulse.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(192, 38, 211, 0.8), transparent);
        transform: translate(-50%, -50%);
        pointer-events: none;
        animation: energyPulse 1s ease-out forwards;
    `;

    element.style.position = 'relative';
    element.appendChild(pulse);

    setTimeout(() => pulse.remove(), 1000);
}

// Add energy pulse animation
if (!document.getElementById('energy-pulse-animation')) {
    const style = document.createElement('style');
    style.id = 'energy-pulse-animation';
    style.textContent = `
        @keyframes energyPulse {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
