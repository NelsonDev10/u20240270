let fecha = new Date('Feb 20, 2012 03:12:00');
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let horaFormateada = (hora > 12 ? hora - 12 : hora) + ":" + minutos + (hora > 11 ? " PM" : " AM");
console.log(horaFormateada);

