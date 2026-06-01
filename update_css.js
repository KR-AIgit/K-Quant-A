const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

const newCss = `
/* Search Trigger Button */
.search-trigger-btn {
    background: rgba(10, 15, 25, 0.6);
    border: 1px solid var(--border-glass);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: var(--transition-smooth);
    font-size: 1.1rem;
    color: var(--text-secondary);
    width: 100%;
}
.search-trigger-btn:hover {
    background: rgba(10, 15, 25, 0.9);
    border-color: var(--accent-purple);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
}
.search-trigger-btn i {
    font-size: 1.2rem;
}
.search-trigger-btn #current-selected-stock-display {
    color: var(--text-primary);
    font-weight: 600;
}

/* Search Modal */
.search-modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(5, 8, 15, 0.85);
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 5vh;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}
.search-modal-overlay.active {
    opacity: 1;
    pointer-events: all;
}

.search-modal-container {
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2rem;
    transform: translateY(-20px);
    transition: transform 0.3s ease;
    overflow-y: auto;
}
.search-modal-overlay.active .search-modal-container {
    transform: translateY(0);
}

.close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s;
}
.close-modal-btn:hover {
    color: var(--text-primary);
}

.modal-search-header {
    margin-bottom: 2rem;
    padding-top: 1rem;
}
.modal-search-input-group {
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    border: 2px solid var(--border-glass);
    border-radius: 12px;
    padding: 0.5rem 1rem;
    transition: border-color 0.3s;
}
.modal-search-input-group:focus-within {
    border-color: var(--accent-purple);
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
}
.modal-search-input-group i {
    color: var(--text-muted);
    font-size: 1.2rem;
    margin-right: 0.8rem;
}
.modal-search-input-group input {
    flex: 1;
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 1.2rem;
    padding: 0.8rem 0;
    outline: none;
}
.modal-search-input-group input::placeholder {
    color: var(--text-muted);
}
.modal-search-input-group button {
    background: linear-gradient(135deg, var(--accent-purple), var(--accent-cyan));
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    transition: opacity 0.2s;
}
.modal-search-input-group button:hover {
    opacity: 0.9;
}

.modal-stock-lists {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}
.stock-list-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.list-column-title {
    color: var(--text-primary);
    font-size: 1.1rem;
    border-bottom: 1px solid var(--border-glass);
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
.list-column-title i {
    color: var(--accent-cyan);
}
.stock-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
}
.modal-stock-btn {
    background: rgba(10, 15, 25, 0.4);
    border: 1px solid var(--border-glass);
    border-radius: 8px;
    padding: 0.8rem 1rem;
    color: var(--text-secondary);
    text-align: left;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-stock-btn:hover {
    background: rgba(139, 92, 246, 0.15);
    border-color: var(--accent-purple);
    color: var(--text-primary);
    transform: translateX(3px);
}
.modal-stock-btn.active {
    background: var(--accent-purple);
    color: white;
    border-color: var(--accent-purple);
}

@media (max-width: 768px) {
    .modal-stock-lists {
        grid-template-columns: 1fr;
    }
}

/* Excel Mode Overrides */
body.excel-mode .search-trigger-btn {
    background: #ffffff !important;
    border: 1px solid #c2c2c2 !important;
    color: #111111 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
}
body.excel-mode .search-trigger-btn:hover {
    background: #e1dfdd !important;
    transform: none !important;
}
body.excel-mode .search-modal-overlay {
    background: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: none !important;
}
body.excel-mode .search-modal-container {
    background: #ffffff !important;
    border: 1px solid #c2c2c2 !important;
    border-radius: 0 !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1) !important;
}
body.excel-mode .modal-search-input-group {
    background: #ffffff !important;
    border: 2px solid #217346 !important;
    border-radius: 0 !important;
}
body.excel-mode .modal-search-input-group input {
    color: #111111 !important;
}
body.excel-mode .modal-search-input-group button {
    background: #217346 !important;
    border-radius: 0 !important;
}
body.excel-mode .list-column-title {
    color: #217346 !important;
    border-bottom: 2px solid #217346 !important;
}
body.excel-mode .modal-stock-btn {
    background: #ffffff !important;
    border: 1px solid #c2c2c2 !important;
    color: #111111 !important;
    border-radius: 0 !important;
}
body.excel-mode .modal-stock-btn:hover {
    background: #c6efce !important;
    color: #006100 !important;
    border-color: #217346 !important;
}
body.excel-mode .close-modal-btn {
    color: #333333 !important;
}
`;

css += newCss;
fs.writeFileSync('styles.css', css, 'utf8');
console.log('styles.css updated');
