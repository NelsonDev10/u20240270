let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un mensaje:',(mensaje)=>{
    const cadena=mensaje.toUpperCase()
    console.log(`La cadena de caracteres en mayusculas es: ${cadena}`);
    rl.close()
})