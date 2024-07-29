let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cual es su nombre?',(nombre)=>{
    console.log(`Hola,${nombre}`);
    process.exit()
})