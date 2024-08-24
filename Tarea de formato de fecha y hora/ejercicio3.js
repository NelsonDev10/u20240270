let fecha = new Date();
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let mes = meses[fecha.getMonth()];
let dia = fecha.getDate();
let año = fecha.getFullYear();
console.log(`La fecha actual es ${dia} de ${mes} de ${año}`);