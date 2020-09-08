// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$("#own-it-btn").on("click", function() {
    $("#myModal").css("display", "block")
    $("#song-name").html("Own It")
    $("#song-frame").attr("src", "https://www.youtube.com/embed/sSCxoe1iGGc?&autoplay=1")
})

$("#euphoria-btn").on("click", function() {
    $("#myModal").css("display", "block")
    $("#song-name").html("Euphoria")
    $("#song-frame").attr("src", "https://www.youtube.com/embed/1IGQyoP7ZVs?&autoplay=1")
})

$("#save-goodbye-btn").on("click", function() {
    $("#myModal").css("display", "block")
    $("#song-name").html("Save Your Goodbye")
    $("#song-frame").attr("src", "https://www.youtube.com/embed/7aulG4pb9AA?&autoplay=1")
})

$("#burn-btn").on("click", function() {
    $("#myModal").css("display", "block")
    $("#song-name").html("Burn")
    $("#song-frame").attr("src", "https://www.youtube.com/embed/lnfqchbuS2A?&autoplay=1")
})

$("#hola-btn").on("click", function() {
    $("#myModal").css("display", "block")
    $("#song-name").html("Hola Hola")
    $("#song-frame").attr("src", "https://www.youtube.com/embed/M8Eu_bVooBg?&autoplay=1")
})

$("#youth-btn").on("click", function() {
    $("#myModal").css("display", "block")
    $("#song-name").html("Youth")
    $("#song-frame").attr("src", "https://www.youtube.com/embed/UVp-LQvSi7E?&autoplay=1")
})

// Products
$("#steezy-product").on("click", function() {
    $("#productModal").css("display", "block") 
    $("#product-name").html("Steezy Studio")
    $("#product-description").html("Steezy Studio is an online dance platform that offers a variety of classes in different styles and difficulties. <a href=\"https://www.steezy.co/\" target=\"_blank\">More</a>")
})

$("#cricut-product").on("click", function() {
    $("#productModal").css("display", "block") 
    $("#product-name").html("Cricut Explore Air")
    $("#product-description").html("The cricut explore air is a craft machine that cuts or draws digital designs. This is what I use to make my custom apparel! <a href=\"https://cricut.com/en_us/machines/cricut-explore-air-2.html\" target=\"_blank\">More</a>")
})

$("#rocketbook-product").on("click", function() {
    $("#productModal").css("display", "block") 
    $("#product-name").html("Rocketbook")
    $("#product-description").html("The Rocketbook is a reusable notebook that allows for notes to be scanned and uploaded to various cloud file systems via a simple smartphone camera. <a href=\"https://getrocketbook.com/\" target=\"_blank\">More</a>")
})

$("#tiktok-product").on("click", function() {
    $("#productModal").css("display", "block") 
    $("#product-name").html("Tik-Tok")
    $("#product-description").html("Tik-Tok is a very popular content creation and social media platform that excels in bringing its users customized desireable content. <a href=\"https://www.tiktok.com/\" target=\"_blank\">More</a>")
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == $("#myModal")[0]) {
    $("#myModal").css("display", "none")
  }
  if (event.target == $("#productModal")[0]) {
    $("#productModal").css("display", "none")
  }
}
