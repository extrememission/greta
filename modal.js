window.onload = () => {
    // Get the modal element
    const modal = document.getElementById('splash-modal');
    
    // Flag to check if the 3 seconds have passed
    let isThreeSecondsPassed = false;
    
    // Function to hide the modal
    function hideModal() {
        if (isThreeSecondsPassed) {
            modal.style.display = 'none';
        }
    }
    
    // Show the modal initially
    modal.style.display = 'flex';
    
    // Set a timeout to ensure the modal remains visible for at least 3 seconds
    setTimeout(() => {
        isThreeSecondsPassed = true;
    }, 2000); //Changed to 2 seconds

    // Add click event listener to the modal to hide it only after 3 seconds
    modal.addEventListener('click', hideModal);
};
