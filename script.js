// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select the container that holds both columns
    // Using body delegator ensures it works even if content is dynamically loaded
    const container = document.body;

    // Add a click event listener (Event Delegation)
    container.addEventListener('click', function(e) {
        
        // Check if the clicked element is a segment or within a segment
        const clickedSegment = e.target.closest('.segment');
        
        if (clickedSegment) {
            // 1. Get the ID of the clicked segment
            const segmentId = clickedSegment.getAttribute('data-id');

            // 2. Remove existing highlights from ALL segments
            document.querySelectorAll('.segment').forEach(el => {
                el.classList.remove('active-highlight');
            });

            // 3. Find all segments with this ID (in both columns) and highlight them
            if (segmentId) {
                const targets = document.querySelectorAll(`.segment[data-id="${segmentId}"]`);
                targets.forEach(el => {
                    el.classList.add('active-highlight');
                });
            }
        }
    });
});
