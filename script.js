/**
 * POLLYGRID
 * Handles grid initialization and drag-and-drop functionality
 * Requires Muuri library and Web Animations API
 * 
 * Feel free to remove this!
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Muuri grid with configuration
    const grid = new Muuri('.grid', {
        // Enable drag functionality
        dragEnabled: true,
        // Set drag handle to header area
        dragHandle: '.grid-item-header',
        
        // Layout configuration
        layout: {
            fillGaps: false,          // Don't auto-fill gaps
            horizontal: false,         // Vertical layout
            alignRight: false,         // Left alignment
            alignBottom: false,        // Top alignment
            rounding: true,           // Round positions to pixels
            respectDimensions: true,   // Maintain item dimensions
            alignItems: { x: 'left', y: 'top' }  // Item alignment
        },

        // Drag start settings
        dragStartPredicate: {
            distance: 0,  // Start immediately
            delay: 0,     // No delay
            handle: true  // Only drag from handle
        },

        // Animation settings
        layoutDuration: 400,     // Layout animation duration
        layoutEasing: 'ease',    // Layout animation easing

        // Drag release animation
        dragRelease: {
            duration: 400,           // Release animation duration
            easing: 'ease',          // Release animation easing
            useDragContainer: true   // Use drag container
        },

        // Drag sorting settings
        dragSort: true,           // Enable drag sorting
        dragSortInterval: 50,     // Sort interval during drag
        dragSortPredicate: {
            threshold: 30,        // Distance before sort
            action: 'move'        // Sort action type
        }
    });

    // Update cursor style during drag operations
    grid.on('dragStart', function(item) {
        item.getElement().querySelector('.grid-item-header').style.cursor = 'grabbing';
    });

    grid.on('dragEnd', function(item) {
        item.getElement().querySelector('.grid-item-header').style.cursor = 'grab';
    });

    // Handle window resize with debouncing
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            grid.refreshItems().layout();
        }, 100);
    });
});