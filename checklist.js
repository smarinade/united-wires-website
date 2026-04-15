/**
 * Interactive Checklist with localStorage persistence
 */

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const progressCount = document.getElementById('progress-count');
    const progressTotal = document.getElementById('progress-total');
    const progressFill = document.getElementById('progress-fill');
    const resetBtn = document.getElementById('reset-btn');
    const completeSection = document.getElementById('checklist-complete');

    const STORAGE_KEY = 'united-wires-checklist';

    // Load saved state
    function loadChecklist() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const state = JSON.parse(saved);
            checkboxes.forEach(checkbox => {
                const itemId = checkbox.dataset.item;
                if (state[itemId]) {
                    checkbox.checked = true;
                }
            });
        }
    }

    // Save state
    function saveChecklist() {
        const state = {};
        checkboxes.forEach(checkbox => {
            state[checkbox.dataset.item] = checkbox.checked;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    // Update progress
    function updateProgress() {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('.checklist-checkbox:checked').length;
        const percentage = (checked / total) * 100;

        progressCount.textContent = checked;
        progressTotal.textContent = total;
        progressFill.style.width = percentage + '%';

        // Show completion message
        if (checked === total) {
            completeSection.style.display = 'block';
            completeSection.style.animation = 'fadeInUp 0.6s ease-out forwards';
        } else {
            completeSection.style.display = 'none';
        }
    }

    // Reset all checkboxes
    function resetChecklist() {
        if (confirm('Are you sure you want to reset all checkboxes?')) {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            localStorage.removeItem(STORAGE_KEY);
            updateProgress();
        }
    }

    // Event listeners
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            saveChecklist();
            updateProgress();

            // Add animation to parent label
            const label = checkbox.closest('.checklist-item');
            if (checkbox.checked) {
                label.style.animation = 'checkBounce 0.4s ease-out';
            } else {
                label.style.animation = 'none';
            }
            setTimeout(() => {
                label.style.animation = '';
            }, 400);
        });
    });

    resetBtn.addEventListener('click', resetChecklist);

    // Add bounce animation CSS
    if (!document.getElementById('check-bounce-animation')) {
        const style = document.createElement('style');
        style.id = 'check-bounce-animation';
        style.textContent = `
            @keyframes checkBounce {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize
    loadChecklist();
    updateProgress();
});
