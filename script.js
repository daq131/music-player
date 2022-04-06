const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// music
const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "Jacinto design",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Nation Army",
    artist: "Jacinto design",
  },
  {
    name: "jacinto-3",
    displayName: "Goodnight disco Queen",
    artist: "Jacinto design",
  },
  {
    name: "jacinto-4",
    displayName: "Front row",
    artist: "Jacinto design",
  },
];

// check if playing
let isPlaying = false;

// play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

//play or pause event listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

//Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// current song
let songIndex = 0;

// prev song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// on load - select first song
loadSong(songs[songIndex]);

// event listener
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
