const imageContainer = document.getElementById("imgs")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")


const img = document.querySelectorAll('#imgs img')

let idx = 0

//Image switching interval
let interval = setInterval(run, 4000)

//Incremental Change of image index 
function run () {
    idx++
    changeImage()
}

function changeImage(){
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length -1    
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 4000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()

})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()

})