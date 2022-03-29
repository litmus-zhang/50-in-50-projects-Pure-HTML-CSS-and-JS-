const jokeBtn = document.getElementById('jokeBtn')
const joke = document.querySelector('.joke')

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    
    fetch('http://icanhazdadjoke.com', config)
        .then(res => res.json()).then(data=> console.log(data))
}