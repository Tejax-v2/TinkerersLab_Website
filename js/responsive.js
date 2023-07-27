window.addEventListener('DOMContentLoaded', () => {
    const responsiveParagraph = document.getElementById('info');
    
    function updateParagraphContent() {
        const screenWidth = window.innerWidth;

        // Check the screen width and update the content accordingly
        if (screenWidth < 1200 ) {
            responsiveParagraph.textContent = `Welcome to Tinkerers' Lab! We foster a creative and collaborative environment where ideas thrive, and innovation flourishes. Our state-of-the-art tools empower people of all ages to explore and bring imaginative concepts to life. With hands-on workshops, vibrant community, and classes, we ignite curiosity, nurture a love for tinkering, and inspire the inventors. Join us on an exciting journey of discovery and creation!`;
        } 
        // else if (screenWidth < 992 && screenWidth >= 768) {
        else{
            responsiveParagraph.textContent = `Welcome to Tinkerers' Lab! We are a dedicated space for all the passionate tinkerers out there. Our lab is designed to provide a creative and collaborative environment where ideas thrive and innovation flourishes. Equipped with state-of-the-art tools and resources, we empower individuals of all ages to explore, experiment, and bring their imaginative concepts to life. Through hands-on workshops, classes, and a vibrant community, we aim to nurture a love for tinkering, ignite curiosity, and inspire the next generation of inventors and problem solvers. Join us at Tinkerers' Lab and embark on an exciting journey of discovery and creation.`;
        }
    }

    // Call the function on page load and whenever the window is resized
    updateParagraphContent();
    window.addEventListener('resize', updateParagraphContent);
});
