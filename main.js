// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy Load Images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('.lead-image img, .inline-media img');
    const options = {
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }, options);

    images.forEach(img => {
        if (img.getAttribute('data-src')) {
            observer.observe(img);
        }
    });
};

// Initialize Lazy Loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Handle Video Embed Playback
const videoEmbeds = document.querySelectorAll('.media-container iframe');
videoEmbeds.forEach(iframe => {
    iframe.addEventListener('load', () => {
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
    });
});

// Highlight Key Facts on Scroll
const highlightKeyFacts = () => {
    const keyFactsSection = document.querySelector('.key-facts');
    if (keyFactsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    keyFactsSection.style.backgroundColor = '#E6F0FF'; // Light blue highlight
                    keyFactsSection.style.transition = 'background-color 0.5s ease';
                } else {
                    keyFactsSection.style.backgroundColor = '#F8F9FA'; // Reset to original color
                }
            });
        }, { threshold: 0.5 });

        observer.observe(keyFactsSection);
    }
};

// Initialize Key Facts Highlighting
document.addEventListener('DOMContentLoaded', highlightKeyFacts);

// Handle Related Content Links
const relatedLinks = document.querySelectorAll('.related-content a');
relatedLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href.startsWith('http')) {
            window.open(href, '_blank'); // Open external links in a new tab
        } else {
            window.location.href = href; // Navigate to internal links
        }
    });
});