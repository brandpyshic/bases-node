const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
    try {        
        let salida = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }
        
        if(listar) {
            console.log('======================'.rainbow);
            console.log(`Tabla del ${base}`.bgRed);
            console.log('======================'.rainbow);
            console.log(salida.bgGreen);        
        }
        fs.writeFileSync(`./salida/tabla_del_${base}.txt`, salida);
        // este return es para no usar el await
        return `tabla del ${base}.txt`.rainbow;
    } catch (err) {
        throw err  
    }
}

module.exports = {
    crearArchivo
}