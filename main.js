// ===== Apex Logistics - Main JS =====

document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('header');
    const onScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile navigation toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('nav');
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        mobileToggle.classList.toggle('active');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            mobileToggle.classList.remove('active');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNav = () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', highlightNav, { passive: true });

    // Animated counters
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const update = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            };
            update();
        });
    };

    // Intersection Observer for counters
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        observer.observe(heroStats);
    }

    // Tracking form
    const trackingForm = document.getElementById('trackingForm');
    const trackingResult = document.getElementById('trackingResult');
    const trackingInput = document.getElementById('trackingInput');

    const sampleTimeline = [
        { title: 'Shipment Created', time: 'Jul 28, 2026 · Shanghai', active: true },
        { title: 'Departed Origin Port', time: 'Jul 30, 2026 · Shanghai', active: true },
        { title: 'In Transit – Ocean', time: 'Aug 02, 2026 · Pacific Ocean', active: true },
        { title: 'Arrived Destination Port', time: 'Est. Aug 12, 2026 · Rotterdam', active: false },
        { title: 'Out for Delivery', time: 'Est. Aug 14, 2026', active: false },
    ];

    trackingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = trackingInput.value.trim() || 'APL-88421-X';

        document.getElementById('resultId').textContent = id.toUpperCase();
        document.getElementById('resultStatus').textContent = 'In Transit';

        const timeline = document.getElementById('resultTimeline');
        timeline.innerHTML = sampleTimeline.map(item => `
            <div class="timeline-item ${item.active ? 'active' : ''}">
                <div class="timeline-dot"></div>
                <div>
                    <strong>${item.title}</strong>
                    <span>${item.time}</span>
                </div>
            </div>
        `).join('');

        trackingResult.hidden = false;
        trackingResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        // Simulate submission
        setTimeout(() => {
            btn.textContent = 'Message Sent ✓';
            btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
            contactForm.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1200);
    });

    // Smooth reveal on scroll (simple fade-in)
    const revealElements = document.querySelectorAll(
        '.service-card, .testimonial-card, .about-feature, .contact-item'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });
});
