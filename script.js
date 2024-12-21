// Video controls logic
const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const skipForward = document.getElementById('skipForward');
const skipBackward = document.getElementById('skipBackward');
const volumeControl = document.getElementById('volumeControl');

// Toggle play/pause
function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = '❚❚'; // Change button text to pause symbol
  } else {
    video.pause();
    playPauseBtn.innerHTML = '▶'; // Change button text to play symbol
  }
}

// Skip forward by 10 seconds
function skipForward() {
  video.currentTime += 10;
}

// Skip backward by 10 seconds
function skipBackward() {
  video.currentTime -= 10;
}

// Set volume
function setVolume() {
  video.volume = volumeControl.value;
}

// Toggle fullscreen
function toggleFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { // Firefox
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { // Chrome, Safari
    video.webkitRequestFullscreen();
  }
}