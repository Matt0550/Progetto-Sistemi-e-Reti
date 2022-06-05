// Function to close the "Screen Size Warning" modal
function closeModal() {
    $("#modal").fadeOut();
    $("#container").removeClass("blur");
}

// Function to open the "Screen Size Warning" modal
function modal(screenWidth) {
    if (screenWidth <= 991) {
        // Open bootstrap modal
        $("#modal").fadeIn();
        // Apply blur effect to the background
        $("#container").addClass("blur");
    } else {
        // Close bootstrap modal
        $("#modal").fadeOut();
        $("#container").removeClass("blur");
    }
}

// On screen resize, get the width of the window
window.addEventListener('resize', () => {
    var width = window.innerWidth;
    modal(width); // Call the modal function to check if the modal should be opened or closed
});

// On page load, get the width of the window
var width = window.innerWidth;
modal(width);