console.log("Conectado con JS...");

/* 1. El Contador en Pantalla
Selecciona el párrafo con el id pantalla.
Crea un ciclo for que vaya del 1 al 10.
En cada vuelta del ciclo, agrega (concatena con +=) el número 
actual seguido de un guion (ej: "1 - 2 - 3 - ") al párrafo. */

function contadorPantalla() {

    let numero = [];
    const container = document.getElementById('resultadoContainer');
    const resultado = document.getElementById('result1');
    for (let i = 1; i <= 10; i++) {
        numero.push(i);
    }
    resultado.textContent = `Contador: ${numero.join(" , ")}`;
    container.classList.remove(`d-none`);
}

/* 2. Lista de Asistencia Automática
Tienes la siguiente lista de estudiantes: let curso = ["Ana", "Diego", "Sofía", "Matias"];
Selecciona el párrafo pantalla y límpialo primero asignándole un texto vacío("").
Usa un ciclo for para recorrer el arreglo.En cada iteración, agrega 
el nombre del estudiante al párrafo, separándolos por una coma y un espacio. */

function asisAuto() {

    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    let vacio = [];
    const arreglo = document.getElementById('resultadoArreglo')
    const resultado = document.getElementById('result2');

    for (let i = 0; i <= curso.length; i++) {
        vacio.push(i);
    }
    resultado.textContent = `Arreglo: ${curso.join(" , ")}`;
    arreglo.classList.remove(`d-none`);
}

/* 3. Buscador de Aprobados (Escala 1 a 7)
Tienes una lista con las notas finales de un curso: let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
Crea una variable contadorAprobados que inicie en 0.
Recorre el arreglo con un for.Si la nota es 4.0 o superior, suma 1 al contador.
Al terminar el ciclo, muestra en el párrafo pantalla: "Total de alumnos aprobados: [número]". */

function buscaAprobado() {
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    let contadorAprobados = 0;
    const apro = document.getElementById('resultadoNotas')
    const resultado = document.getElementById('result3');

    for (let i = 0; i <= notas.length; i++) {
        if (notas[i] >= 4.0) {
            contadorAprobados++
        }
    }
    resultado.textContent = `Total de alumnos aprobados: ${contadorAprobados}`;
    apro.classList.remove(`d-none`);
}

/* 4. El Filtro de Inventario
Una tienda quiere mostrar solo los productos que están disponibles.
let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
Recorre la lista con un ciclo for.
Si el producto es diferente de "Agotado" (!==), agrégalo 
al texto del párrafo pantalla. Si dice "Agotado", sáltalo. */

function filtroInv() {
    let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
    let disponibles = [];

    const apro = document.getElementById('resultadoProd');
    const resultado = document.getElementById('result4');

    for (let i = 0; i < productos.length; i++) {
        if (productos[i] !== "Agotado") {
            disponibles.push(productos[i]);
        }
    }

    resultado.textContent = `Disponibles: ${disponibles.join(" , ")}`;
    apro.classList.remove('d-none');
}

/* 5. Sumando la Colecta
Durante una actividad escolar se recolectaron distintos montos en dinero:
let aportes = [1500, 2000, 500, 3000, 1000];
Crea una variable totalRecaudado que inicie en 0.
Usa un ciclo for para sumar cada uno de los aportes a la variable total.
Al finalizar el ciclo, escribe en el párrafo: "La colecta reunió un total de: $[total]". */

function sumaColecta() {
    let aportes = [1500, 2000, 500, 3000, 1000];
    let totalRecaudado = 0;
    const suma = document.getElementById('resultadoSuma')
    const resultado = document.getElementById('result5');

    for (let i = 0; i < aportes.length; i++) {
        totalRecaudado += aportes[i];
    }
    resultado.textContent = `La colecta reunió un total de: ${totalRecaudado}`;
    suma.classList.remove('d-none');
}

/*6.Formateador de Nombres VIP
Tienes una lista de usuarios: let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
Queremos mostrarlos en el HTML, pero destacando a algunos.
Recorre el arreglo. Si el índice actual (i) es par (puedes usar i % 2 === 0), agrega la palabra " [VIP]" al lado de su nombre y muéstralo en el párrafo. Si es impar, muéstralo normal.
 */
function nombreVip() {
    let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
    let resultado = [];
    const asis = document.getElementById('resultadoVip');
    const vip = document.getElementById('result6');
    for (let i = 0; i < asistentes.length; i++) {
        if (i % 2 === 0) {
            resultado.push(`${asistentes[i]} [VIP]`);
        } else {
            resultado.push(`${asistentes[i]}`);
        }
    }
    vip.textContent = resultado.join(" - ");
    asis.classList.remove('d-none');
}

/*7. El Buscador de Stock Específico
Tienes un inventario: let bodega = ["Lápiz", "Cuaderno", "Goma", "Cuaderno", "Regla", "Cuaderno"];
Crea una variable articuloBuscado = "Cuaderno" y una variable vecesEncontrado = 0.
Recorre la bodega con un for. Cada vez que el elemento de la lista sea igual al articuloBuscado, aumenta tu contador.
Al final, inyecta en el párrafo: "El artículo [articuloBuscado] se encuentra [veces] veces en la bodega". 
 */
function stockEspecifico() {
    let bodega = ["Lápiz", "Cuaderno", "Goma", "Cuaderno", "Regla", "Cuaderno"];
    let articuloBuscado = "Cuaderno";
    let vecesEncontrado = 0;
    const stock = document.getElementById('resultadoStock');
    const resultado = document.getElementById('result7');
    for (let i = 0; i < bodega.length; i++) {
        if (bodega[i] === articuloBuscado) {
            vecesEncontrado++;
        }
    }
    resultado.textContent = `El artículo ${articuloBuscado} se encuentra ${vecesEncontrado} veces en la bodega`;
    stock.classList.remove('d-none');
}

/* 8.  Generador de Párrafos de Advertencia
Tienes una lista de temperaturas registradas en una sala de servidores: let temperaturas = [22, 24, 28, 35, 21, 38];
Queremos mostrar alertas solo para las temperaturas peligrosas.
Usa .innerHTML en lugar de .textContent en tu párrafo.
*/
function parrafosAdvertencia() {
    let temperaturas = [22, 24, 28, 35, 21, 38];
    const parrafo = document.getElementById('resultadoParrafo');
    const result8 = document.getElementById('result8');
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 30) {
            result8.innerHTML += `!alerta temperaturas peligrosas de ${temperaturas[i]} grados. <br>¡   `
        }
    }
    parrafo.classList.remove('d-none');
}



