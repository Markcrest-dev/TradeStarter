// ========================================
// TRADEMASTER - THEME SYSTEM
// Dark/Light Mode Toggle
// ========================================

class ThemeSystem {
    constructor() {
        this.currentTheme = this.loadTheme();
        this.init();
    }

    // Load theme from localStorage or system preference
    loadTheme() {
        const savedTheme = localStorage.getItem('trademaster-theme');

        if (savedTheme) {
            return savedTheme;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }

    // Save theme to localStorage
    saveTheme(theme) {
        localStorage.setItem('trademaster-theme', theme);
    }

    // Initialize theme system
    init() {
        // Apply saved theme
        this.applyTheme(this.currentTheme);

        // Set correct logo
        this.updateLogo(this.currentTheme);

        // Create theme toggle button
        this.createThemeToggle();

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('trademaster-theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    // Apply theme to document
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        this.updateToggleIcon();
    }

    // Toggle between themes
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    // Set specific theme
    setTheme(theme) {
        this.applyTheme(theme);
        this.saveTheme(theme);
        this.updateLogo(theme);
        this.showThemeChangeNotification(theme);
    }

    // Update logo based on theme
    updateLogo(theme) {
        const logoImg = document.querySelector('.logo img');
        if (logoImg) {
            const logoSrc = theme === 'dark' ? 'images/logo-dark.png' : 'images/logo-light.png';
            logoImg.src = logoSrc;
        }
    }

    // Create theme toggle button in navbar (disabled - moved to settings page)
    createThemeToggle() {
        // Desktop theme toggle removed - now in settings page
        // Only setup mobile theme toggle
        this.setupMobileThemeToggle();
        this.updateToggleIcon();
    }

    // Setup mobile theme toggle
    setupMobileThemeToggle() {
        const mobileToggle = document.getElementById('theme-toggle-mobile');

        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    // Update toggle icon based on current theme
    updateToggleIcon() {
        const lightIcon = document.querySelector('.theme-icon-light');
        const darkIcon = document.querySelector('.theme-icon-dark');

        if (lightIcon && darkIcon) {
            if (this.currentTheme === 'dark') {
                lightIcon.style.display = 'flex';
                darkIcon.style.display = 'none';
            } else {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'flex';
            }
        }
    }

    // Show theme change notification
    showThemeChangeNotification(theme) {
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.innerHTML = `
            <i class="fas fa-${theme === 'dark' ? 'moon' : 'sun'}"></i>
            <span>${theme === 'dark' ? 'Dark' : 'Light'} mode activated</span>
        `;

        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 10);

        // Remove after animation
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

// Initialize theme system
document.addEventListener('DOMContentLoaded', () => {
    window.themeSystem = new ThemeSystem();
});
