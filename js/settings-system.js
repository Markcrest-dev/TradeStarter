// ========================================
// TRADEMASTER - SETTINGS SYSTEM
// Centralized Settings Management
// ========================================

class SettingsSystem {
    constructor() {
        this.settings = this.loadSettings();
        this.init();
    }

    // Default settings structure
    getDefaultSettings() {
        return {
            theme: 'light',
            language: 'en',
            display: {
                reduceAnimations: false,
                compactMode: false
            },
            learning: {
                showHints: true,
                autoNext: false
            },
            notifications: {
                achievements: true,
                soundEffects: true
            }
        };
    }

    // Load settings from localStorage
    loadSettings() {
        const savedSettings = localStorage.getItem('trademaster-settings');

        if (savedSettings) {
            try {
                return { ...this.getDefaultSettings(), ...JSON.parse(savedSettings) };
            } catch (error) {
                console.error('Error loading settings:', error);
                return this.getDefaultSettings();
            }
        }

        return this.getDefaultSettings();
    }

    // Save settings to localStorage
    saveSettings() {
        localStorage.setItem('trademaster-settings', JSON.stringify(this.settings));
    }

    // Initialize settings system
    init() {
        if (!document.querySelector('.settings-page')) return;

        this.applySettings();
        this.setupEventListeners();
        this.updateUI();
    }

    // Apply all settings
    applySettings() {
        // Theme is handled by ThemeSystem
        // Language is handled by I18nSystem

        // Apply display settings
        if (this.settings.display.reduceAnimations) {
            document.body.classList.add('reduce-animations');
        }

        if (this.settings.display.compactMode) {
            document.body.classList.add('compact-mode');
        }
    }

    // Setup all event listeners
    setupEventListeners() {
        // Theme options
        this.setupThemeOptions();

        // Language selector
        this.setupLanguageSelector();

        // Display settings
        this.setupToggle('reduce-animations', (checked) => {
            this.settings.display.reduceAnimations = checked;
            this.saveSettings();

            if (checked) {
                document.body.classList.add('reduce-animations');
            } else {
                document.body.classList.remove('reduce-animations');
            }
        });

        this.setupToggle('compact-mode', (checked) => {
            this.settings.display.compactMode = checked;
            this.saveSettings();

            if (checked) {
                document.body.classList.add('compact-mode');
            } else {
                document.body.classList.remove('compact-mode');
            }
        });

        // Learning preferences
        this.setupToggle('show-hints', (checked) => {
            this.settings.learning.showHints = checked;
            this.saveSettings();
        });

        this.setupToggle('auto-next', (checked) => {
            this.settings.learning.autoNext = checked;
            this.saveSettings();
        });

        // Notification settings
        this.setupToggle('achievement-notifications', (checked) => {
            this.settings.notifications.achievements = checked;
            this.saveSettings();
        });

        this.setupToggle('sound-effects', (checked) => {
            this.settings.notifications.soundEffects = checked;
            this.saveSettings();
        });

        // Data management
        this.setupDataManagement();
    }

