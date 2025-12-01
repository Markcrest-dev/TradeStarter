// ========================================
// TRADEMASTER - ACHIEVEMENT SYSTEM
// Gamification with Badges and Milestones
// ========================================

class AchievementSystem {
    constructor() {
        this.achievements = this.defineAchievements();
        this.userAchievements = this.loadUserAchievements();
        this.init();
    }

    // Define all available achievements
    defineAchievements() {
        return {
            // Learning Milestones
            'first_lesson': {
                id: 'first_lesson',
                name: 'First Steps',
                description: 'Complete your first lesson',
                icon: 'fa-graduation-cap',
                tier: 'bronze',
                condition: (userData) => this.getLessonsCompleted(userData) >= 1
            },
            'lessons_10': {
                id: 'lessons_10',
                name: 'Quick Learner',
                description: 'Complete 10 lessons',
                icon: 'fa-book-reader',
                tier: 'bronze',
                condition: (userData) => this.getLessonsCompleted(userData) >= 10
            },
            'lessons_25': {
                id: 'lessons_25',
                name: 'Dedicated Student',
                description: 'Complete 25 lessons',
                icon: 'fa-user-graduate',
                tier: 'silver',
                condition: (userData) => this.getLessonsCompleted(userData) >= 25
            },
            'lessons_50': {
                id: 'lessons_50',
                name: 'Knowledge Seeker',
                description: 'Complete 50 lessons',
                icon: 'fa-certificate',
                tier: 'gold',
                condition: (userData) => this.getLessonsCompleted(userData) >= 50
            },
            'lessons_100': {
                id: 'lessons_100',
                name: 'Master Scholar',
                description: 'Complete 100 lessons',
                icon: 'fa-trophy',
                tier: 'platinum',
                condition: (userData) => this.getLessonsCompleted(userData) >= 100
            },
            'all_lessons': {
                id: 'all_lessons',
                name: 'Completionist',
                description: 'Complete all 135 lessons',
                icon: 'fa-crown',
                tier: 'platinum',
                condition: (userData) => this.getLessonsCompleted(userData) >= 135
            },

            // Category Mastery
            'crypto_master': {
                id: 'crypto_master',
                name: 'Crypto Master',
                description: 'Complete all crypto lessons',
                icon: 'fa-bitcoin',
                tier: 'gold',
                condition: (userData) => this.getCategoryProgress(userData, 'crypto') === 100
            },
            'forex_master': {
                id: 'forex_master',
                name: 'Forex Master',
                description: 'Complete all forex lessons',
                icon: 'fa-chart-line',
                tier: 'gold',
                condition: (userData) => this.getCategoryProgress(userData, 'forex') === 100
            },
            'airdrop_master': {
                id: 'airdrop_master',
                name: 'Airdrop Master',
                description: 'Complete all airdrop lessons',
                icon: 'fa-gift',
                tier: 'gold',
                condition: (userData) => this.getCategoryProgress(userData, 'airdrop') === 100
            },
            'triple_master': {
                id: 'triple_master',
                name: 'Trading Legend',
                description: 'Master all three categories',
                icon: 'fa-star',
                tier: 'platinum',
                condition: (userData) =>
                    this.getCategoryProgress(userData, 'crypto') === 100 &&
                    this.getCategoryProgress(userData, 'forex') === 100 &&
                    this.getCategoryProgress(userData, 'airdrop') === 100
            },

            // XP Milestones
            'xp_1000': {
                id: 'xp_1000',
                name: 'XP Novice',
                description: 'Earn 1,000 XP',
                icon: 'fa-bolt',
                tier: 'bronze',
                condition: (userData) => userData.xp >= 1000
            },
            'xp_5000': {
                id: 'xp_5000',
                name: 'XP Enthusiast',
                description: 'Earn 5,000 XP',
                icon: 'fa-fire',
                tier: 'silver',
                condition: (userData) => userData.xp >= 5000
            },
            'xp_10000': {
                id: 'xp_10000',
                name: 'XP Expert',
                description: 'Earn 10,000 XP',
                icon: 'fa-rocket',
                tier: 'gold',
                condition: (userData) => userData.xp >= 10000
            },
            'xp_25000': {
                id: 'xp_25000',
                name: 'XP Champion',
                description: 'Earn 25,000 XP',
                icon: 'fa-gem',
                tier: 'platinum',
                condition: (userData) => userData.xp >= 25000
            },

            // Quiz Achievements
            'first_quiz': {
                id: 'first_quiz',
                name: 'Quiz Taker',
                description: 'Complete your first quiz',
                icon: 'fa-clipboard-check',
                tier: 'bronze',
                condition: (userData) => this.getQuizzesCompleted(userData) >= 1
            },
            'quiz_master': {
                id: 'quiz_master',
                name: 'Quiz Master',
                description: 'Complete all quizzes',
                icon: 'fa-check-double',
                tier: 'gold',
                condition: (userData) => this.getQuizzesCompleted(userData) >= 12
            },

            // Level Achievements
            'level_10': {
                id: 'level_10',
                name: 'Level 10',
                description: 'Reach level 10',
                icon: 'fa-level-up-alt',
                tier: 'silver',
                condition: (userData) => userData.level >= 10
            },
            'level_25': {
                id: 'level_25',
                name: 'Level 25',
                description: 'Reach level 25',
                icon: 'fa-medal',
                tier: 'gold',
                condition: (userData) => userData.level >= 25
            },
            'level_50': {
                id: 'level_50',
                name: 'Level 50',
                description: 'Reach level 50',
                icon: 'fa-crown',
                tier: 'platinum',
                condition: (userData) => userData.level >= 50
            }
        };
    }

