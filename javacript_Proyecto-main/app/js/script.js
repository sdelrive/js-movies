const layout = document.querySelector(".layout-store");
const films = document.querySelector(".stylesFilm");
const miListado = document.getElementById("miListado");
const lista = document.getElementById("listado");
const btns = document.getElementsByClassName("button");

listaUsuario(); //Pega el nombre de usuario en "Lista de ${userName}"
pegarLista(peliculas);

    //Añado los eventos a los botones de navegación.
miListado.addEventListener('click',()=>{
    pegarMiLista(misPelis);   //Le pego un array de objetos
});

lista.addEventListener('click',()=>{
    pegarLista(peliculas);
    chequearAgregado();
});


       // ESTA FUNCIÓN PEGA LAS LISTAS DE PELICULAS EN EL HTML
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
    for(let i=1;i<peliculas.length;i++){
        let element = peliculas[i-1];
        let string = `btn${i}`;
        botonListener(string,element);
    };
}

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

    for(let i=1;i<=misPelis.length;i++){
        let element = misPelis[i-1];
        let string = `rmvFilm${i}`;
        eventEliminarMiLista(string,element);
    };

}

function eventEliminarMiLista(string,element){
    let btn = document.getElementById(string);
    btn.addEventListener('click', () =>{
        // console.log(element)
        misPelis = misPelis.filter(peli => 
            peli.id != element.id)

        pegarMiLista(misPelis);   //Le pego un array de objetos

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La película ha sido eliminada de tu lista.',
            showConfirmButton: false,
            timer: 1500
          })
    })

}
            // Funcion de listener de los botones.
function botonListener(string,element){
    let btn = document.getElementById(string);
    btn.addEventListener('click', () =>{

            // let catalogoMPJson = JSON.stringify(misPelis);
            // localStorage.setItem("mis pelis",catalogoMPJson);
            // let miListaJSON = JSON.parse(localStorage.getItem("mis pelis")).peliculas;
            // if(localStorage.getItem("mis pelis")){
            //     console.log("alo: ", JSON.parse(localStorage.getItem("mis pelis")))
            //     // let catalogoMisPeliculas = new CatalogoPeliculas(JSON.parse(localStorage.getItem("mis pelis")));
            // }
            // let pelis = JSON.parse(localStorage.getItem("mis pelis"));

            misPelis.push(element);
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
            //Agregar el disabled a las pelis que ya estan en mi lista
function chequearAgregado(){
    for(let i =1; i<peliculas.length;i++){
        if(misPelis.filter(pelicu => pelicu.id === i).length===1){
    
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

function borrarDuplicados(){
    let arrayDuplicados = misPelis;
    let set = new Set( arrayDuplicados.map( JSON.stringify ) );
    let arraySinDuplicados = Array.from( set ).map( JSON.parse );
    misPelis = arraySinDuplicados;
}
//Funcion Lista de usuario
function listaUsuario(){
    const listaUsuario = document.getElementById("miListado");
    listaUsuario.innerHTML=`Lista de ${localStorage.getItem("userName")}`
}

