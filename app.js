const { boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");

const argv = require("./config/yargs");

const colors = require("colors");

console.clear();

//const base = 2;

//console.log(process.argv);

//const [, , arg3 = "base=5"] = process.argv;

//const [, base = 5] = arg3.split("=");

//console.log(process.argv);
console.log(argv);

base = argv.base;
list = argv.list;
hasta = argv.hasta;

crearArchivo(base, list, hasta)
  .then((nombreArchivo) => console.log(nombreArchivo.green, "creado".green))
  .catch((err) => console.log(err));
