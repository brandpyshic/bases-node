const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(argv)
// documentacion de como se hace lo de arriba
// const [, , arg3 = 'numero=5'] = process.argv;
// const [, numero = 5] = arg3.split('=');

// const numero = 2;



crearArchivo(argv.base, argv.l, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
