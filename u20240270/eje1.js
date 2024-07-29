let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite su nombre',(nombre)=>{
    rl.question('Digite su apellido',(apellido)=>{
        console.log(`Hola, ${nombre} ${apellido}!`);
        process.exit()
    })
})