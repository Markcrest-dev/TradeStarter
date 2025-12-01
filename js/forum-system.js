// ========================================
// TRADEMASTER - COMMUNITY FORUM SYSTEM
// Discussion Board with Posts & Replies
// ========================================

class ForumSystem {
    constructor() {
        this.posts = this.loadPosts();
        this.currentUser = this.getCurrentUser();
        this.currentCategory = 'all';
        this.init();
    }

    // Helper for translations
    t(key) {
        if (window.i18nSystem && window.i18nSystem.translations) {
            return window.i18nSystem.getNestedTranslation(window.i18nSystem.translations, key) || key;
        }
        return key;
    }

    // Initialize forum
    init() {
        this.renderPosts();
        this.setupEventListeners();
        this.updateStats();
    }

    // Load posts from localStorage
    loadPosts() {
        const saved = localStorage.getItem('trademaster_forum_posts');
        if (saved) {
            return JSON.parse(saved);
        }
        return this.getDefaultPosts();
    }

    // Save posts to localStorage
    savePosts() {
        localStorage.setItem('trademaster_forum_posts', JSON.stringify(this.posts));
    }

    // Get current user
    getCurrentUser() {
        let user = localStorage.getItem('trademaster_forum_user');
        if (!user) {
            user = this.generateUsername();
            localStorage.setItem('trademaster_forum_user', user);
        }
        return user;
    }

    // Generate random username
    generateUsername() {
        const adjectives = ['Smart', 'Bold', 'Quick', 'Wise', 'Pro', 'Elite', 'Master', 'Expert'];
        const nouns = ['Trader', 'Investor', 'Analyst', 'Guru', 'Strategist', 'Pioneer'];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const num = Math.floor(Math.random() * 1000);
        return `${adj}${noun}${num}`;
    }

