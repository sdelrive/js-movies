const API_KEY = 'api_key=c240615e3f07215587640c5cb306a0a0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const layout = document.querySelector(".layout-store");
const films = document.querySelector(".stylesFilm");
const miListado = document.getElementById("miListado");
const lista = document.getElementById("listado");
const btns = document.getElementsByClassName("button");
const main = document.getElementById("main");


// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

let peliculas = []
let misPelis = []


getMovies(API_URL);

function getMovies(url){

    fetch(url)
    .then( (res) => res.json())
    .then(data => {
    showMovies(data.results);

    miListado.addEventListener('click',()=>{
        pegarMiLista(misPelis);   //Le pego un array de objetos
    });

    lista.addEventListener('click',()=>{
        showMovies(data.results);
        chequearAgregado(data.results);
    });

     });
}


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
        <button id="btn${id}" class="button btn${id}" >Mi lista</button>
        `

        main.appendChild(movieEl);
        

    });
    data.forEach( peli => {
        let string = `btn${peli.id}`;
        botonListener(string,peli);
    })
 
}

function botonListener(string,element){
    let btn = document.getElementById(string);
    btn.addEventListener('click', () =>{
        console.log("hola", element.title)
            misPelis.push(element);
            agregarDisabled(btn);
            // borrarDuplicados(); 

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'La película ha sido agregada.',
                showConfirmButton: false,
                timer: 1500
              })
        });       
}



function pegarMiLista(catalogo){
    layout.innerHTML = " ";     //Primero borro todo lo que haya

    for(const pelicula of catalogo){
        const {title, poster_path, vote_average, overview,release_date,id} = pelicula;

        layout.innerHTML += `<div class="stylesFilm art flex flex-ai-c flex-jc-c" > 
        <div id="rmvFilm${id}"  class="removeFilm"><button><i class="gg-remove"></i></button></div>
                            <div class = "nombre eachStylesFilm" >
                                <h2>${title}</h2>
                            </div>
                            <div class="eachStylesFilm">
                                <img class="art_img" src=${IMG_URL+poster_path}>
                            </div>
                            <div class="eachStylesFilm">
                                <p><b>Año:</b> ${release_date}</p>
                            </div>
                        
                            </div>`;
            
    }
 
    catalogo.forEach( peli => {
        let string = `rmvFilm${peli.id}`;
        eventEliminarMiLista(string,peli);
    })
   

}

function eventEliminarMiLista(string,element){
    let btn = document.getElementById(string);
    btn.addEventListener('click', () =>{
        // console.log(element)
         misPelis = misPelis.filter(peli => 
            peli.id != element.id)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La película ha sido eliminada de tu lista.',
            showConfirmButton: false,
            timer: 1500
          })
          pegarMiLista(misPelis);   //Le pego un array de objetos

    })

}

            //Agregar el disabled a las pelis que ya estan en mi lista
function chequearAgregado(data){
    data.forEach((peli) =>{
        if(misPelis.filter(pelicu => pelicu.id === peli.id).length === 1){
                let bott = document.getElementById(`btn${peli.id}`);
                agregarDisabled(bott);
            }
    })
}

function agregarDisabled(boton){
    boton.classList.add("button-disabled");
    boton.setAttribute("disabled", "true");
    boton.innerText="Agregado";
}