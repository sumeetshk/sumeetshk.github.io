// Main JS for Sumeet's Interactive CV

document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Animations (Fade Up)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.content-section, .widget, .hero-content, .project-card, .contact-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
        observer.observe(el);
    });

    // CSS class for the visible state (appended dynamically)
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);


    // 2. Sticky Header Shadow on Scroll
    const nav = document.querySelector('.web-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)";
            nav.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            nav.style.boxShadow = "none";
            nav.style.background = "rgba(255, 255, 255, 0.85)";
        }
    });

    // 3. Simple Typing Effect for Tagline
    const tagline = document.querySelector('.hero-tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        let i = 0;

        // Wait a bit before starting
        setTimeout(() => {
            const typeWriter = setInterval(() => {
                if (i < text.length) {
                    tagline.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeWriter);
                }
            }, 30); // Speed of typing
        }, 1000);
    }

    console.log("Interactive CV Loaded 🚀");
});
