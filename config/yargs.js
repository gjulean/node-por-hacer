const argv = require('yargs').command('crear', 'Crear un elemento por hacer', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}).command('Actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    compltado: {
        demand: true,
        alias: 'd',
        desc: 'Marca como pendiente o completado una tarea'
    }
}).help().argv;


module.exports = {
    argv
}