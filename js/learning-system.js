// ========================================
// TRADEMASTER - LEARNING SYSTEM
// Duolingo-style Progressive Learning
// ========================================

class LearningSystem {
    constructor() {
        this.userData = this.loadUserData();
        this.init();
    }

    // Load user progress from localStorage
    loadUserData() {
        const saved = localStorage.getItem('trademaster_progress');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            level: 1,
            xp: 0,
            completedLessons: [],
            currentStreak: 0,
            lastVisit: new Date().toISOString()
        };
    }

    // Save user progress
    saveUserData() {
        localStorage.setItem('trademaster_progress', JSON.stringify(this.userData));
    }

    // Initialize the learning system
    init() {
        this.updateStats();
        this.setupLessonCards();
        this.checkLevelProgress();
    }

    // Helper to find element with possible suffixes
    getElementByIdWithSuffix(baseId) {
        const suffixes = ['', '-forex', '-crypto', '-airdrops'];
        for (const suffix of suffixes) {
            const el = document.getElementById(baseId + suffix);
            if (el) return el;
        }
        return null;
    }

    // Update user stats display
    updateStats() {
        const levelEl = this.getElementByIdWithSuffix('user-level');
        const xpEl = this.getElementByIdWithSuffix('user-xp');
        const lessonsEl = this.getElementByIdWithSuffix('lessons-completed');

        if (levelEl) levelEl.textContent = this.userData.level;
        if (xpEl) xpEl.textContent = this.userData.xp;
        if (lessonsEl) {
            const total = document.querySelectorAll('.lesson-card:not(.quiz-card)').length;
            lessonsEl.textContent = `${this.userData.completedLessons.length}/${total}`;
        }
    }

    // Setup lesson card interactions
    setupLessonCards() {
        const lessonCards = document.querySelectorAll('.lesson-card');

        lessonCards.forEach(card => {
            const lessonId = card.dataset.lesson;
            const levelNum = parseInt(card.dataset.level);
            const category = card.dataset.category || 'crypto';

            // Mark completed lessons
            if (this.userData.completedLessons.includes(lessonId)) {
                card.classList.add('completed');
                card.classList.remove('locked');
                const statusIcon = card.querySelector('.lesson-status i');
                if (statusIcon) {
                    statusIcon.className = 'fas fa-check-circle';
                }
            }

            // Check if lesson should be unlocked
            if (this.shouldUnlockLesson(lessonId, levelNum, category)) {
                card.classList.remove('locked');
                card.classList.add('unlocked');
            }

            // Add click handler for unlocked or completed lessons
            if (card.classList.contains('unlocked') || card.classList.contains('completed')) {
                // Remove existing event listeners to prevent duplicates
                const newCard = card.cloneNode(true);
                card.parentNode.replaceChild(newCard, card);
                newCard.addEventListener('click', () => this.startLesson(lessonId, newCard));
            }
        });
    }

    // Check if a lesson should be unlocked
    shouldUnlockLesson(lessonId, levelNum, category) {
        // Level 1 lessons are always unlocked
        if (levelNum === 1) return true;

        // Check if previous level is completed
        const prevLevel = levelNum - 1;
        let quizId;

        if (category === 'forex') {
            quizId = `forex-quiz${prevLevel}`;
        } else if (category === 'airdrops') {
            quizId = `airdrop-quiz${prevLevel}`;
        } else {
            // Default to crypto (quiz1, quiz2, etc.)
            quizId = `quiz${prevLevel}`;
        }

        return this.userData.completedLessons.includes(quizId);
    }

    // Start a lesson
    startLesson(lessonId, cardElement) {
        // Check if lesson content exists
        if (typeof LESSON_CONTENT !== 'undefined' && LESSON_CONTENT[lessonId]) {
            // Open lesson modal with content
            const modal = window.lessonModal || (typeof lessonModal !== 'undefined' ? lessonModal : null);
            if (modal) {
                modal.open(lessonId, LESSON_CONTENT[lessonId]);
                // Store card element for later completion
                modal.currentCard = cardElement;
            } else {
                console.error('Lesson modal not initialized');
            }
        } else {
            // Fallback for lessons without content yet
            const confirmed = confirm('This lesson content is coming soon! Mark as complete for now?');
            if (confirmed) {
                this.completeLesson(lessonId, cardElement);
            }
        }
    }

    // Complete lesson from modal (called by lesson modal)
    completeLessonFromModal(lessonId, lessonData) {
        // Try to get card from window.lessonModal if local variable fails, or vice versa
        const modal = window.lessonModal || lessonModal;
        const cardElement = modal ? modal.currentCard : null;

        if (cardElement) {
            this.completeLesson(lessonId, cardElement);
        } else {
            // Fallback: try to find card by data attribute
            const card = document.querySelector(`.lesson-card[data-lesson="${lessonId}"]`);
            if (card) {
                this.completeLesson(lessonId, card);
            }
        }
    }

    // Mark lesson as complete
    completeLesson(lessonId, cardElement) {
        if (!this.userData.completedLessons.includes(lessonId)) {

            // Get XP value from card with robust parsing
            let xp = 50; // Default fallback
            try {
                const xpText = cardElement.querySelector('.lesson-meta span:last-child').textContent;
                const match = xpText.match(/\d+/);
                if (match) {
                    xp = parseInt(match[0]);
                } else {
                    console.warn('Could not parse XP from card, using default');
                }
            } catch (e) {
                console.error('Error parsing XP:', e);
            }

            // Update user data
            this.userData.completedLessons.push(lessonId);
            this.userData.xp += xp;

            // Check for level up
            this.checkLevelUp();

            // Update UI
            cardElement.classList.add('completed');
            cardElement.classList.remove('unlocked');
            const statusIcon = cardElement.querySelector('.lesson-status i');
            if (statusIcon) {
                statusIcon.className = 'fas fa-check-circle';
            }

            // Save progress
            this.saveUserData();
            this.updateStats();
            this.checkLevelProgress();

            // Show celebration
            this.showCelebration(xp);

            // Dispatch events for achievement system
            document.dispatchEvent(new CustomEvent('lessonCompleted', {
                detail: { lessonId, xp }
            }));
            document.dispatchEvent(new CustomEvent('xpEarned', {
                detail: { xp, totalXP: this.userData.xp }
            }));

            // Unlock next lessons
            setTimeout(() => {
                this.setupLessonCards();
            }, 500);
        }
    }

    // Check for level up
    checkLevelUp() {
        const xpThresholds = [0, 500, 1500, 3000, 5000];
        let newLevel = 1;

        for (let i = 0; i < xpThresholds.length; i++) {
            if (this.userData.xp >= xpThresholds[i]) {
                newLevel = i + 1;
            }
        }

        if (newLevel > this.userData.level) {
            this.userData.level = newLevel;
            this.showLevelUpNotification(newLevel);
        }
    }

    // Update level progress bars
    checkLevelProgress() {
        for (let level = 1; level <= 4; level++) {
            // Find the progress bar element for this level
            const progressBar = this.getElementByIdWithSuffix(`level${level}-progress`);
            if (!progressBar) continue;

            // Find the text element
            // Structure: .level-progress -> .progress-bar -> .progress-fill (progressBar)
            //           .level-progress -> .progress-text
            const container = progressBar.closest('.level-progress');
            const progressText = container ? container.querySelector('.progress-text') : null;

            // Calculate percentage
            // We need to find lessons for this level AND the current category
            // The category can be derived from the progress bar ID suffix
            let category = 'crypto'; // Default
            if (progressBar.id.includes('forex')) category = 'forex';
            if (progressBar.id.includes('airdrops')) category = 'airdrops';

            // Select lessons for this level and category
            // Note: In HTML, lessons have data-level and data-category attributes
            // We need to be careful to select only lessons visible on the current page
            // or lessons that belong to the current category logic

            // Get all lessons on the current page for this level
            const levelLessons = document.querySelectorAll(`[data-level="${level}"]`);

            // Filter by category if needed (though usually pages only have one category of lessons)
            // But to be safe, let's filter if we can determine category from the page or lessons
            const relevantLessons = Array.from(levelLessons).filter(card => {
                const cardCategory = card.dataset.category || 'crypto';
                // If the progress bar is specific (e.g. forex), only count forex lessons
                if (category !== 'crypto' && cardCategory !== category) return false;
                // If progress bar is generic (crypto), only count crypto lessons
                if (category === 'crypto' && cardCategory !== 'crypto') return false;
                return true;
            });

            const total = relevantLessons.length;
            const completed = relevantLessons.filter(card =>
                this.userData.completedLessons.includes(card.dataset.lesson)
            ).length;

            const percentage = total > 0 ? (completed / total) * 100 : 0;

            // Update width with animation
            // Use setTimeout to ensure transition triggers if this is called immediately after DOM load
            requestAnimationFrame(() => {
                progressBar.style.width = `${percentage}%`;
            });

            // Update text
            if (progressText) {
                if (percentage === 0 && level > 1) {
                    progressText.textContent = `Locked - Complete Level ${level - 1}`;
                } else {
                    progressText.textContent = `${Math.round(percentage)}% Complete`;
                }
            }
        }
    }

    // Show celebration animation
    showCelebration(xp) {
        const celebration = document.createElement('div');
        celebration.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #4B2EFA 0%, #4ABDF1 100%);
            color: white;
            padding: 2rem 3rem;
            border-radius: 16px;
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            text-align: center;
            animation: celebrationPop 0.5s ease;
        `;

        celebration.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
            <h3 style="color: white; margin-bottom: 0.5rem;">Lesson Complete!</h3>
            <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 1.25rem;">+${xp} XP</p>
        `;

        document.body.appendChild(celebration);

        setTimeout(() => {
            celebration.style.animation = 'celebrationFade 0.5s ease';
            setTimeout(() => celebration.remove(), 500);
        }, 2000);
    }

    // Show level up notification
    showLevelUpNotification(newLevel) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            color: white;
            padding: 3rem 4rem;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
            z-index: 10000;
            text-align: center;
            animation: levelUpPop 0.6s ease;
        `;

        notification.innerHTML = `
            <div style="font-size: 4rem; margin-bottom: 1rem;">🏆</div>
            <h2 style="color: white; margin-bottom: 0.5rem; font-size: 2rem;">Level Up!</h2>
            <p style="color: rgba(255,255,255,0.95); margin: 0; font-size: 1.5rem;">You're now Level ${newLevel}</p>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'celebrationFade 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrationPop {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    @keyframes celebrationFade {
        0% { opacity: 1; }
        100% { opacity: 0; transform: translate(-50%, -60%) scale(0.9); }
    }
    @keyframes levelUpPop {
        0% { transform: translate(-50%, -50%) scale(0.3) rotate(-10deg); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }
        100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
    }
`;
document.head.appendChild(style);

// Initialize learning system when DOM is ready
let learningSystem;
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.learning-level')) {
        learningSystem = new LearningSystem();
        window.learningSystem = learningSystem; // Make globally accessible
    }
});

// ========================================
// LIVE PRICE FEED (CoinGecko API)
// ========================================

class LivePriceFeed {
    constructor() {
        this.apiBase = 'https://api.coingecko.com/api/v3';
        this.updateInterval = 30000; // 30 seconds
        this.init();
    }

    async init() {
        const priceWidget = document.getElementById('live-prices');
        if (priceWidget) {
            await this.updatePrices();
            setInterval(() => this.updatePrices(), this.updateInterval);
        }
    }

    async updatePrices() {
        try {
            const response = await fetch(
                `${this.apiBase}/simple/price?ids=bitcoin,ethereum,binancecoin,cardano,solana&vs_currencies=usd&include_24hr_change=true`
            );
            const data = await response.json();

            this.displayPrices(data);
        } catch (error) {
            console.error('Error fetching prices:', error);
        }
    }

    displayPrices(data) {
        const priceGrid = document.getElementById('price-grid');
        if (!priceGrid) return;

        const cryptos = [
            { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
            { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
            { id: 'binancecoin', symbol: 'BNB', name: 'BNB' },
            { id: 'cardano', symbol: 'ADA', name: 'Cardano' },
            { id: 'solana', symbol: 'SOL', name: 'Solana' }
        ];

        priceGrid.innerHTML = cryptos.map(crypto => {
            const priceData = data[crypto.id];
            if (!priceData) return '';

            const price = priceData.usd;
            const change = priceData.usd_24h_change;
            const changeClass = change >= 0 ? 'positive' : 'negative';
            const changeIcon = change >= 0 ? '▲' : '▼';

            return `
                <div class="price-card">
                    <div class="price-symbol">${crypto.symbol}</div>
                    <div class="price-value">$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    <div class="price-change ${changeClass}">
                        ${changeIcon} ${Math.abs(change).toFixed(2)}%
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Initialize live price feed
document.addEventListener('DOMContentLoaded', () => {
    new LivePriceFeed();
});

// ========================================
// RISK MANAGEMENT CALCULATOR
// ========================================

function initRiskCalculator() {
    const calculator = document.getElementById('risk-calculator');
    if (!calculator) return;

    const accountSize = document.getElementById('account-size');
    const riskPercent = document.getElementById('risk-percent');
    const entryPrice = document.getElementById('entry-price');
    const stopLoss = document.getElementById('stop-loss');
    const calculateBtn = document.getElementById('calculate-risk');
    const resultDiv = document.getElementById('risk-result');

    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const account = parseFloat(accountSize.value);
            const risk = parseFloat(riskPercent.value);
            const entry = parseFloat(entryPrice.value);
            const stop = parseFloat(stopLoss.value);

            if (isNaN(account) || isNaN(risk) || isNaN(entry) || isNaN(stop)) {
                resultDiv.innerHTML = '<p style="color: #f87171;">Please fill in all fields</p>';
                return;
            }

            const riskAmount = (account * risk) / 100;
            const stopDistance = Math.abs(entry - stop);
            const positionSize = riskAmount / stopDistance;
            const potentialLoss = riskAmount;

            resultDiv.innerHTML = `
                <div class="calc-result">
                    <h4>Risk Analysis</h4>
                    <div class="calc-result-value">Position Size: ${positionSize.toFixed(4)} units</div>
                    <div class="calc-result-details">
                        <p>Risk Amount: $${riskAmount.toFixed(2)}</p>
                        <p>Stop Distance: $${stopDistance.toFixed(2)}</p>
                        <p>Max Loss: $${potentialLoss.toFixed(2)} (${risk}%)</p>
                    </div>
                </div>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', initRiskCalculator);

// ========================================
// AIRDROP TRACKER
// ========================================

class AirdropTracker {
    constructor() {
        this.airdrops = this.loadAirdrops();
        this.init();
    }

    loadAirdrops() {
        const saved = localStorage.getItem('tracked_airdrops');
        return saved ? JSON.parse(saved) : [];
    }

    saveAirdrops() {
        localStorage.setItem('tracked_airdrops', JSON.stringify(this.airdrops));
    }

    init() {
        const tracker = document.getElementById('airdrop-tracker');
        if (!tracker) return;

        this.renderAirdrops();
        this.setupAddButton();
    }

    renderAirdrops() {
        const list = document.getElementById('airdrop-list');
        if (!list) return;

        if (this.airdrops.length === 0) {
            list.innerHTML = '<p style="text-align: center; color: var(--color-gray);">No airdrops tracked yet. Click "Add Airdrop" to start!</p>';
            return;
        }

        list.innerHTML = this.airdrops.map((airdrop, index) => `
            <div class="airdrop-item">
                <div class="airdrop-info">
                    <div class="airdrop-name">${airdrop.name}</div>
                    <div class="airdrop-status">${airdrop.description}</div>
                </div>
                <div class="airdrop-actions">
                    <span class="status-badge ${airdrop.status}">${airdrop.status}</span>
                    <button onclick="airdropTracker.removeAirdrop(${index})" style="background: #f87171; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer;">Remove</button>
                </div>
            </div>
        `).join('');
    }

    setupAddButton() {
        const addBtn = document.getElementById('add-airdrop');
        if (addBtn) {
            addBtn.addEventListener('click', () => this.addAirdrop());
        }
    }

    addAirdrop() {
        const name = prompt('Airdrop name:');
        if (!name) return;

        const description = prompt('Description:');
        const status = prompt('Status (active/completed/pending):') || 'active';

        this.airdrops.push({ name, description, status });
        this.saveAirdrops();
        this.renderAirdrops();
    }

    removeAirdrop(index) {
        if (confirm('Remove this airdrop from tracking?')) {
            this.airdrops.splice(index, 1);
            this.saveAirdrops();
            this.renderAirdrops();
        }
    }
}

// Make globally accessible
let airdropTracker;
document.addEventListener('DOMContentLoaded', () => {
    airdropTracker = new AirdropTracker();
});

// ========================================
// FOREX MARKET HOURS
// ========================================

function updateMarketHours() {
    const marketGrid = document.getElementById('market-hours-grid');
    if (!marketGrid) return;

    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcDay = now.getUTCDay();

    const markets = [
        { name: 'New York', open: 13, close: 22, timezone: 'EST' },
        { name: 'London', open: 8, close: 17, timezone: 'GMT' },
        { name: 'Tokyo', open: 0, close: 9, timezone: 'JST' },
        { name: 'Sydney', open: 22, close: 7, timezone: 'AEST' }
    ];

    marketGrid.innerHTML = markets.map(market => {
        const isWeekend = utcDay === 0 || utcDay === 6;
        let isOpen = false;

        if (!isWeekend) {
            if (market.close > market.open) {
                isOpen = utcHours >= market.open && utcHours < market.close;
            } else {
                isOpen = utcHours >= market.open || utcHours < market.close;
            }
        }

        return `
            <div class="market-item">
                <div class="market-name">${market.name}</div>
                <div class="market-status ${isOpen ? 'open' : 'closed'}">
                    <span class="live-dot" style="background: ${isOpen ? '#28a745' : '#dc3545'}"></span>
                    ${isOpen ? 'Open' : 'Closed'}
                </div>
                <div class="market-time">${market.timezone}</div>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    updateMarketHours();
    setInterval(updateMarketHours, 60000); // Update every minute
});
