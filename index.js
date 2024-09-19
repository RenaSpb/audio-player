const tracks = [
    { title: "Эмигрант эмигранту", artist: "Каста", src: "audio-player/tracks/01.mp3" },
    { title: "Кровопровод «Дружба»", artist: "Каста", src: "audio-player/tracks/02.mp3" },
    { title: "Священный мясокомбинат", artist: "Каста", src: "audio-player/tracks/03.mp3" },
    { title: "Ссылочка ВКонтакте", artist: "Каста", src: "audio-player/tracks/04.mp3" },
    { title: "ОбманУтый", artist: "Каста", src: "audio-player/tracks/05.mp3" },
    { title: "Космос и Говно", artist: "Каста", src: "audio-player/tracks/06.mp3" },
    { title: "Созвон", artist: "Каста", src: "audio-player/tracks/07.mp3" },
    { title: "Пионерская правда", artist: "Каста", src: "audio-player/tracks/08.mp3" },
    { title: "Степень ватности", artist: "Каста", src: "audio-player/tracks/09.mp3" },
    { title: "Зима снится", artist: "Каста", src: "audio-player/tracks/10.mp3" },
    { title: "Владимирская Русь", artist: "Каста", src: "audio-player/tracks/11.mp3" },
    { title: "Багаж", artist: "Каста", src: "audio-player/tracks/12.mp3" },
    { title: "Этого больше не будет", artist: "Каста", src: "audio-player/tracks/13.mp3" },
    { title: "По-разному", artist: "Каста", src: "audio-player/tracks/14.mp3" },
    { title: "Сказка «Чёрная краска»", artist: "Каста", src: "audio-player/tracks/15.mp3" }
];

const playButton = document.getElementById('play')
const audioPlayer = document.getElementById('audio-player')

let currentTrackIndex = 0

function startTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.src;
    audioPlayer.load();
    audioPlayer.play();
    updatePlayButton();
}

function updatePlayButton() {
    playButton.textContent = audioPlayer.paused ? 'play_circle' : 'pause_circle';
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause()
    }
    updatePlayButton();
}

playButton.addEventListener('click', ()=> {
    if (audioPlayer.src) {
        togglePlayPause();
    } else startTrack(currentTrackIndex)
})

playButton.addEventListener('play', updatePlayButton)
playButton.addEventListener('pause', updatePlayButton)
