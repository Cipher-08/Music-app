const image = document.querySelector('img')
const music = document.querySelector('.music')
const play = document.getElementById('play')
const artist = document.getElementById('artist')
const title = document.getElementById('title')
const prev = document.getElementById('prev')
const next = document.getElementById('next')


const songs = [{
    name: "Freeverse",
    title: "Freeverse Feast",
    artist: "Emiway Bantai"

}, {
    name: "Rap",
    title: "Rap-God",
    artist: "Eminem",
}, {
    name: "Nas-Is-Like",
    title: "Nas Is Like",
    artist: "Nas",
}, {
    name: "Eminem",
    title: "Lose yourself",
    artist: "Eminem",
}, ]






let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    music.play()
    play.classList.replace('fa-play', 'fa-pause')
    image.classList.add('anime')
}
const pauseMusic = () => {
    isPlaying = false;
    music.pause()
    play.classList.replace('fa-pause', 'fa-play')
    image.classList.remove('anime')

}

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic()
    } else {
        playMusic()
    }
})


//changing the music data

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `${songs.name}.mp3`
    image.src = `${songs.name}.jpg`

}


let songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic()

}
const prevSong = () => {
    songIndex = (songIndex - 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic()


}

next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)
