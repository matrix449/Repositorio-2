const prompt = require("prompt-sync")();

let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");

console.log("Hola " + nombre);
console.log("Tienes " + edad + " años");