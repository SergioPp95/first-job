const archivo = require("./funcionesDeTareas")
let accion = process.argv[2];
let title =  process.argv[3]
let tasks = archivo.leerArchivo()
// console.log(tasks)
switch(accion) {
    case "listar":
        console.log("Listado de Tareas");
        console.log("------------------");
        tasks.forEach( function(e, i){
            console.log((i + 1) + ". " + e.titulo + " - " + e.estado)
        });
        console.log("-------------------------------------------------")
            break;
    case "crear":
        let obj = {
            titulo: title,
            estado: "pendiente"
        }
        archivo.guardarTarea(obj)
        console.log("Nueva tarea creada");
        console.log("-------------------");
        console.log(obj.titulo + "->" + obj.estado)
            break;
    case "filtrar":
        let resultado = archivo.filtrarPorEstado(title);
        console.log("Tareas filtradas");
        console.log("-----------------")
        resultado.forEach(function(e, i){
            console.log((i + 1) + ". " + e.titulo + " - " + e.estado)
        });
        console.log("-------------------------------------------------")
        break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción.");
        console.log("Las acciones disponibles son: listar");
        console.log("--------------------------------------");
            break;
    default:
        console.log("--------------------------------------");
        console.log('No entiendo qué quieres hacer.');      
        console.log("Las acciones disponibles son: listar o crear");
        console.log("--------------------------------------");
}



