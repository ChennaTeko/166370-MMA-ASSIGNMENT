const audio = document.getElementById("audio")
const time = document.getElementById("time")
const progressBar = document.getElementById("progressBar")
const volDisplay = document.getElementById("volDisplay")
const loopBtn = document.getElementById("loopBtn")

// PLAY / PAUSE 
const playBtn = document.querySelector(".controls-top button:nth-child(1)")
const pauseBtn = document.querySelector(".controls-top button:nth-child(2)")

function playAudio(){
audio.play()
playBtn.classList.add("active")
pauseBtn.classList.remove("active")
}

function pauseAudio(){
audio.pause()
pauseBtn.classList.add("active")
playBtn.classList.remove("active")
}

// SPEED 
function speed(rate){
audio.playbackRate = rate

const speedBtns = document.querySelectorAll(".speed-buttons button")
speedBtns.forEach(btn => btn.classList.remove("active"))

event.target.classList.add("active")
}

// LOOP 
function toggleLoop(){
audio.loop = !audio.loop
loopBtn.classList.toggle("active")
}

// VOLUME
function setVolume(v){
audio.volume = v / 100
volDisplay.textContent = v + "%"

const muteBtn = document.querySelector(".volume-box button")

if(v == 0){
audio.muted = true
muteBtn.classList.add("active")
}else{
audio.muted = false
muteBtn.classList.remove("active")
}
}

function toggleMute(){
audio.muted = !audio.muted

const muteBtn = document.querySelector(".volume-box button")

if(audio.muted){
muteBtn.classList.add("active")
}else{
muteBtn.classList.remove("active")
}
}

// SEEK
function forward(){
audio.currentTime += 10
}

function back(){
audio.currentTime -= 10
}

// TIME 
audio.addEventListener("timeupdate", () => {
let m = Math.floor(audio.currentTime / 60)
let s = Math.floor(audio.currentTime % 60)
if(s < 10) s = "0" + s

time.textContent = m + ":" + s

let progress = (audio.currentTime / audio.duration) * 100
progressBar.style.width = progress + "%"
})

// KEYBOARD 
document.addEventListener("keydown", (e) => {
if(e.code === "Space"){
if(audio.paused){
playAudio()
}else{
pauseAudio()
}
}
if(e.code === "ArrowRight"){
audio.currentTime += 5
}
if(e.code === "ArrowLeft"){
audio.currentTime -= 5
}
})