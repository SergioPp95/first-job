const fs = require('fs');
//corregir las rutas con archivos
let archivoDeTareas = {
    archivo: "tareas.json",
    leerArchivo: function(){
        let tareas = fs.readFileSync("./tareas.json", {encoding: 'utf-8'})
        return JSON.parse(tareas)
    },
    escribirJson: function(arr) {
        let data =JSON.stringify(arr);
        fs.writeFileSync("./tareas.json", data, {encoding: 'utf-8'})
    },
    guardarTarea: function(obj) {
        let newArr = this.leerArchivo()
        let prueba = newArr.concat([obj]);
        this.escribirJson(prueba);         
    },
    filtrarPorEstado: function(estate) {
        let arr = this.leerArchivo();
        let res = arr.filter((e) => e.estado == estate);
        return res;
    }
}
module.exports = archivoDeTareas;