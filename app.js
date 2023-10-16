// un callback es una funcion que se va ajecutar cuando todo el procedimiento termine
const { crearArchivo } = require('../02-bases-node/utils/multiplicar')
const colors = require('colors')

const argv = require('./config/yargs')

console.clear()

crearArchivo(argv.base, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.error(err))

crearArchivo(argv.base, argv.l, argv.h)