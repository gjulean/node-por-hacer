//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

console.log(comando);



switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('*****POR HACER******'.green);
            console.log(tarea.descripcion);
            console.log('Estado ' + tarea.completado);
            console.log('*********************'.green);
        }

        break;
    case 'actualizar':
        let result = porHacer.actualizar(argv.d, argv.c);
        console.log(result);
        break;

    default:
        console.log('comando no reconocido');
        break;
}