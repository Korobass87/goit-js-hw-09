const btnStart = document.querySelector(".start")
const btnStop = document.querySelector(".stop")
let intervalID = 0

btnStart.addEventListener("click", onStart)
btnStop.addEventListener("click", onStop)

function onStart() {
    btnStart.disabled = true
    btnStop.disabled = false
    intervalID = setInterval(() => { 
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    // body.style.backgroundColor = getRandomHexColor()
    document.body.style.backgroundColor = getRandomHexColor();

}

function onStop() {
    btnStart.disabled = false
    btnStop.disabled = true
    clearInterval(intervalID);

    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}