let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un mensaje',(mensaje)=>{
    const numCaracteres=mensaje.length
    console.log(`El numero de caracteres del mensaje es: ${numCaracteres}`);
    rl.close()
})