//Se crea un array con 10 mascotas
let mascotas = [
    { nombre: "Luna", especie: "Perro", edad: 3, dueño: "Juan" },
    { nombre: "Simba", especie: "Gato", edad: 2, dueño: "María" },
    { nombre: "Max", especie: "Perro", edad: 5, dueño: "Pedro" },
    { nombre: "Nala", especie: "Gato", edad: 4, dueño: "Ana" },
    { nombre: "Rocky", especie: "Perro", edad: 7, dueño: "Luis" },
    { nombre: "Milo", especie: "Gato", edad: 1, dueño: "Sofía" },
    { nombre: "Bella", especie: "Perro", edad: 6, dueño: "Carlos" },
    { nombre: "Oreo", especie: "Gato", edad: 3, dueño: "Laura" },
    { nombre: "Coco", especie: "Perro", edad: 4, dueño: "Elena" },
    { nombre: "Lucky", especie: "Gato", edad: 2, dueño: "Pablo" }
];

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

        break;
    case "2":

        break;
    case "3":

        break;
    case "4":

        break;
    case "5":

        break;
    case "6":

        break;
    case "7":

        break;
    case "8":

        break;
    default:
        console.info("Ingresaste una opción equivocada")
        break;
}