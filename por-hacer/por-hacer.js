const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];

const guardarDB = () => {

    let dataJson = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', dataJson, (err) => {
        if (err) throw new Error('No se pudo grabar el archivo');
    });


}

const cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {


    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = () => {
    listadoPorHacer = [];
    cargarDb();
    return listadoPorHacer;

}


const actualizar = (descripcion, completado = false) => {

    cargarDb();
    console.log(descripcion);
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(index);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}



module.exports = {
    crear,
    getListado,
    actualizar
}