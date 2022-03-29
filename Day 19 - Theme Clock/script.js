const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const toggle = document.querySelector('.toggle')
const timeEl = document.querySelector('.time')
const dateEL = document.querySelector('.date')


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const months = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})


function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hoursinPM = time.getHours() % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const am_pm  = time.getHours() > 12 ? 'PM' : 'AM'
    console.log(time, month, day, hoursinPM, minutes)
    

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursinPM, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    
    timeEl.innerHTML = `${hoursinPM} : ${minutes < 10 ? `0${minutes}` : minutes} ${am_pm}`
    dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    

}

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return(num - in_min) * (out_max - out_min)/(in_max - in_min) + out_min
}

setTime()
setInterval(setTime, 1000)