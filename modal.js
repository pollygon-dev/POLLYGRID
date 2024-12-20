/**
 * Modal System
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all modal buttons and modals
    const modalButtons = document.querySelectorAll('.modal-button');
    const modals = document.querySelectorAll('.modal-overlay');

    // Debug log
    console.log('Found modal buttons:', modalButtons.length);
    console.log('Found modals:', modals.length);

    // Function to open modal
    function openModal(modalId) {
        console.log('Attempting to open modal:', modalId);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            console.log('Modal opened successfully');
        } else {
            console.error('Modal not found:', modalId);
        }
    }

    // Function to close modal
    function closeModal(modal) {
        console.log('Closing modal');
        modal.classList.remove('active');
    }

    // Add click listeners to all modal buttons
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            console.log('Modal button clicked, modal ID:', modalId);
            openModal(modalId);
        });
    });

    // Add click listeners to all modal close buttons and overlay
    modals.forEach(modal => {
        const closeButton = modal.querySelector('.close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                closeModal(modal);
            });
        }

        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
});