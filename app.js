const timer = document.querySelector(".time h1");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let startTime;
let passedTime = 0;
let timerInterval;

function formatTime(time) {
  const ms = String(time % 1000).padStart(2, "0");
  const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
  const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2, "0");
  const hours = String(Math.floor(time / (1000 * 60 * 60))).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}.${ms}`;
}
startBtn.addEventListener("click",()=>{
    startTime = Date.now() - passedTime;
    timerInterval = setInterval(()=>{
        passedTime = Date.now() - startTime;
        timer.textContent = formatTime(passedTime);
     },10);
     let audio = new Audio("Start.mp3");
     audio.play();
    toggleButtons(true, false);
});
stopBtn.addEventListener("click", ()=>{
    clearInterval(timerInterval);
    let audio = new Audio("Stop.mp3");
     audio.play();
    toggleButtons(false, true);
});
resetBtn.addEventListener("click",()=>{
    clearInterval(timerInterval);
    passedTime = 0;
    timer.textContent = "00:00:00.00";
    let audio = new Audio("Reset.mp3");
     audio.play();
    toggleButtons(false, true);
});
function toggleButtons(start, stop) {
    startBtn.disabled = start;
    stopBtn.disabled = stop;
  }
  
