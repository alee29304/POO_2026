console.log("Conectado con JS...")

/*
Bloque 1: Calentamiento (Lógica Básica)
1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: "Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".
2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".
*/

function porteroDigital() {
    let edad = parseInt(prompt("Ingrese su edad:"));

    if (edad <= 0 && edad >= 130) {
        alert("Ingresa una edad válida");
    } else if (edad >= 18) {
        alert("Acceso permitido a la app");
    } else if (edad < 17 && edad > 0) {
        alert("Necesitas ser mayor de edad");
    } else (alert("Ingresa un valor válido"));

}

/*Bloque 2: Gestión de Inventarios y Listas
3. El Filtro de Duplicados
Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".
*/

function filaEspera() {
    let nombre = prompt("Ingrese su nombre");
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuarios}`);
    } else {
        alert("Error: El nombre no puede estar en blanco");
    }

}

/*
3. El Filtro de Duplicados
Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".

*/
function reordenarDatos() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = "celular";

    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario")
    } else {
        alert("El producto no está en el inv entario")
    }
}

/*
4. Control de Stock Máximo
Imagina que una bodega solo tiene espacio para 5 cajas.
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
Si el tamaño de la bodega (.length) es mayor a 5, elimina la última caja con .pop() y muestra: "Bodega llena, eliminando último ingreso".
Si es 5 o menos, muestra: "Espacio disponible".
*/

let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
function controlStock() {
    if (bodega.length <= 5) {
        alert("Espacio disponible");
    } else {
        alert("Bodega llena, eliminando último ingreso");
        bodega.pop();
    }
}

/*
5. Limpieza de Datos
A veces recibimos datos basura. let colaEspera = ["error_404", "Juan", "Sofía"];
Si el primer elemento (índice 0) es igual a "error_404", elimínalo usando .shift() y muestra la cola limpia.
Si no, muestra: "La lista de espera está correcta".
*/

function operarIntruso() {
    let colaEspera = ["error_404", "Juan", "Sofía"];
    if (colaEspera[0] == "error_404") {
        colaEspera.shift()
    }
    alert(`Cola de espera limpia: ${colaEspera.join(" - ")}`)
}

/*
6. Acceso VIP
Tienes una lista de usuarios comunes: let foro = ["User1", "User2"];
Declara la variable rol.
Si el rol es "Admin", agrega el nombre al inicio de la lista con .unshift() para que tenga prioridad.
Si no es Admin, agrégalo al final con .push().
*/

function accesoVip() {
    let foro = ["User1", "User2"];
    let rol = prompt("Ingresar rol:");
    if (rol.toLowerCase() === "admin") {
        foro.unshift(rol);
        alert(foro);
    } else {
        foro.push(rol);
        alert(foro);
    }

}

/*
7. Sistema de Calificaciones Chile (Escala 1 a 7)
Crea una variable nota.
Si la nota es 6 o superior: "Excelente, eximido".
Si la nota es entre 4 y 5.9: "Aprobado, vas a examen".
Si es menor a 4: "Reprobado".
(Pista: Usa else if).
*/

function sistemaCalificaciones() {
    let nota = parseInt(prompt("Ingrese la nota: "));
    if (nota >= 6 && nota <= 7) {
        alert("Execelte, eximido")
    } else if (nota >= 4 && nota <= 5.9) {
        alert("Aprobado, vas a examen")
    } else if (nota < 4 && nota >= 1) {
        alert("Reprobado")
    } else {
        alert("Ingresa un valor válido")
    }

}

/*8° LIsta de invitados a una fiesta */

function invitados() {
    let invitados = ["Ana", "Luis", "Camila", "Diego"];
    let personas = prompt("Ingrese su nombre");
    if (invitados.includes(personas)) {
        alert(`¡Bienvenido/a ${personas}! pasa a la fiesta `)
    } else {
        alert("Lo siento, no estas en la lista de invitados")
    }
};

/*9° ejercicio numero 9 */

function almacenMatrices() {
    let estanteria = [["Manzana", "Peras",], ["Leche", "yogur"]];
    let seccion = prompt("Ingresar una seccion(0-1)");
    let productos = prompt("Ingrese productos solicitados");
    if (seccion !== 0 || seccion !== 1) {
        alert("No tenemos esta seccion")

    }
    else if (estanteria[seccion].includes(productos)) {
        alert("Producto encontrado en el estante")
    } else {
        alert("No tenemos ese producto en esa seccion")
    }
}
/*10° Ejercicio numero 10 */

function ejercicio10() {
    let nombreVisita = prompt("Ingresa tu nombre:");
    let esVip = prompt(`¿Eres Vip?\n0 = no\n1 = si`);
    nombreVisita.trim();// elimina los espacion del  inicio y final

    if (nombreVisita == "") {
        alert("Error: el  nombre no puede estar estar en vacio");
    } else if (bitacora.icludes(nombreVisita)) {
        alert("Esa persona ya esta en la lista")
    } else if (esVip == 1) {
        bitacora.unshift(nombreVisita)
        alert(`Agregado correctamente a la lista:\n${bitacora.join(" , ")}\npersonas en total:
        ${bitacora.length}`);
    } else if (esVip == 0) {
        bitacora.push(nombreVisita)
        alert(`Agregado correcatmente a la lista:\n${bitacora.join(" , ")}\npersonas en total:
        ${bitacora.length}`);
    } else {
        alert("Ingrese un valor valido.")
    }
}