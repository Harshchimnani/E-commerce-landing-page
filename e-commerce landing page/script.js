// Simple JavaScript for now
const buttons = document.querySelectorAll('.product button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
// Slider functionality
document.querySelectorAll('.slider').forEach(slider => {
    let currentIndex = 0;
    const images = slider.querySelectorAll('img');
    
    // Show the first image initially
    images[currentIndex].classList.add('active');
    
    setInterval(() => {
        // Remove the active class from the current image
        images[currentIndex].classList.remove('active');
        
        // Update index to the next image (loop back to the first image if necessary)
        currentIndex = (currentIndex + 1) % images.length;
        
        // Add the active class to the new current image
        images[currentIndex].classList.add('active');
    }, 3000); // Change image every 3 seconds
});
