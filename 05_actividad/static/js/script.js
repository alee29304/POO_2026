
// Ejercicio 1: Función con validación de datos
function ejercicio1() {
    const input = document.getElementById("input1");
    const container = document.getElementById("container1");
    const resultado = document.getElementById("resultado1");
    let resultadoInput = parseInt(input.value);
    let verificador = verificarNumero(resultadoInput);
    resultado.textContent = verificador;
    input.value = "";
    container.classList.remove("d-none");
};

function verificarNumero(numero) {
    if (isNaN(numero)) {
        return "Debes ingresar un número";
    } else {
        return "Número ingresado correctamente";
    }
};

// Ejercicio 2: Función que usa condicional múltiple

function ejercicio2() {
    const input = document.getElementById("input2");
    const result = document.getElementById("resultado2")
    const container = document.getElementById("container2");
    let nota = parseInt(input.value);
    let clasificador = clasificadorNotas(nota);
    result.textContent = clasificador;
    input.value = "";
    container.classList.remove("d-none");
};

function clasificadorNotas(nota) {
    if (nota < 4) {
        return "Reprobado";
    } else if (nota >= 6 && nota <= 7) {
        return "Sobresaliente";
    } else if (nota >= 4.0 && nota < 5.9) {
        return "Aprobado";
    } else {
        return "La nota maxima es 7";
    }
};

// Ejercicio 3: Uso de múltiples funciones (flujo completo)

function procesarNumero() {
    const input = document.getElementById("input3");
    const result = document.getElementById("resultado3")
    const container = document.getElementById("container3");
    let numero = parseInt(input.value);
    let resultadoCuadrado = calcularCuadrado(numero);
    let resultadoTriple = calcularTriple(numero);
    result.textContent = `El número al cuadrado: ${resultadoCuadrado} , El triple del número: ${resultadoTriple}`;
    input.value = "";
    container.classList.remove("d-none");
};

function calcularCuadrado(numero) {
    return numero * numero;
}

function calcularTriple(numero) {
    return numero * 3;
}

// Ejercicio 4: Función que transforma texto

function transformarTexto() {
    const input = document.getElementById("input4");
    const result = document.getElementById("resultado4");
    const container = document.getElementById("container4");
    let resultadoInput = input.value;
    let mayusculas = convertirMayus(resultadoInput);
    result.textContent = mayusculas;
    input.value = "";
    container.classList.remove("d-none");
}

function convertirMayus(texto) {
    if (texto !== "") {
        return texto.toUpperCase();
    } else {
        alert("No has ingresado ninguna letra o palabra")
    }
}