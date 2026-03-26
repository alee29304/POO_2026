/* Ejercicio 1: Lista de Asistencia(push)
Contexto: Eres el profesor y estás pasando la lista.Cada alumno que 
dice "presente" debe ser anotado al final del registro.
Crea un arreglo vacío: let asistencia = [];
Función Principal: Crea registrarAlumno(). (Esta va en el onclick del botón).
Captura el nombre escrito en el input.
    Usa.push() para meter a ese alumno al final del arreglo asistencia.
Modifica el textContent del párrafo para mostrar: "Alumnos presentes: " seguido del arreglo.
Limpia el input vaciando su.value. */

let asistencia = [];
function agregarLista(nombre) {
    asistencia.push(nombre);
    return asistencia.join(", ");
};

function registrarAlumno() {
    const container = document.getElementById("resultadoContainer1");
    const result = document.getElementById("resultado1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    let resultado = agregarLista(nombre); // --> Llamado a la función con envío de parámetros
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};

/* Ejercicio 2: Fila de Urgencias Médicas (unshift e if)
Contexto: En un hospital, los pacientes graves no van al final 
de la fila, pasan directamente al primer lugar de atención.
Crea un arreglo: let pacientes = ["Carlos", "María", "Diego"];
Función Principal: Crea ingresarUrgencia().
Captura el nombre del paciente desde el input.
Usa un if para revisar si el input NO está vacío (!== "").
Si escribieron un nombre, usa .unshift() para agregarlo al inicio del arreglo pacientes.
Muestra en el textContent del párrafo: "Próximos a atender: " seguido del arreglo.
Limpia el input. */


let pacientes = ["Carlos", "Maria", "Diego"];
function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ");
};

function ejercicio_2() {
    const container = document.getElementById("resultadoContainer2");
    const result = document.getElementById("resultado2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("No puede estar vacío");
    };
}

/* Ejercicio 3: Sistema de Delivery (shift, pop e if)
Contexto: Un restaurante tiene pedidos listos. El cajero puede 
despachar el pedido más antiguo, o cancelar el último pedido que entró por un error.
Crea un arreglo: let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
Función Principal: Crea gestionarPedidos().
Captura el texto del input. El usuario debe escribir la palabra "despachar" o "cancelar".
Usa un if. Si escribió "despachar", usa .shift() para sacar la primera comida de la lista.
Usa un else if. Si escribió "cancelar", usa .pop() para eliminar la última comida de la lista.
Muestra en el textContent: "Pedidos pendientes: " seguido del arreglo.
Limpia el input. */

let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
function actualizarPedido(pedido) {
    if (pedido == "despachar") {
        entregas.shift()
    } else if (pedido == "cancelar") {
        entregas.pop()
    } else {
        alert("ingrese un valor válido")
    }
    return `Pedidos pendientes: ${entregas.join(", ")}`
}

function gestionarPedidos() {
    const container = document.getElementById("resultadoContainer3");
    const result = document.getElementById("resultado3");
    let input = document.getElementById("input3").value;
    let resultado = actualizarPedido(input);
    result.textContent = resultado;
    input.value = " ";
    container.classList.remove("d-none")
}

/* Ejercicio 4: Validador de Códigos de Descuento (for e if)
Contexto: Una tienda online revisa si el código promocional que ingresó el cliente existe 
en su base de datos para aplicarle una rebaja.
Crea un arreglo: let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
Función Principal: Crea verificarCodigo().
Captura el código desde el input.
Crea una variable mensaje = "Código inválido o expirado";.
Recorre el arreglo con un ciclo for.
Si el elemento actual del ciclo es igual al texto del input, cambia la variable mensaje a
 "¡Éxito! Código aceptado".
Fuera del ciclo, inyecta la variable mensaje en el textContent del párrafo.
Limpia el input. */

let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];

function buscarCodigo(codigo) {
    let mensaje = "Código inválido o expirado";
    for (let i = 0; i < codigosValidos.length; i++) {
        if (codigo == codigosValidos[i]) {

            mensaje = "¡Éxito! Código aceptado"
            return "¡Éxito! Código aceptado";
        } else {
            mensaje = ("Ingresa un Código válido")

        }
    }
    return mensaje
}

