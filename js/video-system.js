// ========================================
// TRADEMASTER - VIDEO SYSTEM
// Embedded Video Tutorials in Lessons
// ========================================

class VideoSystem {
    constructor() {
        this.videoProgress = this.loadVideoProgress();
        this.init();
    }

    // Load video progress from localStorage
    loadVideoProgress() {
        const saved = localStorage.getItem('trademaster-video-progress');
        return saved ? JSON.parse(saved) : {
            watchedVideos: [],
            videoCompletionPercentage: {}
        };
    }

    // Save video progress
    saveVideoProgress() {
        localStorage.setItem('trademaster-video-progress', JSON.stringify(this.videoProgress));
    }

    // Initialize video system
    init() {
        // Will be initialized when lesson modal opens
        console.log('Video system initialized');
    }

    // Create video player
    createVideoPlayer(videoData, container) {
        if (!videoData || !container) return null;

        const playerHTML = `
            <div class="video-player-wrapper">
                <div class="video-player" id="video-player-${videoData.id}">
                    ${this.getVideoEmbed(videoData)}
                </div>
                <div class="video-info">
                    <h4>${videoData.title}</h4>
                    <p>${videoData.description || ''}</p>
                    <div class="video-meta">
                        <span><i class="fas fa-clock"></i> ${videoData.duration || 'N/A'}</span>
                        ${this.videoProgress.watchedVideos.includes(videoData.id) ?
                '<span class="video-completed"><i class="fas fa-check-circle"></i> Completed</span>' :
                '<span class="video-incomplete"><i class="fas fa-circle"></i> Not completed</span>'
            }
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = playerHTML;
        this.setupVideoTracking(videoData.id);

        return container.querySelector('.video-player');
    }

    // Get video embed code based on type
    getVideoEmbed(videoData) {
        if (videoData.type === 'youtube') {
            return `
                <iframe 
                    src="https://www.youtube.com/embed/${videoData.videoId}?enablejsapi=1" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    class="video-iframe"
                ></iframe>
            `;
        } else if (videoData.type === 'vimeo') {
            return `
                <iframe 
                    src="https://player.vimeo.com/video/${videoData.videoId}" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                    class="video-iframe"
                ></iframe>
            `;
        } else if (videoData.type === 'direct') {
            return `
                <video controls class="video-element">
                    <source src="${videoData.url}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        }
        return '<p>Video format not supported</p>';
    }

    // Setup video tracking
    setupVideoTracking(videoId) {
        const videoElement = document.querySelector('.video-element');
        const iframe = document.querySelector('.video-iframe');

        if (videoElement) {
            // Track HTML5 video progress
            videoElement.addEventListener('timeupdate', () => {
                const percentage = (videoElement.currentTime / videoElement.duration) * 100;
                this.updateVideoProgress(videoId, percentage);
            });

            videoElement.addEventListener('ended', () => {
                this.markVideoCompleted(videoId);
            });
        } else if (iframe) {
            // For YouTube/Vimeo, we'll use a simple completion check based on user interaction
            // Note: Full tracking would require YouTube/Vimeo API integration
            const checkButton = document.createElement('button');
            checkButton.className = 'btn btn-primary video-complete-btn';
            checkButton.innerHTML = '<i class="fas fa-check"></i> Mark Video as Watched';
            checkButton.style.marginTop = '1rem';

            const videoInfo = document.querySelector('.video-info');
            if (videoInfo && !this.videoProgress.watchedVideos.includes(videoId)) {
                videoInfo.appendChild(checkButton);

                checkButton.addEventListener('click', () => {
                    this.markVideoCompleted(videoId);
                    checkButton.remove();
                    location.reload(); // Refresh to update UI
                });
            }
        }
    }

    // Update video progress percentage
    updateVideoProgress(videoId, percentage) {
        this.videoProgress.videoCompletionPercentage[videoId] = percentage;

        // Auto-mark as completed if watched 80% or more
        if (percentage >= 80 && !this.videoProgress.watchedVideos.includes(videoId)) {
            this.markVideoCompleted(videoId);
        }

        this.saveVideoProgress();
    }

    // Mark video as completed
    markVideoCompleted(videoId) {
        if (!this.videoProgress.watchedVideos.includes(videoId)) {
            this.videoProgress.watchedVideos.push(videoId);
            this.videoProgress.videoCompletionPercentage[videoId] = 100;
            this.saveVideoProgress();

            // Award bonus XP for video completion
            this.awardVideoXP(videoId);

            // Show notification
            this.showVideoCompletionNotification();

            // Update UI
            const videoMeta = document.querySelector('.video-meta');
            if (videoMeta) {
                const incompleteSpan = videoMeta.querySelector('.video-incomplete');
                if (incompleteSpan) {
                    incompleteSpan.className = 'video-completed';
                    incompleteSpan.innerHTML = '<i class="fas fa-check-circle"></i> Completed';
                }
            }
        }
    }

    // Award XP for video completion
    awardVideoXP(videoId) {
        const VIDEO_XP_BONUS = 50; // Bonus XP for watching video

        if (window.learningSystem) {
            window.learningSystem.userData.xp += VIDEO_XP_BONUS;
            window.learningSystem.saveUserData();
            window.learningSystem.updateStats();

            // Dispatch event for achievements
            document.dispatchEvent(new CustomEvent('xpEarned', {
                detail: { xp: VIDEO_XP_BONUS, totalXP: window.learningSystem.userData.xp }
            }));
        }
    }

    // Show video completion notification
    showVideoCompletionNotification() {
        const notification = document.createElement('div');
        notification.className = 'video-completion-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-video"></i>
                <div>
                    <strong>Video Completed!</strong>
                    <p>+50 XP Bonus</p>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Check if video is completed
    isVideoCompleted(videoId) {
        return this.videoProgress.watchedVideos.includes(videoId);
    }

    // Get total videos watched
    getTotalVideosWatched() {
        return this.videoProgress.watchedVideos.length;
    }

    // Get video completion percentage
    getVideoCompletionPercentage(videoId) {
        return this.videoProgress.videoCompletionPercentage[videoId] || 0;
    }
}

// Initialize video system
document.addEventListener('DOMContentLoaded', () => {
    window.videoSystem = new VideoSystem();
});

// Example video data structure for lessons:
// Add this to LESSON_CONTENT in lesson-content.js:
/*
video: {
    id: 'lesson1-video',
    type: 'youtube', // or 'vimeo', 'direct'
    videoId: 'dQw4w9WgXcQ', // YouTube video ID
    title: 'Introduction to Cryptocurrency',
    description: 'Learn the basics of cryptocurrency in this comprehensive video',
    duration: '10:35'
}
*/
