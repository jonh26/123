// Get the button and the hidden content
const discoverButton = document.getElementById('discoverButton');
const moreInfo = document.getElementById('moreInfo');

// Toggle visibility when the button is clicked
discoverButton.addEventListener('click', () => {
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block'; // Show the content
        discoverButton.textContent = 'Show Less'; // Change button text
    } else {
        moreInfo.style.display = 'none'; // Hide the content
        discoverButton.textContent = 'Discover More'; // Change button text back
    }
});
