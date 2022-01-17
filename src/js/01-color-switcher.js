const btnStart = document.querySelector(".start")
const btnStop = document.querySelector(".stop")
const goBack = document.querySelector("a")
console.dir(goBack)
let intervalID = 0

btnStart.addEventListener("click", onStart)
btnStop.addEventListener("click", onStop)

function onStart() {
    btnStart.disabled = true
    btnStop.disabled = false
    intervalID = setInterval(() => { 
        newColor = getRandomHexColor()
        document.body.style.backgroundColor = newColor;
        goBack.style.color = newColor
        goBack.style.filter = "invert(100%)"
    }, 1000)
    
}

function onStop() {
    btnStart.disabled = false
    btnStop.disabled = true
    clearInterval(intervalID);

    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}