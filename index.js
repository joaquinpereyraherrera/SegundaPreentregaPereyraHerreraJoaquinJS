console.log("");
console.log("---------- Segunda Preentrega ----------");

let nombre;
let apellido;
let telefono;
let corte;
let horario;
let diaDeLaSemana = true;


nombre = prompt("Ingrese su nombre");
console.log("El nombre ingresado es: " + nombre);

apellido = prompt("Ingrese su apellido");
console.log("El apellido ingresado es: " + nombre);

telefono = prompt("Ingrese su número de telefono");
console.log("El número ingresado es: ", telefono);


while (diaDeLaSemana) {
    // Mostrar un mensaje de opciones al usuario
    let opcion = parseInt(prompt("Selecciona una opción:\n1. Martes\n2. Miercoles\n3. Jueves\n4. Viernes\n5. Sabado\n6. Continuar con el turno"));

    // Evaluar la opción seleccionada usando un switch
    switch (opcion) {
        case 1:
            console.log("Dia Martes");
            break;
        case 2:
            console.log("Dia Miercoles");
            break;
        case 3:
            console.log("Dia Jueves");
            break;
        case 4:
            console.log("Dia Viernes");
            break;
        case 5:
            console.log("Dia Sabado");
            break;
        case 6:
            diaDeLaSemana = false; // Salir del bucle while
            break;
        default:
            alert("Opción inválida. Por favor, selecciona una opción válida.");
            break;
    }
}


horario = prompt("Seleccione el horario del turno");
console.log("El horario seleccionado es: " + horario);


if (horario >= 8 && horario <= 20) {
    console.log("Horario disponible");
} else {
    console.log("Horario no disponible");
}

function barbero(){
    let barbero = prompt("Con que barbero desea cortarse:\n1. Manuel\n2. Gonzalo");
    console.log(`barbero seleccionado es ${barbero}`);
}

barbero()

alert("Turno agendado, muchas gracias por confiar en nosotros!");