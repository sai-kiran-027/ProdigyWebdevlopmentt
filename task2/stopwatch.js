let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let running = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startStop() {
  if (!running) {
    timer = setInterval(stopwatch, 1000);
    running = true;
    event.target.innerText = "Pause";
  } else {
    clearInterval(timer);
    running = false;
    event.target.innerText = "Start";
  }
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  running = false;
  document.querySelector(".buttons button").innerText = "Start";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (running) {
    const lapTime = display.innerText;
    const lapItem = document.createElement("li");
    lapItem.innerText = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);
  }
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}