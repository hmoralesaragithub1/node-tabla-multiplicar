const yargs = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:
      "Este argumento indica que base tomaremos como número para generar la tabla",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe:
      "Este argumento indica si listaremos la tabla de multiplicar generada",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe:
      "Este argumento nos indica hasta que número llegará nuestra tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "El argumento base debe ser una entero";
    }
    return true;
  }).argv;

module.exports = argv;
