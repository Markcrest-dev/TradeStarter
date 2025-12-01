// ========================================
// TRADEMASTER - LESSON MODAL SYSTEM
// Interactive lesson display and quiz system
// ========================================

class LessonModal {
    constructor() {
        this.currentLesson = null;
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        this.createModal();
    }

    createModal() {
        // Create modal HTML
        const modalHTML = `
            <div id="lesson-modal" class="lesson-modal">
                <div class="lesson-modal-content">
                    <div class="lesson-modal-header">
                        <h2 id="lesson-modal-title"></h2>
                        <button class="lesson-modal-close">&times;</button>
                    </div>
                    <div class="lesson-modal-body" id="lesson-modal-body">
                        <!-- Lesson content will be inserted here -->
                    </div>
                    <div class="lesson-modal-footer">
                        <button class="btn-secondary" id="lesson-prev-btn">Previous</button>
                        <button class="btn-primary" id="lesson-next-btn">Next</button>
                        <button class="btn-success" id="lesson-complete-btn" style="display: none;">Complete Lesson</button>
                    </div>
                </div>
            </div>
        `;

        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add event listeners
        this.setupEventListeners();

        // Add styles
        this.addStyles();
    }

    setupEventListeners() {
        const modal = document.getElementById('lesson-modal');
        const closeBtn = modal.querySelector('.lesson-modal-close');
        const nextBtn = document.getElementById('lesson-next-btn');
        const prevBtn = document.getElementById('lesson-prev-btn');
        const completeBtn = document.getElementById('lesson-complete-btn');

        // Close modal
        closeBtn.addEventListener('click', () => this.close());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.close();
        });

        // Navigation
        nextBtn.addEventListener('click', () => this.nextSection());
        prevBtn.addEventListener('click', () => this.previousSection());
        completeBtn.addEventListener('click', () => this.completeLesson());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'flex') {
                if (e.key === 'Escape') this.close();
                if (e.key === 'ArrowRight') this.nextSection();
                if (e.key === 'ArrowLeft') this.previousSection();
            }
        });
    }

    open(lessonId, lessonData) {
        this.currentLesson = lessonId;
        this.currentSection = 'content';
        this.currentQuizIndex = 0;
        this.quizScore = 0;

        const modal = document.getElementById('lesson-modal');
        const title = document.getElementById('lesson-modal-title');
        const body = document.getElementById('lesson-modal-body');

        // Determine language
        const lang = window.i18nSystem ? window.i18nSystem.currentLang : 'en';

        // Handle content structure (support both old flat structure and new nested structure)
        let data = lessonData;
        if (lessonData[lang]) {
            data = lessonData[lang];
        } else if (lessonData['en']) {
            data = lessonData['en'];
        }

        // Set title
        title.innerHTML = `
            <i class="fas fa-book-open"></i> ${data.title}
            <span class="lesson-duration"><i class="far fa-clock"></i> ${data.duration}</span>
        `;

        // Set content
        let contentHTML = '';

        // Add video if available
        if (data.video && data.video.type === 'youtube') {
            contentHTML += `
                <div class="lesson-video-container">
                    <div class="video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/${data.video.videoId}" 
                            title="${data.video.title}"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="video-info">
                        <h4><i class="fas fa-play-circle"></i> ${data.video.title}</h4>
                        <p>${data.video.description}</p>
                    </div>
                </div>
            `;
        }

        contentHTML += data.content;
        body.innerHTML = contentHTML;

        // Show modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        // Update navigation buttons
        this.updateNavigation();
    }

    close() {
        const modal = document.getElementById('lesson-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    getLessonData() {
        const lessonData = LESSON_CONTENT[this.currentLesson];
        if (!lessonData) return null;

        const lang = window.i18nSystem ? window.i18nSystem.currentLang : 'en';

        if (lessonData[lang]) {
            return lessonData[lang];
        } else if (lessonData['en']) {
            return lessonData['en'];
        }
        return lessonData;
    }

    nextSection() {
        if (this.currentSection === 'content') {
            // Move to quiz if available
            const lessonData = this.getLessonData();
            if (lessonData && lessonData.quiz && lessonData.quiz.length > 0) {
                this.showQuiz();
            } else {
                // No quiz, complete lesson
                this.completeLesson();
            }
        } else if (this.currentSection === 'quiz') {
            this.nextQuizQuestion();
        }
    }

    previousSection() {
        if (this.currentSection === 'quiz' && this.currentQuizIndex === 0) {
            // Go back to content
            this.currentSection = 'content';
            const lessonData = this.getLessonData();
            const body = document.getElementById('lesson-modal-body');
            body.innerHTML = lessonData.content;
            this.updateNavigation();
        } else if (this.currentSection === 'quiz' && this.currentQuizIndex > 0) {
            this.currentQuizIndex--;
            this.showQuizQuestion(this.currentQuizIndex);
        }
    }

    showQuiz() {
        this.currentSection = 'quiz';
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        this.showQuizQuestion(0);
    }

    showQuizQuestion(index) {
        const lessonData = this.getLessonData();
        const quiz = lessonData.quiz;
        const body = document.getElementById('lesson-modal-body');

        if (index >= quiz.length) {
            this.showQuizResults();
            return;
        }

        const question = quiz[index];

        body.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-progress">
                    <div class="quiz-progress-bar" style="width: ${((index) / quiz.length) * 100}%"></div>
                </div>
                <div class="quiz-header">
                    <h3>Quiz Question ${index + 1} of ${quiz.length}</h3>
                </div>
                <div class="quiz-question">
                    <p>${question.question}</p>
                </div>
                <div class="quiz-options">
                    ${question.options.map((option, i) => `
                        <button class="quiz-option" data-index="${i}">
                            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                            <span class="option-text">${option}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        // Add click handlers to options
        const options = body.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedIndex = parseInt(e.currentTarget.dataset.index);
                this.checkAnswer(selectedIndex, question.correct, options);
            });
        });

        this.updateNavigation();
    }

    checkAnswer(selected, correct, optionElements) {
        // Disable all options
        optionElements.forEach(opt => opt.disabled = true);

        // Show correct/incorrect
        optionElements[selected].classList.add(selected === correct ? 'correct' : 'incorrect');
        if (selected !== correct) {
            optionElements[correct].classList.add('correct');
        }

        // Update score
        if (selected === correct) {
            this.quizScore++;
        }

        // Show next button or complete button
        const nextBtn = document.getElementById('lesson-next-btn');
        const completeBtn = document.getElementById('lesson-complete-btn');

        const lessonData = this.getLessonData();
        if (this.currentQuizIndex < lessonData.quiz.length - 1) {
            nextBtn.style.display = 'block';
            nextBtn.textContent = 'Next Question';
        } else {
            nextBtn.style.display = 'none';
            completeBtn.style.display = 'block';
        }
    }

    nextQuizQuestion() {
        this.currentQuizIndex++;
        this.showQuizQuestion(this.currentQuizIndex);
    }

    showQuizResults() {
        const lessonData = this.getLessonData();
        const totalQuestions = lessonData.quiz.length;
        const percentage = (this.quizScore / totalQuestions) * 100;
        const passed = percentage >= 70;

        const body = document.getElementById('lesson-modal-body');
        body.innerHTML = `
            <div class="quiz-results">
                <div class="quiz-results-icon ${passed ? 'passed' : 'failed'}">
                    ${passed ? '🎉' : '📚'}
                </div>
                <h3>${passed ? 'Congratulations!' : 'Keep Learning!'}</h3>
                <div class="quiz-score">
                    <div class="score-circle">
                        <span class="score-number">${Math.round(percentage)}%</span>
                    </div>
                    <p>You scored ${this.quizScore} out of ${totalQuestions}</p>
                </div>
                ${passed ?
                '<p class="quiz-message">Great job! You\'ve mastered this lesson.</p>' :
                '<p class="quiz-message">Review the lesson content and try again to improve your score.</p>'
            }
                <div class="quiz-actions">
                    <button class="btn-secondary" onclick="lessonModal.showQuiz()">${passed ? 'Retake Quiz' : 'Retry Quiz'}</button>
                    <button class="btn-primary" onclick="lessonModal.completeLesson()">
                        ${passed ? 'Complete Lesson' : 'Review Content'}
                    </button>
                </div>
            </div>
        `;

        this.updateNavigation(true);
    }

    completeLesson() {
        // Trigger completion in learning system
        if (window.learningSystem) {
            const lessonData = this.getLessonData();
            window.learningSystem.completeLessonFromModal(this.currentLesson, lessonData);
        }
        this.close();
    }

    updateNavigation(hideAll = false) {
        const prevBtn = document.getElementById('lesson-prev-btn');
        const nextBtn = document.getElementById('lesson-next-btn');
        const completeBtn = document.getElementById('lesson-complete-btn');

        if (hideAll) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            completeBtn.style.display = 'none';
            return;
        }

        // Show/hide based on current section
        if (this.currentSection === 'content') {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'block';
            nextBtn.textContent = 'Start Quiz';
            completeBtn.style.display = 'none';
        } else if (this.currentSection === 'quiz') {
            prevBtn.style.display = this.currentQuizIndex === 0 ? 'block' : 'none';
            nextBtn.style.display = 'none';
            completeBtn.style.display = 'none';
        }
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .lesson-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
                z-index: 10000;
                align-items: center;
                justify-content: center;
                padding: 20px;
                animation: fadeIn 0.3s ease;
            }

            .lesson-modal-content {
                background: #FFFFFF;
                border-radius: 20px;
                max-width: 900px;
                width: 100%;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                animation: slideUp 0.3s ease;
            }

            .lesson-modal-header {
                padding: 2rem;
                border-bottom: 1px solid #E2E8F0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .lesson-modal-header h2 {
                margin: 0;
                color: #0F172A;
                font-size: 1.5rem;
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .lesson-duration {
                font-size: 0.9rem;
                color: #64748B;
                font-weight: normal;
            }

            .lesson-modal-close {
                background: none;
                border: none;
                color: #0F172A;
                font-size: 2rem;
                cursor: pointer;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            }

            .lesson-modal-close:hover {
                background: rgba(0, 0, 0, 0.05);
                transform: rotate(90deg);
            }

            .lesson-modal-body {
                padding: 2rem;
                overflow-y: auto;
                flex: 1;
                color: #1E293B;
            }

            .lesson-modal-body h3 {
                color: var(--color-primary, #4B2EFA);
                margin-top: 2rem;
                margin-bottom: 1rem;
            }

            .lesson-modal-body h4 {
                color: var(--color-secondary, #4ABDF1);
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
            }

            .lesson-modal-body h5 {
                color: #0F172A;
                margin-top: 1rem;
                margin-bottom: 0.5rem;
            }

            .lesson-modal-body p {
                line-height: 1.8;
                margin-bottom: 1rem;
                color: #1E293B;
            }

            .lesson-modal-body ul, .lesson-modal-body ol {
                margin-bottom: 1rem;
                padding-left: 1.5rem;
            }

            .lesson-modal-body li {
                margin-bottom: 0.5rem;
                line-height: 1.6;
                color: #475569;
            }

            .lesson-modal-body table {
                width: 100%;
                border-collapse: collapse;
                margin: 1.5rem 0;
                background: #F8FAFC;
                border-radius: 10px;
                overflow: hidden;
            }

            .lesson-modal-body th,
            .lesson-modal-body td {
                padding: 1rem;
                text-align: left;
                border-bottom: 1px solid #E2E8F0;
            }

            .lesson-modal-body th {
                background: rgba(75, 46, 250, 0.2);
                color: var(--color-primary, #4B2EFA);
                font-weight: 600;
            }

            .info-box, .warning-box, .key-takeaway, .definition-box, 
            .example-box, .analogy-box, .security-checklist, .emergency-box {
                padding: 1.5rem;
                border-radius: 10px;
                margin: 1.5rem 0;
                border-left: 4px solid;
            }

            .info-box {
                background: rgba(74, 189, 241, 0.1);
                border-color: #4ABDF1;
            }

            .warning-box {
                background: rgba(255, 193, 7, 0.1);
                border-color: #FFC107;
            }

            .key-takeaway {
                background: rgba(76, 175, 80, 0.1);
                border-color: #4CAF50;
            }

            .definition-box {
                background: rgba(156, 39, 176, 0.1);
                border-color: #9C27B0;
            }

            .example-box {
                background: rgba(255, 152, 0, 0.1);
                border-color: #FF9800;
            }

            .pros {
                color: #4CAF50;
            }

            .cons {
                color: #f87171;
            }

            .lesson-modal-footer {
                padding: 1.5rem 2rem;
                border-top: 1px solid #E2E8F0;
                display: flex;
                gap: 1rem;
                justify-content: flex-end;
            }

            .btn-primary, .btn-secondary, .btn-success {
                padding: 0.75rem 2rem;
                border: none;
                border-radius: 10px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .btn-primary {
                background: linear-gradient(135deg, #4B2EFA 0%, #4ABDF1 100%);
                color: white;
            }

            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(75, 46, 250, 0.3);
            }

            .btn-secondary {
                background: #F1F5F9;
                color: #1E293B;
            }

            .btn-secondary:hover {
                background: #E2E8F0;
            }

            .btn-success {
                background: linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%);
                color: white;
            }

            .btn-success:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(76, 175, 80, 0.3);
            }

            /* Quiz Styles */
            .quiz-container {
                max-width: 700px;
                margin: 0 auto;
            }

            .quiz-progress {
                width: 100%;
                height: 8px;
                background: #E2E8F0;
                border-radius: 10px;
                overflow: hidden;
                margin-bottom: 2rem;
            }

            .quiz-progress-bar {
                height: 100%;
                background: linear-gradient(90deg, #4B2EFA 0%, #4ABDF1 100%);
                transition: width 0.3s ease;
            }

            .quiz-header h3 {
                color: var(--color-primary, #4B2EFA);
                margin: 0 0 1.5rem 0;
            }

            .quiz-question {
                background: #F8FAFC;
                padding: 2rem;
                border-radius: 15px;
                margin-bottom: 2rem;
            }

            .quiz-question p {
                font-size: 1.25rem;
                margin: 0;
                font-weight: 500;
                color: #0F172A;
            }

            .quiz-options {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .quiz-option {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1.25rem;
                background: #F8FAFC;
                border: 2px solid #E2E8F0;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: left;
                width: 100%;
            }

            .quiz-option:hover:not(:disabled) {
                background: #FFFFFF;
                border-color: var(--color-primary, #4B2EFA);
                transform: translateX(5px);
            }

            .quiz-option:disabled {
                cursor: not-allowed;
            }

            .option-letter {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: rgba(75, 46, 250, 0.2);
                color: var(--color-primary, #4B2EFA);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                flex-shrink: 0;
            }

            .option-text {
                flex: 1;
                font-size: 1.05rem;
                color: #1E293B;
            }

            .quiz-option.correct {
                background: rgba(76, 175, 80, 0.2);
                border-color: #4CAF50;
            }

            .quiz-option.correct .option-letter {
                background: #4CAF50;
                color: white;
            }

            .quiz-option.incorrect {
                background: rgba(244, 67, 54, 0.2);
                border-color: #f44336;
            }

            .quiz-option.incorrect .option-letter {
                background: #f44336;
                color: white;
            }

            .quiz-results {
                text-align: center;
                padding: 2rem;
            }

            .quiz-results-icon {
                font-size: 5rem;
                margin-bottom: 1rem;
            }

            .quiz-results h3 {
                font-size: 2rem;
                margin-bottom: 2rem;
                color: #0F172A;
            }

            .quiz-score {
                margin: 2rem 0;
            }

            .quiz-score p {
                color: #475569;
            }

            .score-circle {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background: linear-gradient(135deg, #4B2EFA 0%, #4ABDF1 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
                box-shadow: 0 10px 40px rgba(75, 46, 250, 0.3);
            }

            .score-number {
                font-size: 3rem;
                font-weight: 700;
                color: white;
            }

            .quiz-message {
                font-size: 1.1rem;
                margin: 1.5rem 0;
                color: #475569;
            }

            .quiz-actions {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-top: 2rem;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @media (max-width: 768px) {
                .lesson-modal-content {
                    max-height: 95vh;
                    margin: 10px;
                }

                .lesson-modal-header,
                .lesson-modal-body,
                .lesson-modal-footer {
                    padding: 1.5rem;
                }

                .lesson-modal-header h2 {
                    font-size: 1.25rem;
                }

                .quiz-option {
                    padding: 1rem;
                }

                .score-circle {
                    width: 120px;
                    height: 120px;
                }

                .score-number {
                    font-size: 2.5rem;
                }
            }

            /* Video Styles */
            .lesson-video-container {
                margin-bottom: 2rem;
                background: #F8FAFC;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #E2E8F0;
            }

            .video-wrapper {
                position: relative;
                padding-bottom: 56.25%; /* 16:9 */
                height: 0;
                background: #000;
            }

            .video-wrapper iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            .video-info {
                padding: 1.5rem;
                border-top: 1px solid #E2E8F0;
            }

            .video-info h4 {
                margin: 0 0 0.5rem 0 !important;
                color: #0F172A;
                font-size: 1.1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .video-info p {
                margin: 0 !important;
                color: #64748B;
                font-size: 0.95rem;
                line-height: 1.5;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize lesson modal
let lessonModal;
document.addEventListener('DOMContentLoaded', () => {
    lessonModal = new LessonModal();
});
