// ========================================
// TRADEMASTER - INTERNATIONALIZATION SYSTEM
// Multi-language Support
// ========================================

class I18nSystem {
    constructor() {
        this.currentLang = localStorage.getItem('trademaster-lang') || 'en';
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadTranslations(this.currentLang);
        this.translatePage();
        this.setupLanguageSelector();
        console.log(`I18n System initialized with language: ${this.currentLang}`);
    }

    async loadTranslations(lang) {
        try {
            const response = await fetch(`lang/${lang}.json`);
            if (!response.ok) throw new Error(`Failed to load ${lang} translations`);
            this.translations = await response.json();
            document.documentElement.lang = lang;
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to English if loading fails
            if (lang !== 'en') {
                console.log('Falling back to English');
                await this.loadTranslations('en');
            }
        }
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedTranslation(this.translations, key);

            if (translation) {
                // Check if element has placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.placeholder = translation;
                    }
                } else {
                    element.textContent = translation;
                }
            } else {
                console.warn(`Missing translation for key: ${key}`);
            }
        });

        // Dispatch event for other components to react
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { lang: this.currentLang }
        }));
    }

    getNestedTranslation(obj, path) {
        return path.split('.').reduce((prev, curr) => {
            return prev ? prev[curr] : null;
        }, obj);
    }

    async setLanguage(lang) {
        if (lang === this.currentLang) return;

        this.currentLang = lang;
        localStorage.setItem('trademaster-lang', lang);

        await this.loadTranslations(lang);
        this.translatePage();

        // Show notification
        this.showNotification(this.translations.languageChanged || 'Language changed!');
    }

    setupLanguageSelector() {
        const selector = document.getElementById('language-selector');
        const mobileSelector = document.getElementById('language-selector-mobile');
        const settingsSelector = document.getElementById('language-select');

        // Set initial values
        if (selector) {
            selector.value = this.currentLang;
            selector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
                // Sync other selectors
                if (mobileSelector) mobileSelector.value = e.target.value;
                if (settingsSelector) settingsSelector.value = e.target.value;
            });
        }

        // Setup mobile selector
        if (mobileSelector) {
            mobileSelector.value = this.currentLang;
            mobileSelector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
                // Sync other selectors
                if (selector) selector.value = e.target.value;
                if (settingsSelector) settingsSelector.value = e.target.value;
            });
        }

        // Setup settings page selector
        if (settingsSelector) {
            settingsSelector.value = this.currentLang;
            settingsSelector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
                // Sync other selectors
                if (selector) selector.value = e.target.value;
                if (mobileSelector) mobileSelector.value = e.target.value;
            });
        }
    }

    showNotification(message) {
        // Use existing notification system if available, or create simple one
        const notification = document.createElement('div');
        notification.className = 'toast-notification show';
        notification.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-globe"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    window.i18nSystem = new I18nSystem();
});
