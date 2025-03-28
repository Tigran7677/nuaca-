class Header {
    constructor() {
        this.header = document.querySelector('.header');
        this.mobileToggle = document.querySelector('.header__mobile-toggle');
        this.nav = document.querySelector('.header__nav');
        
        this.init();
    }

    init() {
        this.addEventListeners();
        this.setActiveLink();
    }

    addEventListeners() {
        this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.nav.contains(e.target) && this.nav.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });

        // Close menu on link click
        document.querySelectorAll('.header__nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    this.closeMobileMenu();
                }
            });
        });
    }

    toggleMobileMenu() {
        const isExpanded = this.mobileToggle.getAttribute('aria-expanded') === 'true';
        this.mobileToggle.setAttribute('aria-expanded', !isExpanded);
        this.nav.classList.toggle('active');
    }

    closeMobileMenu() {
        this.mobileToggle.setAttribute('aria-expanded', 'false');
        this.nav.classList.remove('active');
    }

    setActiveLink() {
        const currentPath = window.location.pathname;
        document.querySelectorAll('.header__nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new Header();
});