const audio = document.getElementById('audio');
const img = document.getElementById("img")
const start = document.getElementById('start');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const back = document.getElementById('back');
const forward = document.getElementById('forward');
let isplaying = false;
const songs = [
{
    name : "music1",
    title: "hacker",
    artist: "Announymous",
},
{
    name : "music2",
    title: "Sheikh",
    artist: "Star Boy",
},
{
    name : "music3",
    title: "Status",
    artist: "Youtube",
}
]
function playMusic(){
    isplaying = true;
    audio.play();
    img.classList.add("circular")
    start.classList.replace("fa-stop","fa-play")
    
}
function pauseMusic(){
    isplaying = false;
    audio.pause()
    img.classList.remove("circular")
    start.classList.replace("fa-play","fa-stop")
}
start.addEventListener("click",function(){
    if (isplaying) {
        pauseMusic()
    }else{
        playMusic()
    }
})
function Loadsongs(songs) {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    audio.src = "music/"+songs.name+".mp3"
    img.src   = "img/"    +songs.name+".jpg"

}
// Loadsongs(songs[2])
let value = 0
forward.addEventListener("click",function(){
value = (value + 1) % songs.length
    Loadsongs(songs[value])
})

back.addEventListener("click",function(){
    Loadsongs(songs[value])
    audio.play()
})