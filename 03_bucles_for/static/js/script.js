console.log("Conectado con JS...");

/* 1. El Contador en Pantalla
Selecciona el párrafo con el id pantalla.
Crea un ciclo for que vaya del 1 al 10.
En cada vuelta del ciclo, agrega (concatena con +=) el número 
actual seguido de un guion (ej: "1 - 2 - 3 - ") al párrafo. */

function contadorPantalla() {

    let numero = [];
    const container = document.getElementById('resultadoContador');
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    resultado.textContent = `Contador: ${numeros.join(" , ")}`;
    container.classList.remove(`d-none`);
}

/* 2. Lista de Asistencia Automática
Tienes la siguiente lista de estudiantes: let curso = ["Ana", "Diego", "Sofía", "Matias"];
Selecciona el párrafo pantalla y límpialo primero asignándole un texto vacío("").
Usa un ciclo for para recorrer el arreglo.En cada iteración, agrega 
el nombre del estudiante al párrafo, separándolos por una coma y un espacio. */
