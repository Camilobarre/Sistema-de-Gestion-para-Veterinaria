//Se crea un array con 10 mascotas
let mascotas = [
    { nombre: "Luna", especie: "Perro", raza: "Golden", edad: 3, peso: 10, estado: "Critico", nombrePropietario: "Juan", documento: 15854325, telefono: 3105487874, correo: "juanpa@gmail.com" },
    { nombre: "Simba", especie: "Gato", raza: "Siamés", edad: 2, peso: 5, estado: "Estable", nombrePropietario: "María", documento: 98765432, telefono: 3001234567, correo: "maria@gmail.com" },
    { nombre: "Max", especie: "Perro", raza: "Labrador", edad: 5, peso: 15, estado: "Critico", nombrePropietario: "Pedro", documento: 65432178, telefono: 3159876543, correo: "pedro@gmail.com" },
    { nombre: "Nala", especie: "Gato", raza: "Persa", edad: 4, peso: 6, estado: "Critico", nombrePropietario: "Ana", documento: 12345678, telefono: 3204567890, correo: "ana@gmail.com" },
    { nombre: "Rocky", especie: "Perro", raza: "Bulldog", edad: 7, peso: 20, estado: "Estable", nombrePropietario: "Luis", documento: 54321678, telefono: 3186543210, correo: "luis@gmail.com" },
    { nombre: "Milo", especie: "Gato", raza: "Angora", edad: 1, peso: 4, estado: "Critico", nombrePropietario: "Juan", documento: 87654321, telefono: 3009876543, correo: "sofia@gmail.com" },
    { nombre: "Bella", especie: "Perro", raza: "Chihuahua", edad: 6, peso: 3, estado: "Estable", nombrePropietario: "Carlos", documento: 43218765, telefono: 3107654321, correo: "carlos@gmail.com" },
    { nombre: "Oreo", especie: "Gato", raza: "Maine Coon", edad: 3, peso: 8, estado: "Estable", nombrePropietario: "Laura", documento: 56781234, telefono: 3217890123, correo: "laura@gmail.com" },
    { nombre: "Coco", especie: "Perro", raza: "Pug", edad: 4, peso: 7, estado: "Critico", nombrePropietario: "Juan", documento: 32178456, telefono: 3146789012, correo: "elena@gmail.com" },
    { nombre: "Lucky", especie: "Gato", raza: "Bombay", edad: 2, peso: 5, estado: "Estable", nombrePropietario: "Ana", documento: 78123456, telefono: 3195678901, correo: "pablo@gmail.com" }
];
console.log(mascotas);

let ejecutar = true
while (ejecutar) {
    //Se crea un menu con las diferentes opciones para que el usuario ingrese
    let opcionMenu = prompt(`Ingresa una opción [1-8]: 
    [1] Registrar una nueva mascota 
    [2] Lista de mascotas
    [3] Lista de dueños
    [4] Buscar mascota por nombre
    [5] Filtrar mascotas por un mismo dueño
    [6] Actualizar información de mascota
    [7] Eliminar mascota
    [8] Salir del programa`)

    //Se crea un bloque switch el cual nos permite navegar por el programa dependiendo de la opción ingresada por el usuario 
    switch (opcionMenu) {
        case "1":
            registrarNuevaMascota();
            console.log(mascotas);
            break;
        case "2":
            listarMascotas();
            break;
        case "3":
            listarDueños();
            break;
        case "4":
            let nombreABuscar = prompt("Ingresa el nombre de la mascota a buscar");
            buscarMascotaPorNombre(nombreABuscar);
            break;
        case "5":
            let nombrePropietario = prompt("Ingresa el nombre del propietario para filtrar");
            filtrarMascotasPorPropietario(nombrePropietario);
            break;
        case "6":
            let nombreMascota = prompt("Ingresa el nombre de la mascota para actualizar")
            actualizarInformacionMascota(nombreMascota);
            console.log(mascotas);
            break;
        case "7":
            let nombreMascotaEliminar = prompt("Ingresa el nombre de la mascota para eliminar")
            eliminarMascota(nombreMascotaEliminar);
            console.log(mascotas);
            break;
        case "8":
            console.log("Saliendo del programa...");
            ejecutar = false;
            break;
        default:
            console.info("Ingresaste una opción equivocada")
    }
}

