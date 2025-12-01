// ========================================
// TRADEMASTER - ADVANCED CALCULATORS
// Professional Trading Tools
// ========================================

// ========================================
// FOREX POSITION SIZE CALCULATOR
// ========================================

function initForexCalculator() {
    const calculateBtn = document.getElementById('calculate-forex');
    if (!calculateBtn) return;

    calculateBtn.addEventListener('click', () => {
        const account = parseFloat(document.getElementById('forex-account').value);
        const risk = parseFloat(document.getElementById('forex-risk').value);
        const stopPips = parseFloat(document.getElementById('stop-pips').value);
        const pipValue = parseFloat(document.getElementById('pip-value').value);

        if (isNaN(account) || isNaN(risk) || isNaN(stopPips) || isNaN(pipValue)) {
            document.getElementById('forex-position-result').innerHTML = '<p style="color: #f87171;">Please fill in all fields</p>';
            return;
        }

        const riskAmount = (account * risk) / 100;
        const lotSize = riskAmount / (stopPips * pipValue);
        const standardLots = lotSize / 100000;

        document.getElementById('forex-position-result').innerHTML = `
            <div class="calc-result">
                <h4>Recommended Position Size</h4>
                <div class="calc-result-value">${lotSize.toFixed(0)} units (${standardLots.toFixed(2)} lots)</div>
                <div class="calc-result-details">
                    <p>Risk Amount: $${riskAmount.toFixed(2)}</p>
                    <p>Stop Loss: ${stopPips} pips</p>
                    <p>Risk per pip: $${(riskAmount / stopPips).toFixed(2)}</p>
                    <p>Max Loss: $${riskAmount.toFixed(2)} (${risk}%)</p>
                </div>
            </div>
        `;
    });
}

// ========================================
// PROFIT/LOSS CALCULATOR
// ========================================

function initPLCalculator() {
    const calculateBtn = document.getElementById('calculate-pl');
    if (!calculateBtn) return;

    calculateBtn.addEventListener('click', () => {
        const buyPrice = parseFloat(document.getElementById('buy-price').value);
        const sellPrice = parseFloat(document.getElementById('sell-price').value);
        const quantity = parseFloat(document.getElementById('quantity').value);
        const feesPercent = parseFloat(document.getElementById('fees').value);

        if (isNaN(buyPrice) || isNaN(sellPrice) || isNaN(quantity) || isNaN(feesPercent)) {
            document.getElementById('pl-result').innerHTML = '<p style="color: #f87171;">Please fill in all fields</p>';
            return;
        }

        const buyTotal = buyPrice * quantity;
        const sellTotal = sellPrice * quantity;
        const buyFees = (buyTotal * feesPercent) / 100;
        const sellFees = (sellTotal * feesPercent) / 100;
        const totalFees = buyFees + sellFees;
        const grossPL = sellTotal - buyTotal;
        const netPL = grossPL - totalFees;
        const plPercent = (netPL / buyTotal) * 100;

        const isProfit = netPL >= 0;
        const plColor = isProfit ? '#4ade80' : '#f87171';

        document.getElementById('pl-result').innerHTML = `
            <div class="calc-result" style="background: ${isProfit ? 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)' : 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)'}; color: var(--color-dark);">
                <h4 style="color: var(--color-dark);">${isProfit ? 'Profit' : 'Loss'} Calculation</h4>
                <div class="calc-result-value" style="color: ${plColor};">
                    ${isProfit ? '+' : ''}$${netPL.toFixed(2)} (${isProfit ? '+' : ''}${plPercent.toFixed(2)}%)
                </div>
                <div class="calc-result-details" style="color: var(--color-dark); opacity: 0.8;">
                    <p>Buy Total: $${buyTotal.toFixed(2)}</p>
                    <p>Sell Total: $${sellTotal.toFixed(2)}</p>
                    <p>Trading Fees: $${totalFees.toFixed(2)}</p>
                    <p>Gross P/L: $${grossPL.toFixed(2)}</p>
                </div>
            </div>
        `;
    });
}

// ========================================
// GAS FEE CALCULATOR
// ========================================

