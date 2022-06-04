function closeModal() {
    $("#modal").fadeOut();
    $("#container").removeClass("blur");
}
function modal(screenWidth) {
    if (screenWidth <= 991) {
        // Open bootstrap modal
        $("#modal").fadeIn();
        //console.log("The screen is less than 991px");
        // Apply blur effect to the background
        $("#container").addClass("blur");
    } else {
        // Close bootstrap modal
        $("#modal").fadeOut();
        //console.log("The screen is greater than 991px");
        $("#container").removeClass("blur");
    }
}
// On screen resizem, get the width of the window
window.addEventListener('resize', () => {
    var width = window.innerWidth;
    modal(width);
});
// Get the width of the window
var width = window.innerWidth;
modal(width);