    // Setup event listeners
    setupEventListeners() {
        // New post button
        const newPostBtn = document.getElementById('new-post-btn');
        if (newPostBtn) {
            newPostBtn.addEventListener('click', () => this.showNewPostModal());
        }

        // Category tabs
        const categoryTabs = document.querySelectorAll('.category-tab');
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.dataset.category;
                this.filterByCategory(category);

                // Update active state
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });

        // Listen for language changes
        document.addEventListener('languageChanged', () => {
            this.renderPosts();
        });
    }

    // Show new post modal
    showNewPostModal() {
        const modal = document.createElement('div');
        modal.className = 'forum-modal';
        modal.innerHTML = `
            <div class="forum-modal-content">
                <div class="forum-modal-header">
                    <h3>${this.t('forum.modal.createTitle')}</h3>
                    <button class="forum-modal-close">&times;</button>
                </div>
                <div class="forum-modal-body">
                    <div class="form-group">
                        <label>${this.t('forum.modal.titleLabel')}</label>
                        <input type="text" id="post-title" class="form-input" 
                               placeholder="${this.t('forum.modal.titlePlaceholder')}">
                    </div>
                    <div class="form-group">
                        <label>${this.t('forum.modal.categoryLabel')}</label>
                        <select id="post-category" class="form-input">
                            <option value="crypto">${this.t('forum.categories.crypto')}</option>
                            <option value="forex">${this.t('forum.categories.forex')}</option>
                            <option value="airdrops">${this.t('forum.categories.airdrops')}</option>
                            <option value="general">${this.t('forum.categories.general')}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>${this.t('forum.modal.descriptionLabel')}</label>
                        <textarea id="post-content" class="form-input" rows="6" 
                                  placeholder="${this.t('forum.modal.descriptionPlaceholder')}"></textarea>
                    </div>
                </div>
                <div class="forum-modal-footer">
                    <button class="btn btn-secondary" onclick="this.closest('.forum-modal').remove()">${this.t('forum.modal.cancel')}</button>
                    <button class="btn btn-primary" id="submit-post">${this.t('forum.modal.post')}</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close button
        modal.querySelector('.forum-modal-close').addEventListener('click', () => modal.remove());

        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        // Submit button
        document.getElementById('submit-post').addEventListener('click', () => {
            const title = document.getElementById('post-title').value.trim();
            const category = document.getElementById('post-category').value;
            const content = document.getElementById('post-content').value.trim();

            if (!title || !content) {
                alert('Please fill in all fields');
                return;
            }

            this.createPost(title, category, content);
            modal.remove();
        });

        // Focus first input
        document.getElementById('post-title').focus();
    }

    // Create new post
    createPost(title, category, content) {
        const post = {
            id: Date.now().toString(),
            title,
            category,
            content,
            author: this.currentUser,
            timestamp: new Date().toISOString(),
            likes: 0,
            replies: []
        };

        this.posts.unshift(post);
        this.savePosts();
        this.renderPosts();
        this.updateStats();

        this.showNotification(this.t('forum.post.postedSuccess'));
    }

    // Filter posts by category
    filterByCategory(category) {
        this.currentCategory = category;
        this.renderPosts();
    }

    // Render posts
    renderPosts() {
        const container = document.getElementById('forum-posts');
        const emptyState = document.getElementById('forum-empty');

        if (!container) return;

        let filteredPosts = this.posts;
        if (this.currentCategory !== 'all') {
            filteredPosts = this.posts.filter(p => p.category === this.currentCategory);
        }

        if (filteredPosts.length === 0) {
            container.innerHTML = '';
            if (emptyState) emptyState.style.display = 'flex';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';

        container.innerHTML = filteredPosts.map(post => `
            <div class="forum-post" data-post-id="${post.id}">
                <div class="forum-post-header">
                    <div class="forum-post-category ${post.category}">
                        ${this.getCategoryIcon(post.category)} ${this.capitalize(post.category)}
                    </div>
                    <div class="forum-post-meta">
                        <span class="forum-post-author">
                            <i class="fas fa-user"></i> ${post.author}
                        </span>
                        <span class="forum-post-time">
                            <i class="far fa-clock"></i> ${this.formatTime(post.timestamp)}
                        </span>
                    </div>
                </div>
                <div class="forum-post-content">
                    <h3 class="forum-post-title">${this.escapeHtml(post.title)}</h3>
                    <p class="forum-post-text">${this.escapeHtml(post.content)}</p>
                </div>
                <div class="forum-post-footer">
                    <button class="forum-action-btn like-btn" data-post-id="${post.id}">
                        <i class="far fa-heart"></i> ${post.likes} ${post.likes === 1 ? this.t('forum.post.like') : this.t('forum.post.likes')}
                    </button>
                    <button class="forum-action-btn reply-btn" data-post-id="${post.id}">
                        <i class="far fa-comment"></i> ${post.replies.length} ${post.replies.length === 1 ? this.t('forum.post.reply') : this.t('forum.post.replies')}
                    </button>
                    <button class="forum-action-btn share-btn">
                        <i class="fas fa-share-alt"></i> ${this.t('forum.post.share')}
                    </button>
                </div>
                ${post.replies.length > 0 ? this.renderReplies(post.replies) : ''}
            </div>
        `).join('');

        // Attach event listeners
        this.attachPostListeners();
    }

    // Render replies
    renderReplies(replies) {
        return `
            <div class="forum-replies">
                ${replies.map(reply => `
                    <div class="forum-reply">
                        <div class="forum-reply-author">
                            <i class="fas fa-user-circle"></i> ${reply.author}
                        </div>
                        <div class="forum-reply-content">${this.escapeHtml(reply.content)}</div>
                        <div class="forum-reply-time">${this.formatTime(reply.timestamp)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Attach event listeners to posts
    attachPostListeners() {
        // Like buttons
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const postId = btn.dataset.postId;
                this.likePost(postId);
            });
        });

        // Reply buttons
        document.querySelectorAll('.reply-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const postId = btn.dataset.postId;
                this.showReplyModal(postId);
            });
        });

        // Share buttons
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.showNotification(this.t('forum.post.shareSuccess'));
            });
        });
    }

    // Like a post
    likePost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            post.likes++;
            this.savePosts();
            this.renderPosts();
        }
    }

    // Show reply modal
    showReplyModal(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        const modal = document.createElement('div');
        modal.className = 'forum-modal';
        modal.innerHTML = `
            <div class="forum-modal-content">
                <div class="forum-modal-header">
                    <h3>${this.t('forum.modal.replyTitle')}: ${this.escapeHtml(post.title)}</h3>
                    <button class="forum-modal-close">&times;</button>
                </div>
                <div class="forum-modal-body">
                    <div class="form-group">
                        <label>${this.t('forum.modal.replyLabel')}</label>
                        <textarea id="reply-content" class="form-input" rows="4" 
                                  placeholder="${this.t('forum.modal.replyPlaceholder')}"></textarea>
                    </div>
                </div>
                <div class="forum-modal-footer">
                    <button class="btn btn-secondary" onclick="this.closest('.forum-modal').remove()">${this.t('forum.modal.cancel')}</button>
                    <button class="btn btn-primary" id="submit-reply">${this.t('forum.modal.reply')}</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.forum-modal-close').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        document.getElementById('submit-reply').addEventListener('click', () => {
            const content = document.getElementById('reply-content').value.trim();
            if (!content) {
                alert('Please enter a reply');
                return;
            }

            this.addReply(postId, content);
            modal.remove();
        });

        document.getElementById('reply-content').focus();
    }

    // Add reply to post
    addReply(postId, content) {
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            post.replies.push({
                id: Date.now().toString(),
                author: this.currentUser,
                content,
                timestamp: new Date().toISOString()
            });

            this.savePosts();
            this.renderPosts();
            this.showNotification(this.t('forum.post.replySuccess'));
        }
    }

    // Update statistics
    updateStats() {
        const totalPostsEl = document.getElementById('total-posts');
        const totalUsersEl = document.getElementById('total-users');
        const activeTodayEl = document.getElementById('active-today');

        if (totalPostsEl) totalPostsEl.textContent = this.posts.length;

        // Count unique users
        const users = new Set();
        this.posts.forEach(post => {
            users.add(post.author);
            post.replies.forEach(reply => users.add(reply.author));
        });
        if (totalUsersEl) totalUsersEl.textContent = users.size;

        // Count posts from today
        const today = new Date().toDateString();
        const activeToday = this.posts.filter(p =>
            new Date(p.timestamp).toDateString() === today
        ).length;
        if (activeTodayEl) activeTodayEl.textContent = activeToday;
    }

    // Utility functions
    getCategoryIcon(category) {
        const icons = {
            crypto: '<i class="fab fa-bitcoin"></i>',
            forex: '<i class="fas fa-chart-line"></i>',
            airdrops: '<i class="fas fa-gift"></i>',
            general: '<i class="fas fa-comments"></i>'
        };
        return icons[category] || icons.general;
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;

        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return this.t('forum.time.justNow');
        if (minutes < 60) return `${minutes}${this.t('forum.time.m')} ${this.t('forum.time.ago')}`;
        if (hours < 24) return `${hours}${this.t('forum.time.h')} ${this.t('forum.time.ago')}`;
        if (days < 7) return `${days}${this.t('forum.time.d')} ${this.t('forum.time.ago')}`;

        return date.toLocaleDateString();
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'forum-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2500);
    }

    // Default sample posts
    getDefaultPosts() {
        return [
            {
                id: '1',
                title: 'Welcome to the TradeStarter Community!',
                category: 'general',
                content: 'Hello everyone! Welcome to our community forum. Feel free to ask questions, share your trading experiences, and connect with fellow traders. Let\'s learn and grow together!',
                author: 'TradeStarter Team',
                timestamp: new Date(Date.now() - 86400000).toISOString(),
                likes: 12,
                replies: [
                    {
                        id: '1-1',
                        author: 'ProTrader42',
                        content: 'Thanks for creating this community! Excited to be here.',
                        timestamp: new Date(Date.now() - 43200000).toISOString()
                    }
                ]
            },
            {
                id: '2',
                title: 'Best Strategy for Bitcoin Trading in 2025?',
                category: 'crypto',
                content: 'What strategies are you all using for Bitcoin trading this year? I\'m particularly interested in swing trading approaches.',
                author: 'CryptoEnthusiast',
                timestamp: new Date(Date.now() - 3600000).toISOString(),
                likes: 5,
                replies: []
            }
        ];
    }
}

// Initialize forum system
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('forum-posts')) {
        window.forumSystem = new ForumSystem();
    }
});