function initGasCalculator() {
    const calculateBtn = document.getElementById('calculate-gas');
    if (!calculateBtn) return;

    calculateBtn.addEventListener('click', () => {
        const gasLimit = parseFloat(document.getElementById('gas-limit').value);
        const gasPrice = parseFloat(document.getElementById('gas-price').value);
        const ethPrice = parseFloat(document.getElementById('eth-price').value);
        const priorityFee = parseFloat(document.getElementById('priority-fee').value);

        if (isNaN(gasLimit) || isNaN(gasPrice) || isNaN(ethPrice) || isNaN(priorityFee)) {
            document.getElementById('gas-result').innerHTML = '<p style="color: #f87171;">Please fill in all fields</p>';
            return;
        }

        const totalGasPrice = gasPrice + priorityFee;
        const gasCostGwei = gasLimit * totalGasPrice;
        const gasCostEth = gasCostGwei / 1000000000;
        const gasCostUsd = gasCostEth * ethPrice;

        // Calculate for different speeds
        const slowGas = gasLimit * (gasPrice * 0.8) / 1000000000 * ethPrice;
        const fastGas = gasLimit * (gasPrice * 1.2) / 1000000000 * ethPrice;

        document.getElementById('gas-result').innerHTML = `
            <div class="calc-result">
                <h4>Estimated Gas Cost</h4>
                <div class="calc-result-value">$${gasCostUsd.toFixed(2)} (${gasCostEth.toFixed(6)} ETH)</div>
                <div class="calc-result-details">
                    <p>Gas Limit: ${gasLimit.toLocaleString()}</p>
                    <p>Gas Price: ${gasPrice} Gwei</p>
                    <p>Priority Fee: ${priorityFee} Gwei</p>
                    <p>Total Gas: ${gasCostGwei.toLocaleString()} Gwei</p>
                    <hr style="margin: 1rem 0; border: none; border-top: 1px solid rgba(255,255,255,0.3);">
                    <p><strong>Speed Options:</strong></p>
                    <p>🐢 Slow (~$${slowGas.toFixed(2)})</p>
                    <p>⚡ Fast (~$${fastGas.toFixed(2)})</p>
                </div>
            </div>
        `;
    });
}

// ========================================
// COMPOUND INTEREST CALCULATOR
// ========================================

function initCompoundCalculator() {
    const calculateBtn = document.getElementById('calculate-compound');
    if (!calculateBtn) return;

    calculateBtn.addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('principal').value);
        const apy = parseFloat(document.getElementById('apy').value);
        const years = parseFloat(document.getElementById('years').value);
        const frequency = parseInt(document.getElementById('compound-freq').value);

        if (isNaN(principal) || isNaN(apy) || isNaN(years)) {
            document.getElementById('compound-result').innerHTML = '<p style="color: #f87171;">Please fill in all fields</p>';
            return;
        }

        const rate = apy / 100;
        const n = frequency;
        const t = years;

        // Compound interest formula: A = P(1 + r/n)^(nt)
        const finalAmount = principal * Math.pow((1 + rate / n), n * t);
        const totalInterest = finalAmount - principal;
        const percentGain = ((finalAmount - principal) / principal) * 100;

        // Calculate yearly breakdown
        let yearlyBreakdown = '';
        for (let year = 1; year <= Math.min(years, 10); year++) {
            const yearAmount = principal * Math.pow((1 + rate / n), n * year);
            yearlyBreakdown += `<p>Year ${year}: $${yearAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`;
        }

        document.getElementById('compound-result').innerHTML = `
            <div class="calc-result">
                <h4>Investment Growth Projection</h4>
                <div class="calc-result-value">$${finalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <div class="calc-result-details">
                    <p>Initial Investment: $${principal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p>Total Interest Earned: $${totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p>Total Gain: ${percentGain.toFixed(2)}%</p>
                    <p>APY: ${apy}%</p>
                    <p>Time Period: ${years} years</p>
                    <hr style="margin: 1rem 0; border: none; border-top: 1px solid rgba(255,255,255,0.3);">
                    <p><strong>Yearly Breakdown:</strong></p>
                    ${yearlyBreakdown}
                </div>
            </div>
        `;
    });
}

// ========================================
// ECONOMIC CALENDAR FILTERS
// ========================================

function initCalendarFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const events = document.querySelectorAll('.calendar-event');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const impact = btn.dataset.impact;

            // Filter events
            events.forEach(event => {
                const eventImpact = event.querySelector('.impact-badge');
                if (impact === 'all') {
                    event.style.display = 'grid';
                } else {
                    const hasImpact = eventImpact.classList.contains(`impact-${impact}`);
                    event.style.display = hasImpact ? 'grid' : 'none';
                }
            });
        });
    });
}

