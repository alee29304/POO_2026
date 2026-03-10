console.log("Conectado con JS...")

/* Bloque 1: Calentamiento (Lógica Básica)
1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: "Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".*/

function porteroDigital() {

    let edad = parseInt(prompt("Ingrese su edad: "));

    if (edad >= 18) {
        alert("Acceso permitido a la App.")
    } else if (edad < 18) {
        alert("Acceso denegado: necesitas ser mayor de edad.")
    } else if (edad >= 120) {
        alert("Use una edad válida")
    } else {
        alert("Acceso denegado: necesitas ser mayor de edad")
    }
}

/* 2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando.push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco". */

function validadorNombre() {
    let nombre = prompt("Ingrese su nombre: ");
    let usuarios = [];

    if (nombre.length > 0) {
        alert("")
    } else if (" ") {
        alert("El nombre no puede estar en blanco.")
    }
}