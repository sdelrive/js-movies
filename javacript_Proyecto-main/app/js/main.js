
// let peliculas = [];
let peliculas = [
{ id: 1, nombre: "Batman", genero: "Superheroes", director: "Nolan", año: "2005", estrellas: "", img:("https://pics.filmaffinity.com/El_caballero_oscuro-102763119-large.jpg")},

{ id: 2, nombre: "Intelestelar", genero: "Ciencia Ficcion", director: "Nolan", año: "2011", estrellas: "", img:("https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg")},
{ id: 3, nombre: "Joker", genero: "Suspenso", director: "Todd Phillips", año: "2019", estrellas: "", img:("https://pics.filmaffinity.com/Joker-790658206-large.jpg")},
{ id: 4, nombre: "The Green Knight", genero: "Fantasía", director: "David Lowery", año: "2021", estrellas: "", img:("https://upload.wikimedia.org/wikipedia/en/0/09/The_Green_Knight_poster.jpeg")},
{ id: 5, nombre: "The Shinning", genero: "Suspenso", director: "Kubrick", año: "1980", estrellas: " ", img:("https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-shining-1980/large_zc5y5OwKSV9MDXpfWxwrOjyRHsq.jpg")},
{ id: 6, nombre: "Parasite", genero: "Suspenso", director: "Joon-ho", año: "2019", estrellas: "", img:("https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg")},

{ id: 7, nombre: "Dune", genero: "Ciencia Ficción", director: "Villeneuve", año: "2021", estrellas: "", img:("https://pics.filmaffinity.com/Dune-209834814-large.jpg")},

{id: 8, nombre: "Tolkien", genero: "Ciencia Ficción", director: "Karukoski", año: "2019", estrellas: "", img:("https://pics.filmaffinity.com/Tolkien-240611295-large.jpg")},

{id: 9, nombre: "Star Wars: Episodio IV", genero: "Ciencia Ficción", director: "George Lucas", año: "1977", estrellas: "", img:("https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg")},

{id: 10, nombre: "Star Wars: Episodio V", genero: "Ciencia Ficción", director: "George Lucas", año: "1980", estrellas: "", img:("https://es.web.img3.acsta.net/pictures/bzp/01/25802.jpg")},

{id: 11, nombre: "Star Wars: Episodio VI", genero: "Ciencia Ficción", director: "George Lucas", año: "1983", estrellas: "", img:("https://es.web.img3.acsta.net/medias/nmedia/18/78/91/11/20136910.jpg")},

{id: 12, nombre: "Jojo Rabbit", genero: "Comedia", director: "Taika Waititi", año: "2019", estrellas: "", img:("https://pics.filmaffinity.com/Jojo_Rabbit-509852787-large.jpg")},

{id: 12, nombre: "El Conjuro", genero: "Terror", director: "James Wan", año: "2013", estrellas: "", img:("https://mx.web.img3.acsta.net/pictures/19/03/20/19/26/1988298.jpg")},

{id: 13, nombre: "El Conjuro 2", genero: "Terror", director: "James Wan", año: "2016", estrellas: "", img:("https://mx.web.img3.acsta.net/pictures/17/08/07/07/27/346398.jpg")},

{id: 14, nombre: "El Conjuro 3", genero: "Terror", director: "James Wan", año: "2021", estrellas: "", img:("https://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/30222.jpg")},

{id: 15, nombre: "Viernes 13", genero: "Terror", director: "Cunningham", año: "1980", estrellas: "", img:("https://pics.filmaffinity.com/Viernes_13-910183131-large.jpg")},



];


let misPeliculas = [


            // esto lo dejo como prueba para no andar ingresando peliculas
            // { id: 2, nombre: "Intelestelar", genero: "Ciencia Ficcion", director: "Nolan", año: "2011", estrellas: "", img:("https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg")},
            // { id: 3, nombre: "Joker", genero: "Suspenso", director: "Todd Phillips", año: "2019", estrellas: "", img:("https://pics.filmaffinity.com/Joker-790658206-large.jpg")},
            // { id: 4, nombre: "The Green Knight", genero: "Fantasía", director: "David Lowery", año: "2021", estrellas: "", img:("https://upload.wikimedia.org/wikipedia/en/0/09/The_Green_Knight_poster.jpeg")},
    
    ];


// Aquí guardaré las películas en mi lista
let catalogoPeliculas = new CatalogoPeliculas(peliculas);
let catalogoMisPeliculas = new CatalogoPeliculas(misPeliculas);

// menu();

function menu(){

    let opcion = " ";
    opcion = prompt(`Ingrese el número de opción deseada: 
        1. Ver películas disponibles
        2. Buscar películas
        3. Añadir pelicula a Mis Peliculas
        4. Ver Mis Peliculas
        5. Eliminar de Mis Películas
        `);

    switch (opcion){
        case "1": listarPeliculas();
        break;
        case "2": buscarPeliculas();
        break;
        case "3": añadirMisPeliculas();
        break;
        case "4": listarMisPeliculas();
        break;
        case "5": modificarMisPeliculas();
        break;

        default: alert("Dígito incorrecto");
        break;
        menu();
        }


}


    // catalogo de peliculas
function listarPeliculas(){

    catalogoPeliculas.listarMisPeliculas();
    menu();

}

function buscarPeliculas(){
    let name = prompt("Ingrese la pelicula que desea buscar.")
    catalogoPeliculas.buscarMisPeliculas(name);

}


    //catalogo de MIS peliculas


function añadirMisPeliculas(){

    // let nombre = prompt("Ingrese nombre de película.")
    // let genero = prompt("Ingrese genero de película.")
    // let director = prompt("Ingrese director de película.")
    // let año = prompt("Ingrese año de película.")
    // let estrellas = prompt("Ingrese su calificación.")


    miPelicula = new Pelicula(catalogoMisPeliculas.cuantasHay()+1, nombre, genero, director, año, estrellas );

    catalogoMisPeliculas.agregarMisPeliculas(miPelicula);
    alert("Su pelicula ha sido agregada con éxito.")
    menu();
}


function listarMisPeliculas(){
    catalogoMisPeliculas.listarMisPeliculas();
    menu();
}




function modificarMisPeliculas(){
   let name = prompt("Ingrese el nombre completo de la película a eliminar");

   catalogoMisPeliculas.modificarMisPeliculas(name);
   
menu();

}