function verificarCodigo() {
    let input = document.getElementById("input4");
    let codigo = input.value;
    const result = document.getElementById("resultado4")
    const container = document.getElementById("resultadoContainer4");
    let resultado = buscarCodigo(codigo);
    result.textContent = resultado;

    result.value = "";
    container.classList.remove("d-none")
}

/* Ejercicio 5: Simulador de Cuotas(for)
Contexto: Un cliente compra un producto y el sistema le genera automáticamente 
las etiquetas para sus próximas 3 letras de pago.
Función Principal: Crea simularCuotas().
Captura el nombre del producto desde el input(ej: "Bicicleta").
Crea una variable vacía: registroPagos = "";
Crea un ciclo for que dé exactamente 3 vueltas(del 1 al 3).
En cada vuelta, súmale(+=) a registroPagos el producto y el número de
la cuota(Ej: producto + " - Cuota " + i + " | ").
Fuera del ciclo, muestra la variable registroPagos en el textContent del párrafo.
Limpia el input.*/

function calcularCuotas(valor, cuota) {
    let registroPagos = "";
    for (let i = 1; i <= 3; i++) {
        registroPagos += `Cuota ${i} de ${cuota}: ${parseInt(valor / 3)}`;
    }
    return registroPagos;
};

function simularCuotas() {
    const producto = document.getElementById("input5");
    let valorProducto = parseInt(producto.value);
    const cuotaInput = document.getElementById("input5")
    let cuota = parseInt(cuotaInput.value);
    const result = document.getElementById("resultado5");
    const container = document.getElementById("container5")
    let resultado = calcularCuotas(valorProducto, cuota)
    result.textContent = resultado;
    producto.value = "";
    cuotaInput.value = "";
    container.classList.remove("d-none");   
}

/*Ejercicio 6: Filtro de Presupuesto (for e if)
Contexto: Una vitrina virtual tiene varios precios. El cliente ingresa cuánta plata tiene en el bolsillo, y el sistema le muestra solo los precios que le alcanza para pagar.
Crea un arreglo de precios: let vitrina = [2500, 15000, 8000, 30000, 5000];
Función Principal: Crea filtrarPrecios().
Captura el número desde el input (este será el presupuesto del cliente. Recuerda usar Number()).
Crea una variable opciones = "Te alcanza para los precios: ";
Recorre el arreglo vitrina con un for.
Dentro del ciclo, usa un if. Si el precio actual del arreglo es menor o igual (<=) a la plata que ingresó el cliente, súmalo a la variable opciones más un guion (-).
Muestra el resultado en el textContent del párrafo.
Limpia el input.
 */


/*Ejercicio 7: Cálculo de Sueldo Líquido (Una función llama a otra)
Contexto: El usuario ingresa su Sueldo Bruto. Una función matemática oculta descuenta el 20% (AFP y Salud) y le devuelve el dato a la pantalla para mostrar cuánto dinero real recibirá a fin de mes.
Función Ayudante (La Matemática): Crea una función calcularDescuentos(bruto). Esta función multiplica el bruto por 0.8 y usa return para devolver el resultado.
Función Principal (La Interfaz): Crea procesarSueldo(). (Esta va en el botón).
Captura el sueldo desde el input y conviértelo a número.
Dentro de procesarSueldo, llama a tu función calcularDescuentos() pasándole el número capturado, y guarda lo que te devuelve en una variable llamada sueldoLiquido.
Modifica el textContent del párrafo: "Tu sueldo a pago es: $" + sueldoLiquido.
Limpia el input.
 */


/*Ejercicio 8: El Carrito de Compras (Reto Final - Delegación de tareas)
Contexto: Vamos agregando productos al carrito. Una función anota el producto y le pide ayuda a otra función para que dibuje el carrito actualizado en la pantalla.
Crea un arreglo vacío: let carrito = [];
Función Ayudante (La Pantalla): Crea actualizarPantalla(). Esta función tomará el arreglo carrito, lo unirá en un texto (ej: carrito.join(" - ")) y lo inyectará en el textContent del párrafo.
Función Principal (La Lógica): Crea agregarAlCarrito(). (Esta va en el botón).
Captura el producto desde el input.
Si el input no está vacío, usa .push() para agregarlo al carrito.
¡Limpia el input!
Al final de esta función, llama a actualizarPantalla() para que la vista se refresque automáticamente con el nuevo producto.
 */