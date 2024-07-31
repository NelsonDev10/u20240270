let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese la frase original',(fraseOriginal)=>{
    rl.question('Ingrese la palabra a reemplazar',(palabraAReemplazar)=>{
        rl.question('Ingrese la nueva palabra', (nuevaPalabra)=>{
            const fraseReemplazada = fraseOriginal.replace(palabraAReemplazar, nuevaPalabra);
            console.log(`La frase con la palabra reemplazada es: ${fraseReemplazada}`);
            rl.close();
        })
    })
})