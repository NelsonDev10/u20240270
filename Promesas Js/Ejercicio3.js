function enviarCorreo(direccion) {
    return new Promise((resolve, reject) => {
      if (direccion) {
        setTimeout(() => {
          resolve(`Correo enviado a ${direccion}`);}, 2000);
      } else {
        reject("Dirección de correo no proporcionada");
      }
    });
  }
  
enviarCorreo('nelson@gmail.com')  
.then(res => {
    console.log('Mensaje: ' + res);
})
.catch(error => {
    console.log('Error: ' + error);
});
