const API_KEY = 'api_key=c240615e3f07215587640c5cb306a0a0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

let peliculas = []
let misPelis = []
const main = document.getElementById("main");


getMovies(API_URL);
// fetch(API_URL)
// .then( (res) => res.json())
// .then(data => {
//     showMovies(data.results)
//     peliculas = data.results
//     // showMovies(peliculas)

// })


function getMovies(url){

    fetch(url)
    .then( (res) => res.json())
    .then(data => {
    peliculas = data.results
    pegarMiLista(peliculas)
    // showMovies(peliculas)
        // showMovies(peliculas)

    })
   
    
}

// console.log(peliculas[0])


function showMovies(data){
    main.innerHTML ='';

    data.forEach(movie => {
        // peliculas.push(movie)
        const {title, poster_path, vote_average, overview,release_date,id} = movie;
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
        </div>
        <button id="btn${title}" class="button btn${id}" >Mi lista</button>
        `

        // console.log(movie)

        for(let i=1;i<data.length;i++){
            let element = peliculas[i-1];
            let string = `btn${i}`;
            botonListener(string,element);
        };

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


