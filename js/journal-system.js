// ========================================
// TRADEMASTER - TRADING JOURNAL SYSTEM
// Comprehensive Trade Tracking & Analysis
// ========================================

class JournalSystem {
    constructor() {
        this.trades = this.loadTrades();
        this.currentFilter = { asset: 'all', outcome: 'all' };
        this.editingTradeId = null;
        this.init();
    }

    // Load trades from localStorage
    loadTrades() {
        const saved = localStorage.getItem('trademaster-journal');
        return saved ? JSON.parse(saved) : [];
    }

    // Save trades to localStorage
    saveTrades() {
        localStorage.setItem('trademaster-journal', JSON.stringify(this.trades));
    }

    // Initialize journal system
    init() {
        if (!window.location.pathname.includes('journal.html')) return;

        this.renderStats();
        this.renderEntries();
        this.setupEventListeners();
        this.checkEmptyState();
    }

    // Setup event listeners
    setupEventListeners() {
        const addBtn = document.getElementById('add-trade-btn');
        const exportBtn = document.getElementById('export-journal-btn');
        const closeModal = document.getElementById('close-modal');
        const cancelBtn = document.getElementById('cancel-btn');
        const tradeForm = document.getElementById('trade-form');
        const filterAsset = document.getElementById('filter-asset');
        const filterOutcome = document.getElementById('filter-outcome');

        if (addBtn) {
            addBtn.addEventListener('click', () => this.showTradeModal());
        }

        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportToCSV());
        }

        if (closeModal) {
            closeModal.addEventListener('click', () => this.closeModal());
        }

        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.closeModal());
        }

        if (tradeForm) {
            tradeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveTrade();
            });
        }

        if (filterAsset) {
            filterAsset.addEventListener('change', (e) => {
                this.currentFilter.asset = e.target.value;
                this.renderEntries();
            });
        }

        if (filterOutcome) {
            filterOutcome.addEventListener('change', (e) => {
                this.currentFilter.outcome = e.target.value;
                this.renderEntries();
            });
        }

        // Close modal on background click
        const modal = document.getElementById('trade-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }
    }

    // Show trade modal
    showTradeModal(trade = null) {
        const modal = document.getElementById('trade-modal');
        const modalTitle = document.getElementById('modal-title');
        const form = document.getElementById('trade-form');

        if (trade) {
            // Edit mode
            modalTitle.textContent = 'Edit Trade';
            this.editingTradeId = trade.id;
            this.populateForm(trade);
        } else {
            // Add mode
            modalTitle.textContent = 'Add New Trade';
            this.editingTradeId = null;
            form.reset();
            // Set today's date by default
            document.getElementById('trade-date').valueAsDate = new Date();
        }

        modal.style.display = 'flex';
    }

    // Close modal
    closeModal() {
        const modal = document.getElementById('trade-modal');
        modal.style.display = 'none';
        this.editingTradeId = null;
    }

    // Populate form with trade data
    populateForm(trade) {
        document.getElementById('trade-date').value = trade.date;
        document.getElementById('trade-asset').value = trade.asset;
        document.getElementById('trade-category').value = trade.category;
        document.getElementById('trade-direction').value = trade.direction;
        document.getElementById('trade-entry-price').value = trade.entryPrice;
        document.getElementById('trade-exit-price').value = trade.exitPrice;
        document.getElementById('trade-position-size').value = trade.positionSize;
        document.getElementById('trade-strategy').value = trade.strategy || '';
        document.getElementById('trade-notes').value = trade.notes || '';
        document.getElementById('trade-emotions').value = trade.emotions || '';
    }

    // Save trade
    saveTrade() {
        const tradeData = {
            id: this.editingTradeId || Date.now().toString(),
            date: document.getElementById('trade-date').value,
            asset: document.getElementById('trade-asset').value,
            category: document.getElementById('trade-category').value,
            direction: document.getElementById('trade-direction').value,
            entryPrice: parseFloat(document.getElementById('trade-entry-price').value),
            exitPrice: parseFloat(document.getElementById('trade-exit-price').value),
            positionSize: parseFloat(document.getElementById('trade-position-size').value),
            strategy: document.getElementById('trade-strategy').value,
            notes: document.getElementById('trade-notes').value,
            emotions: document.getElementById('trade-emotions').value,
            timestamp: new Date().toISOString()
        };

        // Calculate P/L
        const priceChange = tradeData.exitPrice - tradeData.entryPrice;
        const multiplier = tradeData.direction === 'short' ? -1 : 1;
        tradeData.profitLoss = (priceChange * tradeData.positionSize * multiplier);
        tradeData.profitLossPercent = ((priceChange / tradeData.entryPrice) * 100 * multiplier);

        if (this.editingTradeId) {
            // Update existing trade
            const index = this.trades.findIndex(t => t.id === this.editingTradeId);
            if (index !== -1) {
                this.trades[index] = tradeData;
            }
        } else {
            // Add new trade
            this.trades.unshift(tradeData);
        }

        this.saveTrades();
        this.renderStats();
        this.renderEntries();
        this.checkEmptyState();
        this.closeModal();

        // Show success notification
        this.showNotification('Trade saved successfully!', 'success');
    }

    // Delete trade
    deleteTrade(tradeId) {
        if (confirm('Are you sure you want to delete this trade?')) {
            this.trades = this.trades.filter(t => t.id !== tradeId);
            this.saveTrades();
            this.renderStats();
            this.renderEntries();
            this.checkEmptyState();
            this.showNotification('Trade deleted', 'info');
        }
    }

    // Filter trades
    filterTrades() {
        let filtered = this.trades;

        if (this.currentFilter.asset !== 'all') {
            filtered = filtered.filter(t => t.category === this.currentFilter.asset);
        }

        if (this.currentFilter.outcome !== 'all') {
            filtered = filtered.filter(t => {
                if (this.currentFilter.outcome === 'profit') {
                    return t.profitLoss > 0;
                } else if (this.currentFilter.outcome === 'loss') {
                    return t.profitLoss < 0;
                } else if (this.currentFilter.outcome === 'breakeven') {
                    return t.profitLoss === 0;
                }
                return true;
            });
        }

        return filtered;
    }

    // Render statistics
    renderStats() {
        const statsContainer = document.getElementById('journal-stats');
        if (!statsContainer) return;

        const stats = this.calculateStats();

        statsContainer.innerHTML = `
            <div class="stat-card">
                <div class="stat-icon" style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);">
                    <i class="fas fa-chart-line"></i>
                </div>
                <div class="stat-info">
                    <h4>Total Trades</h4>
                    <p class="stat-value">${stats.totalTrades}</p>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon" style="background: linear-gradient(135deg, #10B981 0%, #059669 100%);">
                    <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="stat-info">
                    <h4>Total P/L</h4>
                    <p class="stat-value ${stats.totalPL >= 0 ? 'profit' : 'loss'}">
                        ${stats.totalPL >= 0 ? '+' : ''}$${stats.total PL.toFixed(2)
    }
                    </p>
                </div >
            </div >

            <div class="stat-card">
                <div class="stat-icon" style="background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);">
                    <i class="fas fa-percentage"></i>
                </div>
                <div class="stat-info">
                    <h4>Win Rate</h4>
                    <p class="stat-value">${stats.winRate.toFixed(1)}%</p>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon" style="background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);">
                    <i class="fas fa-trophy"></i>
                </div>
                <div class="stat-info">
                    <h4>Best Trade</h4>
                    <p class="stat-value profit">+$${stats.bestTrade.toFixed(2)}</p>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon" style="background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="stat-info">
                    <h4>Worst Trade</h4>
                    <p class="stat-value loss">$${stats.worstTrade.toFixed(2)}</p>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon" style="background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);">
                    <i class="fas fa-calculator"></i>
                </div>
                <div class="stat-info">
                    <h4>Avg Trade</h4>
                    <p class="stat-value ${stats.avgTrade >= 0 ? 'profit' : 'loss'}">
                        ${stats.avgTrade >= 0 ? '+' : ''}$${stats.avgTrade.toFixed(2)}
                    </p>
                </div>
            </div>
`;
    }

    // Calculate statistics
    calculateStats() {
        const totalTrades = this.trades.length;
        const profitableTrades = this.trades.filter(t => t.profitLoss > 0).length;
        const totalPL = this.trades.reduce((sum, t) => sum + t.profitLoss, 0);
        const winRate = totalTrades > 0 ? (profitableTrades / totalTrades) * 100 : 0;
        const bestTrade = totalTrades > 0 ? Math.max(...this.trades.map(t => t.profitLoss)) : 0;
        const worstTrade = totalTrades > 0 ? Math.min(...this.trades.map(t => t.profitLoss)) : 0;
        const avgTrade = totalTrades > 0 ? totalPL / totalTrades : 0;

        return {
            totalTrades,
            totalPL,
            winRate,
            bestTrade,
            worstTrade,
            avgTrade
        };
    }

    // Render entries
    renderEntries() {
        const entriesContainer = document.getElementById('journal-entries');
        if (!entriesContainer) return;

        const filteredTrades = this.filterTrades();

        if (filteredTrades.length === 0) {
            entriesContainer.innerHTML = '';
            return;
        }

        entriesContainer.innerHTML = filteredTrades.map(trade => this.renderTradeCard(trade)).join('');

        // Add event listeners to action buttons
        filteredTrades.forEach(trade => {
            const editBtn = document.getElementById(`edit - ${ trade.id } `);
            const deleteBtn = document.getElementById(`delete -${ trade.id } `);

            if (editBtn) {
                editBtn.addEventListener('click', () => this.showTradeModal(trade));
            }

            if (deleteBtn) {
                deleteBtn.addEventListener('click', () => this.deleteTrade(trade.id));
            }
        });
    }

    // Render single trade card
    renderTradeCard(trade) {
        const profitClass = trade.profitLoss > 0 ? 'profit' : trade.profitLoss < 0 ? 'loss' : 'breakeven';
        const directionIcon = trade.direction === 'long' ? 'fa-arrow-up' : 'fa-arrow-down';
        const directionClass = trade.direction === 'long' ? 'direction-long' : 'direction-short';

        return `
    < div class="trade-card ${profitClass}" >
                <div class="trade-header">
                    <div class="trade-asset">
                        <span class="trade-direction ${directionClass}">
                            <i class="fas ${directionIcon}"></i>
                        </span>
                        <div>
                            <h4>${trade.asset}</h4>
                            <span class="trade-date">${this.formatDate(trade.date)}</span>
                        </div>
                    </div>
                    <div class="trade-pl ${profitClass}">
                        <div class="pl-amount">${trade.profitLoss >= 0 ? '+' : ''}$${trade.profitLoss.toFixed(2)}</div>
                        <div class="pl-percent">${trade.profitLossPercent >= 0 ? '+' : ''}${trade.profitLossPercent.toFixed(2)}%</div>
                    </div>
                </div>

                <div class="trade-details">
                    <div class="detail-item">
                        <span class="detail-label">Entry:</span>
                        <span class="detail-value">$${trade.entryPrice.toFixed(2)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Exit:</span>
                        <span class="detail-value">$${trade.exitPrice.toFixed(2)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Size:</span>
                        <span class="detail-value">${trade.positionSize}</span>
                    </div>
                    ${trade.strategy ? `
                    <div class="detail-item">
                        <span class="detail-label">Strategy:</span>
                        <span class="detail-value">${trade.strategy}</span>
                    </div>
                    ` : ''}
                </div>

                ${
    trade.notes ? `
                <div class="trade-notes">
                    <i class="fas fa-sticky-note"></i>
                    <p>${trade.notes}</p>
                </div>
                ` : ''
}

                ${
    trade.emotions ? `
                <div class="trade-emotions">
                    <i class="fas fa-heart"></i>
                    <span>${this.capitalizeFirst(trade.emotions)}</span>
                </div>
                ` : ''
}

<div class="trade-actions">
    <button id="edit-${trade.id}" class="trade-action-btn">
        <i class="fas fa-edit"></i> Edit
    </button>
    <button id="delete-${trade.id}" class="trade-action-btn trade-delete">
        <i class="fas fa-trash"></i> Delete
    </button>
</div>
            </div >
    `;
    }

    // Check and show/hide empty state
    checkEmptyState() {
        const emptyState = document.getElementById('empty-state');
        const entriesContainer = document.getElementById('journal-entries');

        if (this.trades.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
            if (entriesContainer) entriesContainer.style.display = ' none';
        } else {
            if (emptyState) emptyState.style.display = 'none';
            if (entriesContainer) entriesContainer.style.display = 'grid';
        }
    }

    // Export to CSV
    exportToCSV() {
        if (this.trades.length === 0) {
            alert('No trades to export');
            return;
        }

        const headers = ['Date', 'Asset', 'Category', 'Direction', 'Entry Price', 'Exit Price', 'Position Size', 'P/L', 'P/L %', 'Strategy', 'Emotions', 'Notes'];
        const rows = this.trades.map(trade => [
            trade.date,
            trade.asset,
            trade.category,
            trade.direction,
            trade.entryPrice,
            trade.exitPrice,
            trade.positionSize,
            trade.profitLoss.toFixed(2),
            trade.profitLossPercent.toFixed(2),
            trade.strategy || '',
            trade.emotions || '',
            `"${(trade.notes || '').replace(/" / g, '""')}"`
        ]);

const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
].join('\n');

const blob = new Blob([csvContent], { type: 'text/csv' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = `trademaster-journal-${new Date().toISOString().split('T')[0]}.csv`;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
window.URL.revokeObjectURL(url);

this.showNotification('Journal exported successfully!', 'success');
    }

// Show notification
showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `journal-notification ${type}`;
    notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Utility functions
formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
}

// Initialize journal system
document.addEventListener('DOMContentLoaded', () => {
    window.journalSystem = new JournalSystem();
});
