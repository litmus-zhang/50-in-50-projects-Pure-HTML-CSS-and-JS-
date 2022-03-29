const API_KEY = "6f090d8301625e7fb3be63070b58d428"
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`
const Form = document.querySelector(".form") 
const search = document.getElementById('search')
const main = document.querySelector('main')




getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results);
}

function showMovies(movies) {

    main.innerHTML = ''
    
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie
        
        const movieEl = document.createElement("div")

        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">     
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>${title}</h3>
           ${overview}
        </div>
        
    </div>
        `
        main.append(movieEl)


    })

}

function getClassRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
Form.addEventListener("submit", e => {
    e.preventDefault()

    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value =''
    } else {
        window.location.reload()
    }
})