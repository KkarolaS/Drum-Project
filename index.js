var drums = document.querySelectorAll(".set .drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    this.style.setProperty("color", "white");
  });
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
