// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // This sets the image and audio source to match the value of the dropdown menu when it changes. The image and audio files are located in the assets/images and assets/audio directories, respectively, and have the same name as the value of the dropdown menu (e.g., "air-horn.svg" and "air-horn.mp3").
  let selectElement = document.getElementById("horn-select");
  let image = document.querySelector("img");
  let audio = document.querySelector("audio");
  selectElement.addEventListener("change", (event) => {
    image.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
  });

  // This displays the audio volume
  let audioBar = document.getElementById("volume");
  audioBar.addEventListener("input", (event) => {
    audio.volume = event.target.value / 100;
    let volumeIcon = document.querySelector("#volume-controls img");
    if (audio.volume === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (audio.volume < 0.33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (audio.volume < 0.67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  //This plays the audio when the button is clicked
  let playButton = document.querySelector("button");
  playButton.addEventListener("click", () => {
    audio.play();
    if(selectElement.value === "party-horn") {
      let jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

}

