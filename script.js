// Get DOM elements
const requestBtn = document.getElementById('requestBtn');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');
const popupButton = document.getElementById('popupButton');
const loadingState = document.getElementById('loadingState');

// Event listeners
requestBtn.addEventListener('click', handleRequestClick);
popupClose.addEventListener('click', closePopup);
popupButton.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopupOnOverlay);

// Handle request button click
function handleRequestClick() {
    // Hide button and show loading state
    requestBtn.style.display = 'none';
    loadingState.classList.add('show');
    requestBtn.disabled = true;
    
    // Simulate sending email with a 2-3 second delay
    const delay = Math.random() * 1000 + 2000; // 2-3 seconds
    
    setTimeout(() => {
        loadingState.classList.remove('show');
        showPopup();
    }, delay);
    
    // You can add your backend call here:
    // fetch('/api/request-meeting-review', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         email: 'user@example.com',
    //         timestamp: new Date()
    //     })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     loadingState.classList.remove('show');
    //     showPopup();
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     loadingState.classList.remove('show');
    //     requestBtn.style.display = 'inline-flex';
    // });
}

// Show popup function
function showPopup() {
    popupOverlay.classList.add('show');
}

// Close popup function
function closePopup() {
    popupOverlay.classList.remove('show');
    // Reset button for another request
    requestBtn.style.display = 'inline-flex';
    requestBtn.disabled = false;
}

// Close popup when clicking on overlay (outside the card)
function closePopupOnOverlay(e) {
    if (e.target === popupOverlay) {
        closePopup();
    }
}

// Optional: Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupOverlay.classList.contains('show')) {
        closePopup();
    }
});
