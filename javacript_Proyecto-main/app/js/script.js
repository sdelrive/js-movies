const layout = document.querySelector(".layout-store");
const films = document.querySelector(".stylesFilm");
const miListado = document.getElementById("miListado");
const lista = document.getElementById("listado");
const btns = document.getElementsByClassName("button");



misPelis = catalogoMisPeliculas;        // No sé por qué tengo que hacer esto. Si pongo catalogoMisPeliculas directamente en el for de la función botonListener, me dice que tengo que iniciar catalogoMisPeliculas primero. Por eso lo defini asi y funcionó.
// localStorage.setItem("MIS PELIS", []);
// let miListaJSON = JSON.parse(localStorage.getItem("mis pelis")).peliculas;


listaUsuario(); //Pega el nombre de usuario en "Lista de ${userName}"


pegarLista(catalogoPeliculas.peliculas);


//Añado los eventos a los botones de navegación.
miListado.addEventListener('click',()=>{
    pegarMiLista(misPelis.peliculas);   //Le pego un array de objetos
});

lista.addEventListener('click',()=>{
    pegarLista(catalogoPeliculas.peliculas);
    chequearAgregado();
});


//--------------------------------
 
       /* ESTA FUNCIÓN PEGA LAS LISTAS DE PELICULAS EN EL HTML*/
function pegarLista(catalogo){
        layout.innerHTML = " ";     //Primero borro todo lo que haya
        
        for(const pelicula of catalogo){
            layout.innerHTML += `<div class="stylesFilm art flex flex-ai-c flex-jc-c" > 
           
                               <div class="nombre eachStylesFilm">
                                   <h2>${pelicula.nombre}</h2>
                               </div>                            
                               <div class="eachStylesFilm">
                                 <img class="art_img" src=${pelicula.img}>
                               </div>
                               <div class="eachStylesFilm">
                                   <p><b>Director:</b> ${pelicula.director}</p>
                               </div>
                               <div class="eachStylesFilm">
                                   <p><b>Año: </b> ${pelicula.año}</p>
                                </div>
                               <button id="btn${pelicula.id}" class="button btn${pelicula.id}" >Mi lista</button>
                            </div>`;
                
        }

        // Función para agregar los eventos a los botones de cada pelicula.
    for(let i=1;i<catalogoPeliculas.peliculas.length;i++){
        let element = peliculas[i-1];
        let string = `btn${i}`;
        botonListener(string,element);
    };
      //Eliminar repetidos.
      //catalogoMisPeliculas.peliculas es un array de objetos.

}
       
//Pegar Mi Lista 
// catalogo debe ser un array de objetos.
function pegarMiLista(catalogo){
    layout.innerHTML = " ";     //Primero borro todo lo que haya

    for(const pelicula of catalogo){
        layout.innerHTML += `<div class="stylesFilm art flex flex-ai-c flex-jc-c" > 
                            <div id="rmvFilm${pelicula.id}"  class="removeFilm"><button><i class="gg-remove"></i></button></div>
                           <div class="nombre eachStylesFilm">
                               <h2>${pelicula.nombre}</h2>
                           </div>                            
                           <div class="eachStylesFilm">
                             <img class="art_img" src=${pelicula.img}>
                           </div>
                           <div class="eachStylesFilm">
                               <p><b>Director:</b> ${pelicula.director}</p>
                           </div>
                           <div class="eachStylesFilm">
                               <p><b>Año: </b> ${pelicula.año}</p>
                            </div>
                        </div>`;
            
    }

    for(let i=1;i<misPelis.peliculas.length;i++){
        let element = misPelis.peliculas[i-1];
        let string = `rmvFilm${i}`;
        // eventEliminarMiLista(string,element);
    };

}


//----
        
            // Funcion de listener de los botones.
function botonListener(string,element){
    let btn = document.getElementById(string);
    btn.addEventListener('click', () =>{

            miPelicula = new Pelicula(element.id, element.nombre, element.genero, element.director, element.año, element.estrellas,element.img );
            misPelis.agregarMisPeliculas(miPelicula);
            let catalogoMisPeliculas = new CatalogoPeliculas(misPelis);

            let catalogoMPJson = JSON.stringify(misPelis);
            localStorage.setItem("mis pelis",catalogoMPJson);

            let miListaJSON = JSON.parse(localStorage.getItem("mis pelis")).peliculas;

            // if(localStorage.getItem("mis pelis")){
            //     console.log("alo: ", JSON.parse(localStorage.getItem("mis pelis")))
            //     // let catalogoMisPeliculas = new CatalogoPeliculas(JSON.parse(localStorage.getItem("mis pelis")));
            // }
            // let pelis = JSON.parse(localStorage.getItem("mis pelis"));

            

            agregarDisabled(btn);
            borrarDuplicados(); 

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'La película ha sido agregada.',
                showConfirmButton: false,
                timer: 1500
              })
        });       
}













// Me devuelve un array con la peli que devuelve true la función.

// miListaJSON.filter(pelicu => pelicu.id === 1);





//-------------- Agregar el disabled a las pelis que ya estan en mi lista
function chequearAgregado(){
    for(let i =1; i<catalogoPeliculas.peliculas.length;i++){
        if(misPelis.peliculas.filter(pelicu => pelicu.id === i).length===1){
    
            let bott = document.getElementById(`btn${i}`);
            agregarDisabled(bott);
        }
    }
}

function agregarDisabled(boton){
    boton.classList.add("button-disabled");
    boton.setAttribute("disabled", "true");
    boton.innerText="Agregado";
}
//--------------
///---------------------------

// function eventEliminarMiLista(string,element){

// //    let eliminar = misPelis.peliculas.id
//     for(){
//         misPelis.peliculas[i].id ===
//     }

// }



///--------
function borrarDuplicados(){
    
    let arrayDuplicados = catalogoMisPeliculas.peliculas;
    let set = new Set( arrayDuplicados.map( JSON.stringify ) );
    let arraySinDuplicados = Array.from( set ).map( JSON.parse );
    catalogoMisPeliculas.peliculas = arraySinDuplicados;

}
///-------
// FUNCIONES MENOS IMPORTANTES //

//Funcion Lista de usuario
function listaUsuario(){
    const listaUsuario = document.getElementById("miListado");
    listaUsuario.innerHTML=`Lista de ${localStorage.getItem("userName")}`
}