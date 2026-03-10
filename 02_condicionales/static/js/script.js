console.log("Conectado con JS...")

/* Bloque 1: Calentamiento (Lógica Básica)
1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: "Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".
2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco". */

function porteroDigital() {

    let edad = parseInt(prompt("Ingrese su edad: "));

    if (edad >= 18) {
        alert("Acceso permitido a la App.")
    } else if (edad < 18) {
        alert("Acceso denegado: necesitas ser mayor de edad.")
    } else {
    }

}