// ========================================
// INITIALIZE ALL CALCULATORS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initForexCalculator();
    initPLCalculator();
    initGasCalculator();
    initCompoundCalculator();
    initCalendarFilters();
});

// ========================================
// LIVE FOREX RATES (using exchangerate-api.com)
// ========================================

class ForexRates {
    constructor() {
        this.apiBase = 'https://api.exchangerate-api.com/v4/latest/USD';
        this.updateInterval = 300000; // 5 minutes
        this.init();
    }

    async init() {
        const forexWidget = document.getElementById('forex-rates');
        if (forexWidget) {
            await this.updateRates();
            setInterval(() => this.updateRates(), this.updateInterval);
        }
    }

    async updateRates() {
        try {
            const response = await fetch(this.apiBase);
            const data = await response.json();
            this.displayRates(data.rates);
        } catch (error) {
            console.error('Error fetching forex rates:', error);
        }
    }

    displayRates(rates) {
        const ratesGrid = document.getElementById('forex-rates-grid');
        if (!ratesGrid) return;

        const pairs = [
            { pair: 'EUR/USD', rate: rates.EUR ? (1 / rates.EUR).toFixed(4) : 'N/A' },
            { pair: 'GBP/USD', rate: rates.GBP ? (1 / rates.GBP).toFixed(4) : 'N/A' },
            { pair: 'USD/JPY', rate: rates.JPY ? rates.JPY.toFixed(2) : 'N/A' },
            { pair: 'USD/CHF', rate: rates.CHF ? rates.CHF.toFixed(4) : 'N/A' },
            { pair: 'AUD/USD', rate: rates.AUD ? (1 / rates.AUD).toFixed(4) : 'N/A' },
            { pair: 'USD/CAD', rate: rates.CAD ? rates.CAD.toFixed(4) : 'N/A' }
        ];

        ratesGrid.innerHTML = pairs.map(p => `
            <div class="price-card">
                <div class="price-symbol">${p.pair}</div>
                <div class="price-value">${p.rate}</div>
            </div>
        `).join('');
    }
}

// Initialize forex rates
document.addEventListener('DOMContentLoaded', () => {
    new ForexRates();
});

// ========================================
// TOKENOMICS ANALYZER
// ========================================

function initTokenomicsAnalyzer() {
    const analyzeBtn = document.getElementById('analyze-tokenomics');
    if (!analyzeBtn) return;

    analyzeBtn.addEventListener('click', () => {
        const totalSupply = parseFloat(document.getElementById('total-supply').value);
        const circulatingSupply = parseFloat(document.getElementById('circulating-supply').value);
        const price = parseFloat(document.getElementById('token-price').value);
        const burnRate = parseFloat(document.getElementById('burn-rate').value);

        if (isNaN(totalSupply) || isNaN(circulatingSupply) || isNaN(price)) {
            document.getElementById('tokenomics-result').innerHTML = '<p style="color: #f87171;">Please fill in required fields</p>';
            return;
        }

        const marketCap = circulatingSupply * price;
        const fullyDilutedValue = totalSupply * price;
        const circulationRatio = (circulatingSupply / totalSupply) * 100;
        const inflationRate = ((totalSupply - circulatingSupply) / circulatingSupply) * 100;

        let analysis = '';
        if (circulationRatio < 30) {
            analysis = '⚠️ Low circulation - High inflation risk';
        } else if (circulationRatio < 70) {
            analysis = '✅ Moderate circulation - Balanced supply';
        } else {
            analysis = '🎯 High circulation - Low inflation risk';
        }

        document.getElementById('tokenomics-result').innerHTML = `
            <div class="calc-result">
                <h4>Tokenomics Analysis</h4>
                <div class="calc-result-value">$${marketCap.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
                <div class="calc-result-details">
                    <p><strong>Market Cap:</strong> $${marketCap.toLocaleString()}</p>
                    <p><strong>Fully Diluted Value:</strong> $${fullyDilutedValue.toLocaleString()}</p>
                    <p><strong>Circulation Ratio:</strong> ${circulationRatio.toFixed(2)}%</p>
                    <p><strong>Potential Inflation:</strong> ${inflationRate.toFixed(2)}%</p>
                    ${burnRate ? `<p><strong>Annual Burn:</strong> ${burnRate}%</p>` : ''}
                    <hr style="margin: 1rem 0; border: none; border-top: 1px solid rgba(255,255,255,0.3);">
                    <p><strong>Analysis:</strong> ${analysis}</p>
                </div>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', initTokenomicsAnalyzer);
