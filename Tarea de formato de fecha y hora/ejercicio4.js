const fecha1 = new Date("2024-01-01"); 
const fecha2 = new Date("2024-07-15"); 
const diferenciaMilisegundos = fecha2.getTime() - fecha1.getTime();
const diferenciaDias = Math.abs(diferenciaMilisegundos / (1000 * 3600 * 24));
console.log(`La diferencia entre las dos fechas es de ${diferenciaDias} días`);