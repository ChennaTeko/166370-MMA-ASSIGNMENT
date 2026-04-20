const audio = document.getElementById("audio")
const time = document.getElementById("time")
const progressBar = document.getElementById("progressBar")
const volDisplay = document.getElementById("volDisplay")
const loopBtn = document.getElementById("loopBtn")

function playAudio(){
audio.play()
}

function pauseAudio(){
audio.pause()
}

function setVolume(v){
audio.volume = v / 100
volDisplay.textContent = v + "%"
}

function toggleMute(){
audio.muted = !audio.muted
}

function forward(){
audio.currentTime += 10
}

function back(){
audio.currentTime -= 10
}

function toggleLoop(){
audio.loop = !audio.loop
loopBtn.classList.toggle("active")
}

function speed(rate){
audio.playbackRate = rate
}

audio.addEventListener("timeupdate", () => {
let m = Math.floor(audio.currentTime / 60)
let s = Math.floor(audio.currentTime % 60)
if(s < 10) s = "0" + s

time.textContent = m + ":" + s

let progress = (audio.currentTime / audio.duration) * 100
progressBar.style.width = progress + "%"
})

document.addEventListener("keydown", (e) => {
if(e.code === "Space"){
audio.paused ? audio.play() : audio.pause()
}
if(e.code === "ArrowRight"){
audio.currentTime += 5
}
if(e.code === "ArrowLeft"){
audio.currentTime -= 5
}
})