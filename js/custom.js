// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$("#own-it-btn").on("click", function() {
    $("#myModal").css("display", "block")
    $("#song-name").html("Own It")
    $("#song-frame").attr("src", "https://www.youtube.com/embed/sSCxoe1iGGc")
})

$("#euphoria-btn").on("click", function() {
    $("#myModal").css("display", "block")
    $("#song-name").html("Euphoria")
    $("#song-frame").attr("src", "https://www.youtube.com/embed/1IGQyoP7ZVs")
})

$("#save-goodbye-btn").on("click", function() {
    $("#myModal").css("display", "block")
    $("#song-name").html("Save Your Goodbye")
    $("#song-frame").attr("src", "https://www.youtube.com/embed/7aulG4pb9AA")
})

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     $("#myModal").css("display", "none")
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == $("#myModal")[0]) {
    $("#myModal").css("display", "none")
  }
}