const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('[name="volume"]');
const playbackRate = player.querySelector('[name="playbackRate"]');
const skipButtons = player.querySelectorAll('.player__button[data-skip]');
const skipBackButton = player.querySelector('.skip-back');
const skipForwardButton = player.querySelector('.skip-forward');

// Function to toggle play/pause of the video
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Event listener for play/pause button
toggle.addEventListener('click', togglePlay);

// Event listener for updating play/pause button text
video.addEventListener('play', () => {
  toggle.textContent = '❚ ❚';
});
video.addEventListener('pause', () => {
  toggle.textContent = '►';
});

// Event listener for updating progress bar
video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
});

// Function to handle skipping video
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Event listeners for skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));

// Event listeners for skip back and forward buttons
skipBackButton.addEventListener('click', () => {
  video.currentTime -= 10;
});
skipForwardButton.addEventListener('click', () => {
  video.currentTime += 25;
});

// Event listener for volume input
volume.addEventListener('input', () => {
  video.volume = volume.value;
});

// Event listener for playback speed input
playbackRate.addEventListener('input', () => {
  video.playbackRate = playbackRate.value;
});

// Event listener for clicking on the progress bar to seek video
progress.addEventListener('click', e => {
  const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = seekTime;
});

