const tracks = [
    { title: "Эмигрант эмигранту", artist: "Каста", src: "audio-player/tracks/01.mp3", photo: 'audio-player/photos/1.jpg' },
    { title: "Кровопровод «Дружба»", artist: "Каста", src: "audio-player/tracks/02.mp3", photo: 'audio-player/photos/2.jpg' },
    { title: "Священный мясокомбинат", artist: "Каста", src: "audio-player/tracks/03.mp3", photo: 'audio-player/photos/3.jpg' },
    { title: "Ссылочка ВКонтакте", artist: "Каста", src: "audio-player/tracks/04.mp3", photo: 'audio-player/photos/4.jpg' },
    { title: "ОбманУтый", artist: "Каста", src: "audio-player/tracks/05.mp3", photo: 'audio-player/photos/5.jpg' },
    { title: "Космос и Говно", artist: "Каста", src: "audio-player/tracks/06.mp3", photo: 'audio-player/photos/6.jpg' },
    { title: "Созвон", artist: "Каста", src: "audio-player/tracks/07.mp3", photo: 'audio-player/photos/7.jpg' },
    { title: "Пионерская правда", artist: "Каста", src: "audio-player/tracks/08.mp3", photo: 'audio-player/photos/8.jpg' },
    { title: "Степень ватности", artist: "Каста", src: "audio-player/tracks/09.mp3", photo: 'audio-player/photos/9.jpg' },
    { title: "Зима снится", artist: "Каста", src: "audio-player/tracks/10.mp3", photo: 'audio-player/photos/10.jpg' },
    { title: "Владимирская Русь", artist: "Каста", src: "audio-player/tracks/11.mp3", photo: 'audio-player/photos/11.jpg'},
    { title: "Багаж", artist: "Каста", src: "audio-player/tracks/12.mp3", photo: 'audio-player/photos/12.jpg' },
    { title: "Этого больше не будет", artist: "Каста", src: "audio-player/tracks/13.mp3", photo: 'audio-player/photos/13.jpg' },
    { title: "По-разному", artist: "Каста", src: "audio-player/tracks/14.mp3", photo: 'audio-player/photos/14.jpg' },
    { title: "Сказка «Чёрная краска»", artist: "Каста", src: "audio-player/tracks/15.mp3", photo: 'audio-player/photos/15.jpg' }
];

const playButton = document.getElementById('play');
const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.querySelector('.track-title');
const trackArtist = document.querySelector('.track-artist');
const trackPhoto = document.querySelector('.player-image img');
const nextButton = document.getElementById('skip-next');
const previousButton = document.getElementById('skip-previous');

let currentTrackIndex = 0

function startTrack(index) {
    currentTrackIndex = (index + tracks.length) % tracks.length;
    const track = tracks[currentTrackIndex];
    audioPlayer.src = track.src;
    audioPlayer.load();
    audioPlayer.play();
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    trackPhoto.src = track.photo;
    updatePlayButton()
}

function updatePlayButton() {
    playButton.textContent = audioPlayer.paused ? 'play_circle' : 'pause_circle';
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    updatePlayButton()
}

function playNextTrack () {
    startTrack(currentTrackIndex + 1)
}

function playPreviousTrack() {
    startTrack(currentTrackIndex - 1)
}

nextButton.addEventListener('click', playNextTrack);
previousButton.addEventListener('click', playPreviousTrack);

playButton.addEventListener('click', () => {
    if (audioPlayer.src) {
        togglePlayPause();
    } else {
        startTrack(currentTrackIndex)
    }
})

audioPlayer.addEventListener('play', updatePlayButton)
audioPlayer.addEventListener('pause', updatePlayButton)
audioPlayer.addEventListener('ended', playNextTrack);
