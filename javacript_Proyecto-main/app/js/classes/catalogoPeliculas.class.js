
class CatalogoPeliculas{

    constructor(peliculas){
        this.peliculas = peliculas;
    }

        /*añadir peliculas */
    agregarMisPeliculas(pelicula){
        this.peliculas.push(pelicula);
    }
    cuantasHay(){
        return this.peliculas.length;
    }
        // -------------

 
        /*listar peliculas */

    listarMisPeliculas(){
        this.peliculas.forEach((pelicula) => {
            console.log("Listado de peliculas: ", pelicula);
        })
    }

        // Buscar entre mis peliculas

    buscarMisPeliculas(name){
        let esta = this.peliculas.some((pelicula) => pelicula.nombre.includes(name));
            //Array.some(func) chequea func sobre cada elemento del array. Sirve sobre todo para array de objetos.
            // Array.includes(parametro) chequea el parametro dado.

        if (esta) {
            
            let encontrado = this.peliculas.filter((pelicula) =>
                            pelicula.nombre.includes(name))


            console.table("Encontré: ", encontrado);
        }
        else{
            alert("No está.")
        }
    }
    



           
    // modificarMisPeliculas(name){
    //     misPeliculas = misPeliculas.filter((pelicula) => pelicula.nombre != name);

    //     catalogoMisPeliculas = new CatalogoPeliculas(misPeliculas);


    //      // No es la mejor manera de hacerlo, pero es lo que me salió. Lo que hago es, actualizo el array "misPeliculas" sin la pelicula eliminada, y luego actualizo el catalogoMisPeliculas con dicho array.
    // }

    
    




}