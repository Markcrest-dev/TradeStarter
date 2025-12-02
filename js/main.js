// ========================================
// TRADESTARTER - MAIN JAVASCRIPT
// Interactive Features & Functionality
// ========================================

// ========================================
// MOBILE MENU TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });
    }
});

// ========================================
// HEADER SCROLL EFFECT - DISABLED (STATIC NAVBAR)
// ========================================
// Navbar scroll animation removed - navbar is now static
// let lastScroll = 0;
// let ticking = false;

// window.addEventListener('scroll', function () {
//     lastScroll = window.scrollY;

//     if (!ticking) {
//         window.requestAnimationFrame(function () {
//             const header = document.querySelector('.header');
//             if (header) {
//                 if (lastScroll > 100) {
//                     header.classList.add('scrolled');
//                 } else {
//                     header.classList.remove('scrolled');
//                 }
//             }
//             ticking = false;
//         });
//         ticking = true;
//     }
// });

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;

        try {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } catch (err) {
            // Ignore invalid selectors
        }
    });
});

// ========================================
// CRYPTO CONVERTER (USD ↔ BTC)
// ========================================
function initCryptoConverter() {
    const converterForm = document.getElementById('crypto-converter');
    if (!converterForm) return;

    const amountInput = document.getElementById('crypto-amount');
    const fromSelect = document.getElementById('crypto-from');
    const toSelect = document.getElementById('crypto-to');
    const resultDiv = document.getElementById('crypto-result');

    // Simplified conversion rates (in real app, use API)
    const rates = {
        'USD': 1,
        'BTC': 0.000023,  // Approximate rate
        'ETH': 0.00045    // Approximate rate
    };

    function convertCrypto() {
        const amount = parseFloat(amountInput.value);
        const from = fromSelect.value;
        const to = toSelect.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Please enter a valid amount';
            return;
        }

        // Convert to USD first, then to target currency
        const usdAmount = amount / rates[from];
        const result = usdAmount * rates[to];

        resultDiv.textContent = `${amount} ${from} = ${result.toFixed(8)} ${to}`;
    }

    // Add event listeners
    amountInput.addEventListener('input', convertCrypto);
    fromSelect.addEventListener('change', convertCrypto);
    toSelect.addEventListener('change', convertCrypto);

    // Initial conversion
    convertCrypto();
}

// ========================================
// FOREX CONVERTER
// ========================================
function initForexConverter() {
    const converterForm = document.getElementById('forex-converter');
    if (!converterForm) return;

    const amountInput = document.getElementById('forex-amount');
    const fromSelect = document.getElementById('forex-from');
    const toSelect = document.getElementById('forex-to');
    const resultDiv = document.getElementById('forex-result');

    // Simplified forex rates (in real app, use API like exchangerate-api.com)
    const rates = {
        'USD': 1,
        'EUR': 0.92,
        'GBP': 0.79,
        'JPY': 149.50,
        'AUD': 1.52,
        'CAD': 1.36,
        'CHF': 0.88,
        'CNY': 7.24
    };

    function convertForex() {
        const amount = parseFloat(amountInput.value);
        const from = fromSelect.value;
        const to = toSelect.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Please enter a valid amount';
            return;
        }

        // Convert to USD first, then to target currency
        const usdAmount = amount / rates[from];
        const result = usdAmount * rates[to];

        resultDiv.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
    }

    // Add event listeners
    amountInput.addEventListener('input', convertForex);
    fromSelect.addEventListener('change', convertForex);
    toSelect.addEventListener('change', convertForex);

    // Initial conversion
    convertForex();
}

// ========================================
// AIRDROP CHECKLIST WITH LOCALSTORAGE
// ========================================
function initAirdropChecklist() {
    const checklist = document.getElementById('airdrop-checklist');
    if (!checklist) return;

    const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');

    // Load saved state from localStorage
    checkboxes.forEach((checkbox, index) => {
        const savedState = localStorage.getItem(`airdrop-${index}`);
        if (savedState === 'true') {
            checkbox.checked = true;
            checkbox.parentElement.classList.add('completed');
        }

        // Save state on change
        checkbox.addEventListener('change', function () {
            localStorage.setItem(`airdrop-${index}`, this.checked);

            if (this.checked) {
                this.parentElement.classList.add('completed');
            } else {
                this.parentElement.classList.remove('completed');
            }
        });
    });

    // Reset button
    const resetBtn = document.getElementById('reset-checklist');
    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            checkboxes.forEach((checkbox, index) => {
                checkbox.checked = false;
                checkbox.parentElement.classList.remove('completed');
                localStorage.removeItem(`airdrop-${index}`);
            });
        });
    }
}

// ========================================
// CONTACT FORM VALIDATION
// ========================================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let isValid = true;

        // Validate name
        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            clearError(name);
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            clearError(email);
        }

        // Validate message
        if (message.value.trim() === '') {
            showError(message, 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters');
            isValid = false;
        } else {
            clearError(message);
        }

        // If form is valid, show success message
        if (isValid) {
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.style.cssText = 'background: #28a745; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center;';
            successMessage.textContent = 'Thank you! Your message has been sent successfully.';

            contactForm.appendChild(successMessage);
            contactForm.reset();

            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');

        let errorMessage = formGroup.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            formGroup.appendChild(errorMessage);
        }
        errorMessage.textContent = message;
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
    }
}

// ========================================
// FADE IN ANIMATION ON SCROLL
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and content sections
    document.querySelectorAll('.card, .content-section').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// INITIALIZE ALL FUNCTIONS
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    initCryptoConverter();
    initForexConverter();
    initAirdropChecklist();
    initContactForm();
    initScrollAnimations();
});

// ========================================
// ACTIVE NAV LINK HIGHLIGHTING
// ========================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);