    // Setup theme options
    setupThemeOptions() {
        const themeButtons = document.querySelectorAll('.theme-option');

        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const theme = button.dataset.theme;

                // Update theme via ThemeSystem
                if (window.themeSystem) {
                    window.themeSystem.setTheme(theme);
                }

                // Update settings
                this.settings.theme = theme;
                this.saveSettings();

                // Update UI
                this.updateThemeButtons();
            });
        });
    }

    // Setup language selector
    setupLanguageSelector() {
        const languageSelect = document.getElementById('language-select');

        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                const lang = e.target.value;

                // Update language via I18nSystem
                if (window.i18nSystem) {
                    window.i18nSystem.setLanguage(lang);
                }

                // Update settings
                this.settings.language = lang;
                this.saveSettings();
            });
        }
    }

    // Setup toggle switch
    setupToggle(id, callback) {
        const toggle = document.getElementById(id);

        if (toggle) {
            toggle.addEventListener('change', (e) => {
                callback(e.target.checked);
            });
        }
    }

    // Setup data management buttons
    setupDataManagement() {
        // Export progress
        const exportBtn = document.getElementById('export-progress');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportData());
        }

        // Reset progress
        const resetBtn = document.getElementById('reset-progress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetProgress());
        }
    }

    // Update UI to reflect current settings
    updateUI() {
        // Update theme buttons
        this.updateThemeButtons();

        // Update language selector
        const languageSelect = document.getElementById('language-select');
        if (languageSelect && this.settings.language) {
            languageSelect.value = this.settings.language;
        }

        // Update toggles
        this.updateToggle('reduce-animations', this.settings.display.reduceAnimations);
        this.updateToggle('compact-mode', this.settings.display.compactMode);
        this.updateToggle('show-hints', this.settings.learning.showHints);
        this.updateToggle('auto-next', this.settings.learning.autoNext);
        this.updateToggle('achievement-notifications', this.settings.notifications.achievements);
        this.updateToggle('sound-effects', this.settings.notifications.soundEffects);
    }

    // Update theme buttons visual state
    updateThemeButtons() {
        const themeButtons = document.querySelectorAll('.theme-option');
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

        themeButtons.forEach(button => {
            if (button.dataset.theme === currentTheme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Update toggle state
    updateToggle(id, checked) {
        const toggle = document.getElementById(id);
        if (toggle) {
            toggle.checked = checked;
        }
    }

    // Export all data
    exportData() {
        const data = {
            settings: this.settings,
            theme: localStorage.getItem('trademaster-theme'),
            language: localStorage.getItem('trademaster-lang'),
            learningProgress: this.getLearningProgress(),
            achievements: this.getAchievements(),
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });

        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `trademaster-data-${new Date().toISOString().split('T')[0]}.json`;
        link.click();

        URL.revokeObjectURL(url);

        this.showNotification('Data exported successfully!', 'success');
    }

    // Get learning progress from localStorage
    getLearningProgress() {
        const progress = {};

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('lesson-') || key.startsWith('quiz-') || key.startsWith('level-')) {
                progress[key] = localStorage.getItem(key);
            }
        }

        return progress;
    }

    // Get achievements from localStorage
    getAchievements() {
        const achievements = localStorage.getItem('achievements');
        return achievements ? JSON.parse(achievements) : [];
    }

    // Reset all progress
    resetProgress() {
        // Show confirmation dialog
        const confirmed = confirm(
            'Are you sure you want to reset all your progress? This action cannot be undone.\n\n' +
            'This will clear:\n' +
            '• All lesson completions\n' +
            '• Quiz results\n' +
            '• Achievements\n' +
            '• Learning statistics\n\n' +
            'Your theme and language preferences will be preserved.'
        );

        if (!confirmed) return;

        // Remove all learning-related data
        const keysToRemove = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (
                key.startsWith('lesson-') ||
                key.startsWith('quiz-') ||
                key.startsWith('level-') ||
                key === 'achievements' ||
                key === 'stats'
            ) {
                keysToRemove.push(key);
            }
        }

        keysToRemove.forEach(key => localStorage.removeItem(key));

        this.showNotification('All progress has been reset!', 'success');

        // Reload page after a short delay
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `settings-notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 10);

        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Get setting value (for other components to use)
    getSetting(path) {
        return path.split('.').reduce((obj, key) => obj?.[key], this.settings);
    }

    // Update setting value (for other components to use)
    updateSetting(path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        const target = keys.reduce((obj, key) => obj[key], this.settings);

        if (target) {
            target[lastKey] = value;
            this.saveSettings();
        }
    }
}

// Initialize settings system
document.addEventListener('DOMContentLoaded', () => {
    window.settingsSystem = new SettingsSystem();
});
