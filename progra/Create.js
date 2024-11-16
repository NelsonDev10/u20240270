const { error } = require('console')
const fs = require ('fs')
const fileName= 'estudiantes.json'
const estudiantes = [
    {nombre:'Juan', edad: 18, carrera: 'Ingenieria en DS'},
    {nombre:'Nelson', edad: 25, carrera: 'Ingenieria Civil'},
    {nombre:'Marta', edad: 90, carrera: 'Ingenieria Industrial'}
]
fs.writeFile(fileName,JSON.stringify(estudiantes,null,2),(err)=>{
    if (err) {
        console.error('El archivo no se creo con exito', err)
        return;
    }
    console.log('El archivo fue creado con exito');
    
})