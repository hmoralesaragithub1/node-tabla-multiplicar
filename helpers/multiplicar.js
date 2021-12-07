const fs = require("fs");
const colors = require("colors/safe");

const crearArchivo = (base = 5, list = false, hasta = 10) => {
  return new Promise((resolve, reject) => {
    let salida = "";
    let nombreArchivo = `tabla-${base}.txt`;

    if (list) {
      for (let i = 1; i <= hasta; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
      }
      console.log(colors.rainbow(salida));
    }

    fs.writeFile(`files/${nombreArchivo}`, salida, (err) => {
      if (err) {
        reject("No se pudo crear el archivo de la tabla");
      } else {
        resolve(nombreArchivo);
      }
    });
  });
};

module.exports = {
  crearArchivo,
};
