// ========================================
// TRADEMASTER - CERTIFICATE GENERATOR
// PDF Certificate Export System
// ========================================

class CertificateGenerator {
    constructor() {
        this.userData = this.loadUserData();
        this.init();
    }

    // Load user data from learning system
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

    // Initialize certificate system
    init() {
        this.setupCertificateButtons();
    }

    // Setup certificate download buttons
    setupCertificateButtons() {
        // Look for certificate buttons and add event listeners
        const buttons = document.querySelectorAll('.download-certificate');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const type = e.target.dataset.certificateType;
                this.generateCertificate(type);
            });
        });
    }

    // Generate certificate
    generateCertificate(type = 'overall') {
        // Check if jsPDF is loaded
        if (typeof window.jspdf === 'undefined') {
            alert('Certificate system is loading. Please try again in a moment.');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        // Get certificate data based on type
        const certData = this.getCertificateData(type);

        // Draw certificate
        this.drawCertificate(doc, certData);

        // Save PDF
        const filename = `TradeStarter-Certificate-${type}-${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(filename);

        // Show success notification
        this.showNotification('Certificate downloaded successfully!');
    }

    // Get certificate data based on type
    getCertificateData(type) {
        const username = this.getUsername();
        const date = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        const baseData = {
            username,
            date,
            level: this.userData.level,
            xp: this.userData.xp,
            totalLessons: this.userData.completedLessons.length
        };

        switch (type) {
            case 'crypto':
                return {
                    ...baseData,
                    title: 'Cryptocurrency Trading',
                    subtitle: 'Mastery Certificate',
                    description: 'has successfully completed the comprehensive Cryptocurrency Trading course',
                    lessons: this.getCategoryLessons('crypto'),
                    color: '#6366F1'
                };
            
            case 'forex':
                return {
                    ...baseData,
                    title: 'Forex Trading',
                    subtitle: 'Mastery Certificate',
                    description: 'has successfully completed the comprehensive Forex Trading course',
                    lessons: this.getCategoryLessons('forex'),
                    color: '#10B981'
                };
            
            case 'airdrops':
                return {
                    ...baseData,
                    title: 'Airdrop Hunting',
                    subtitle: 'Mastery Certificate',
                    description: 'has successfully completed the comprehensive Airdrop Hunting course',
                    lessons: this.getCategoryLessons('airdrops'),
                    color: '#F59E0B'
                };
            
            case 'milestone-50':
                return {
                    ...baseData,
                    title: 'Trading Education',
                    subtitle: '50% Completion Certificate',
                    description: 'has successfully completed 50% of the TradeStarter curriculum',
                    lessons: Math.floor(135 * 0.5),
                    color: '#8B5CF6'
                };
            
            case 'milestone-75':
                return {
                    ...baseData,
                    title: 'Trading Education',
                    subtitle: '75% Completion Certificate',
                    description: 'has successfully completed 75% of the TradeStarter curriculum',
                    lessons: Math.floor(135 * 0.75),
                    color: '#EC4899'
                };
            
            case 'overall':
            default:
                return {
                    ...baseData,
                    title: 'Trading Mastery',
                    subtitle: 'Certificate of Completion',
                    description: 'has successfully completed the entire TradeStarter curriculum',
                    lessons: 135,
                    color: '#4F46E5'
                };
        }
    }

    // Get category lessons count
    getCategoryLessons(category) {
        // Count lessons by category
        const categoryLessons = this.userData.completedLessons.filter(lesson => {
            if (category === 'crypto') {
                return lesson.includes('lesson') && !lesson.includes('forex') && !lesson.includes('airdrop');
            } else if (category === 'forex') {
                return lesson.includes('forex');
            } else if (category === 'airdrops') {
                return lesson.includes('airdrop');
            }
            return false;
        });
        return categoryLessons.length;
    }

    // Get username (from localStorage or default)
    getUsername() {
        const saved = localStorage.getItem('trademaster_username');
        if (saved) {
            return saved;
        }
        
        // Prompt for username if not set
        const username = prompt('Enter your name for the certificate:', 'Trading Student');
        if (username) {
            localStorage.setItem('trademaster_username', username);
            return username;
        }
        
        return 'Trading Student';
    }

    // Draw certificate on PDF
    drawCertificate(doc, data) {
        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();

        // Background gradient effect (using rectangles)
        doc.setFillColor(248, 250, 252);
        doc.rect(0, 0, width, height, 'F');

        // Border
        doc.setDrawColor(79, 70, 229);
        doc.setLineWidth(2);
        doc.rect(10, 10, width - 20, height - 20);
        
        // Inner border
        doc.setLineWidth(0.5);
        doc.rect(15, 15, width - 30, height - 30);

        // Logo area (decorative circle)
        doc.setFillColor(79, 70, 229);
        doc.circle(width / 2, 35, 8, 'F');
        
        doc.setFontSize(14);
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.text('TS', width / 2, 37, { align: 'center' });

        // "Certificate of" text
        doc.setFontSize(16);
        doc.setTextColor(100, 116, 139);
        doc.setFont('helvetica', 'normal');
        doc.text('Certificate of', width / 2, 55, { align: 'center' });

        // Main title
        doc.setFontSize(32);
        doc.setTextColor(30, 41, 59);
        doc.setFont('helvetica', 'bold');
        doc.text(data.title, width / 2, 68, { align: 'center' });

        // Subtitle
        doc.setFontSize(18);
        doc.setTextColor(100, 116, 139);
        doc.setFont('helvetica', 'italic');
        doc.text(data.subtitle, width / 2, 77, { align: 'center' });

        // Decorative line
        doc.setDrawColor(203, 213, 225);
        doc.setLineWidth(0.5);
        doc.line(50, 85, width - 50, 85);

        // "This is to certify that"
        doc.setFontSize(12);
        doc.setTextColor(100, 116, 139);
        doc.setFont('helvetica', 'normal');
        doc.text('This is to certify that', width / 2, 95, { align: 'center' });

        // Username
        doc.setFontSize(28);
        doc.setTextColor(79, 70, 229);
        doc.setFont('helvetica', 'bold');
        doc.text(data.username, width / 2, 108, { align: 'center' });

        // Decorative underline
        const nameWidth = doc.getTextWidth(data.username);
        doc.setDrawColor(79, 70, 229);
        doc.setLineWidth(0.3);
        doc.line((width - nameWidth) / 2, 110, (width + nameWidth) / 2, 110);

        // Description
        doc.setFontSize(12);
        doc.setTextColor(71, 85, 105);
        doc.setFont('helvetica', 'normal');
        doc.text(data.description, width / 2, 120, { align: 'center' });

        // Stats boxes
        const boxY = 132;
        const boxWidth = 50;
        const boxHeight = 20;
        const boxSpacing = 55;
        const startX = (width - (boxSpacing * 2)) / 2;

        // Box 1: Level
        this.drawStatBox(doc, startX, boxY, boxWidth, boxHeight, 'Level', data.level.toString(), '#6366F1');
        
        // Box 2: XP
        this.drawStatBox(doc, startX + boxSpacing, boxY, boxWidth, boxHeight, 'Total XP', data.xp.toString(), '#10B981');
        
        // Box 3: Lessons
        this.drawStatBox(doc, startX + (boxSpacing * 2), boxY, boxWidth, boxHeight, 'Lessons', data.lessons.toString(), '#F59E0B');

        // Date
        doc.setFontSize(10);
        doc.setTextColor(100, 116, 139);
        doc.setFont('helvetica', 'normal');
        doc.text(`Date: ${data.date}`, width / 2, height - 35, { align: 'center' });

        // Signature line
        const sigY = height - 25;
        doc.setDrawColor(203, 213, 225);
        doc.setLineWidth(0.3);
        doc.line(40, sigY, 90, sigY);
        doc.line(width - 90, sigY, width - 40, sigY);

        // Signature labels
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139);
        doc.text('TradeStarter Team', 65, sigY + 5, { align: 'center' });
        doc.text('Student Signature', width - 65, sigY + 5, { align: 'center' });

        // Footer
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184);
        doc.text('TradeStarter - Your Trusted Trading Education Platform', width / 2, height - 12, { align: 'center' });
        doc.text('www.tradestarter.com', width / 2, height - 8, { align: 'center' });
    }

    // Draw stat box
    drawStatBox(doc, x, y, width, height, label, value, color) {
        // Convert hex to RGB
        const rgb = this.hexToRgb(color);
        
        // Box background
        doc.setFillColor(rgb.r, rgb.g, rgb.b, 0.1);
        doc.setDrawColor(rgb.r, rgb.g, rgb.b);
        doc.setLineWidth(0.5);
        doc.roundedRect(x, y, width, height, 3, 3, 'FD');

        // Label
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.setFont('helvetica', 'normal');
        doc.text(label, x + width / 2, y + 8, { align: 'center' });

        // Value
        doc.setFontSize(16);
        doc.setTextColor(rgb.r, rgb.g, rgb.b);
        doc.setFont('helvetica', 'bold');
        doc.text(value, x + width / 2, y + 16, { align: 'center' });
    }

    // Helper: Convert hex to RGB
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 79, g: 70, b: 229 };
    }

    // Show notification
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'certificate-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add certificate button to page
    static addCertificateButton(containerId, certificateType, buttonText) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const button = document.createElement('button');
        button.className = 'btn btn-primary download-certificate';
        button.dataset.certificateType = certificateType;
        button.innerHTML = `
            <i class="fas fa-download"></i> ${buttonText}
        `;
        
        container.appendChild(button);
    }
}

// Initialize certificate system
document.addEventListener('DOMContentLoaded', () => {
    window.certificateGenerator = new CertificateGenerator();
});