    // Helper functions
    getLessonsCompleted(userData) {
        return (userData.completedLessons && userData.completedLessons.length) || 0;
    }

    getQuizzesCompleted(userData) {
        return Object.keys(userData.quizScores || {}).length;
    }

    getCategoryProgress(userData, category) {
        const totalLessons = {
            'crypto': 45,
            'forex': 45,
            'airdrop': 40
        };

        const completed = (userData.completedLessons || []).filter(id =>
            id.startsWith(category)
        ).length;

        return (completed / totalLessons[category]) * 100;
    }

    // Load user achievements from localStorage
    loadUserAchievements() {
        const saved = localStorage.getItem('trademaster-achievements');
        return saved ? JSON.parse(saved) : {
            unlocked: [],
            lastChecked: Date.now()
        };
    }

    // Save user achievements
    saveUserAchievements() {
        localStorage.setItem('trademaster-achievements', JSON.stringify(this.userAchievements));
    }

    // Initialize achievement system
    init() {
        // Check achievements periodically
        this.checkAchievements();

        // Listen for lesson completions and other events
        document.addEventListener('lessonCompleted', () => this.checkAchievements());
        document.addEventListener('quizCompleted', () => this.checkAchievements());
        document.addEventListener('xpEarned', () => this.checkAchievements());
    }

    // Check all achievements
    checkAchievements() {
        if (!window.learningSystem) return;

        const userData = window.learningSystem.userData;
        const newlyUnlocked = [];

        Object.values(this.achievements).forEach(achievement => {
            // Skip already unlocked achievements
            if (this.userAchievements.unlocked.includes(achievement.id)) {
                return;
            }

            // Check if condition is met
            if (achievement.condition(userData)) {
                this.unlockAchievement(achievement.id);
                newlyUnlocked.push(achievement);
            }
        });

        // Show notifications for newly unlocked achievements
        newlyUnlocked.forEach((achievement, index) => {
            setTimeout(() => {
                this.showAchievementNotification(achievement);
            }, index * 500); // Stagger notifications
        });
    }

    // Unlock an achievement
    unlockAchievement(achievementId) {
        if (!this.userAchievements.unlocked.includes(achievementId)) {
            this.userAchievements.unlocked.push(achievementId);
            this.userAchievements.lastChecked = Date.now();
            this.saveUserAchievements();
        }
    }

    // Show achievement notification
    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = `achievement-notification achievement-${achievement.tier}`;
        notification.innerHTML = `
            <div class="achievement-badge">
                <i class="fas ${achievement.icon}"></i>
            </div>
            <div class="achievement-content">
                <div class="achievement-tier">${achievement.tier.toUpperCase()}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
            </div>
        `;

        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 10);

        // Play sound (optional - add if you have sound files)
        // this.playSound('achievement');

        // Remove after animation
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }

    // Get all unlocked achievements
    getUnlockedAchievements() {
        return this.userAchievements.unlocked.map(id => this.achievements[id]);
    }

    // Get achievement progress
    getProgress() {
        const total = Object.keys(this.achievements).length;
        const unlocked = this.userAchievements.unlocked.length;
        return {
            total,
            unlocked,
            percentage: Math.round((unlocked / total) * 100)
        };
    }

    // Render achievements display (for achievements page)
    renderAchievementsDisplay(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const progress = this.getProgress();

        container.innerHTML = `
            <div class="achievements-header">
                <h2>Achievements</h2>
                <div class="achievement-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress.percentage}%"></div>
                    </div>
                    <div class="progress-text">${progress.unlocked} / ${progress.total} Unlocked</div>
                </div>
            </div>
            
            <div class="achievements-grid">
                ${Object.values(this.achievements).map(achievement => this.renderAchievementCard(achievement)).join('')}
            </div>
        `;
    }

    // Render individual achievement card
    renderAchievementCard(achievement) {
        const isUnlocked = this.userAchievements.unlocked.includes(achievement.id);

        return `
            <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'} tier-${achievement.tier}">
                <div class="achievement-icon">
                    <i class="fas ${achievement.icon}"></i>
                </div>
                <div class="achievement-info">
                    <h4>${achievement.name}</h4>
                    <p>${achievement.description}</p>
                    <span class="achievement-tier-badge">${achievement.tier}</span>
                </div>
                ${isUnlocked ? '<i class="fas fa-check achievement-check"></i>' : '<i class="fas fa-lock achievement-lock"></i>'}
            </div>
        `;
    }
}

// Initialize achievement system
document.addEventListener('DOMContentLoaded', () => {
    window.achievementSystem = new AchievementSystem();
});
