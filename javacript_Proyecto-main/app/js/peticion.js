const API_KEY = 'api_key=c240615e3f07215587640c5cb306a0a0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

const main = document.getElementById("main");



getMovies(API_URL);






function getMovies(url){

    fetch(url)
    .then( (res) => res.json())
    .then(data => {
        showMovies(data.results);
    })
    
}

function showMovies(data){
    main.innerHTML ='';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview,release_date} = movie;
        const movieEl = document.createElement('div'); 
        movieEl.classList.add("stylesFilm", "art", "flex", "flex-ai-c", "flex-jc-c");
        movieEl.innerHTML = `
        <div class = "nombre eachStylesFilm" >
            <h2>${title}</h2>
        </div>
        <div class="eachStylesFilm">
            <img class="art_img" src=${IMG_URL+poster_path}>
        </div>
        <div class="eachStylesFilm">
             <p><b>Año:</b> ${release_date}</p>
        </div>`

        console.log(movie)

        main.appendChild(movieEl);






        
        
        // movieEl.innerHTML = `
        //     <img src="${IMG_URL + poster_path}" >
        //     <div class="movie-info">
        //         <h3>${title}</h3>
        //         <span class="green"> ${vote_average} </span>
        //     </div>          
            
        //     <div class="overview>
        //         <h3>Overview</h3>
        //             ${overview}
        //     </div>

        //     `

    });
 
    // main.appendChild(movieEl); 
}