//Se declara una primera función que registra una nueva mascota
function registrarNuevaMascota() {
    let nombre = prompt("Ingresa el nombre de la mascota");
    let especie = prompt("Ingresa la especie de la mascota (perro, gato....)");
    let raza = prompt("Ingresa la raza de la mascota");
    let fechaNacimiento = prompt("Ingresa la fecha de nacimiento de la mascota en formato YYYY-MM-DD");
    let peso = parseFloat(prompt("Ingresa el peso de la mascota en kilogramos"));
    let estado = prompt("Ingresa el estado de salud de la mascota (estable o crítico)");
    let nombrePropietario = prompt("Ingresa el nombre del propietario de la mascota");
    let documento = prompt("Ingresa el documento del propietario");
    let telefono = prompt("Ingresa el teléfono de contacto del propietario");
    let correo = prompt("Ingresa el correo electrónico del propietario");

    let hoy = new Date();
    let fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    let mascotaNueva = {
        nombre: nombre,
        especie: especie,
        raza: raza,
        edad: edad,
        peso: peso,
        estado: estado,
        propietario: {
            nombre: nombrePropietario,
            documento: documento,
            telefono: telefono,
            correo: correo
        }
    };

    mascotas.push(mascotaNueva);
}

//Se declara una función para listar todas las mascotas registradas
function listarMascotas() {
    console.log("Lista de mascotas:");
    mascotas.forEach(function (mascota, index) {
        console.log(`[${index + 1}] Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Raza: ${mascota.raza}, Edad: ${mascota.edad}, Peso: ${mascota.peso}, Estado: ${mascota.estado}, Propietario: ${mascota.nombrePropietario}`);
    });
}

//Se declara una funcion para listar solo los dueños de las mascotas
function listarDueños() {
    console.log("Lista de dueños de mascotas:");
    mascotas.forEach(function (mascota) {
        console.log(`Propietario: ${mascota.nombrePropietario}`);
    });
}

//Se declara una función para buscar una mascota por el nombre
function buscarMascotaPorNombre(nombre) {
    let mascotaEncontrada = mascotas.find(function (mascota) {
        return mascota.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if (mascotaEncontrada) {
        console.log("Mascota encontrada:");
        console.log(mascotaEncontrada);
    } else {
        console.log(`No se encontró el nombre "${nombre}"`);
    }
}

//Se declara una función para filtar varias mascotas del mismo propietario
function filtrarMascotasPorPropietario(nombrePropietario) {
    let mascotasPropietario = mascotas.filter(function (mascota) {
        return mascota.nombrePropietario.toLowerCase() === nombrePropietario.toLowerCase();
    });

    if (mascotasPropietario.length > 0) {
        console.log(`Mascotas de ${nombrePropietario}:`);
        mascotasPropietario.forEach(function (mascota, index) {
            console.log(`[${index + 1}] Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Raza: ${mascota.raza}, Edad: ${mascota.edad}, Peso: ${mascota.peso}, Estado: ${mascota.estado}`);
        });
    } else {
        console.log(`No se encontraron mascotas para el propietario "${nombrePropietario}"`);
    }
}


//Se declara una función para actualizar datos de una mascota existente
function actualizarInformacionMascota(nombreMascota) {
    let mascotaIndex = mascotas.findIndex(function (mascota) {
        return mascota.nombre.toLowerCase() === nombreMascota.toLowerCase();
    });

    if (mascotaIndex !== -1) {
        let mascota = mascotas[mascotaIndex];
        console.log(`Mascota encontrada: ${mascota.nombre}`);

        // Solicitar al usuario que ingrese la nueva información de la mascota
        let nuevaEspecie = prompt("Ingresa la nueva especie de la mascota (perro, gato, etc.)");
        let nuevaRaza = prompt("Ingresa la nueva raza de la mascota");
        let nuevaEdad = parseInt(prompt("Ingresa la nueva edad de la mascota"));
        let nuevoPeso = parseFloat(prompt("Ingresa el nuevo peso de la mascota en kilogramos"));
        let nuevoEstado = prompt("Ingresa el nuevo estado de salud de la mascota (estable o crítico)");

        // Actualizar la información de la mascota
        mascotas[mascotaIndex].especie = nuevaEspecie;
        mascotas[mascotaIndex].raza = nuevaRaza;
        mascotas[mascotaIndex].edad = nuevaEdad;
        mascotas[mascotaIndex].peso = nuevoPeso;
        mascotas[mascotaIndex].estado = nuevoEstado;

        console.log("Información de la mascota actualizada correctamente.");
    } else {
        console.log(`No se encontró la mascota "${nombreMascota}"`);
    }
}

//Se declara una función para eliminar una mascota
function eliminarMascota(nombreMascotaEliminar) {
    let indiceMascota = mascotas.findIndex(function (mascota) {
        return mascota.nombre.toLowerCase() === nombreMascotaEliminar.toLowerCase();
    });

    if (indiceMascota !== -1) {
        mascotas.splice(indiceMascota, 1);
        console.log(`Mascota "${nombreMascotaEliminar}" eliminada correctamente.`);
    } else {
        console.log(`No se encontró la mascota "${nombreMascotaEliminar}".`);
    }
}