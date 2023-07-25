const nombres = [
    "Juan",
    "José",
    "Miguel",
    "Carlos",
    "Fernando",
    "Luis",
    "Antonio",
    "Javier",
    "Pedro",
    "Manuel",
    "Francisco",
    "Alejandro",
    "Daniel",
    "Roberto",
    "Ricardo",
    "Guillermo",
    "Andrés",
    "Héctor",
    "Raúl",
    "Enrique",
    "Alberto",
    "Sergio",
    "Adrián",
    "Jorge",
    "Eduardo",
    "Mario",
    "Arturo",
    "Diego",
    "Martín",
    "Ángel",
    "Ernesto",
    "Jesús",
    "Victor",
    "Armando",
    "Hugo",
    "César",
    "Samuel",
    "Emilio",
    "Oscar",
    "Rubén",
    "Salvador",
    "Erick",
    "Leonardo",
    "Guadalupe",
    "Julián",
    "Gilberto",
    "Edgar",
    "Abraham",
    "Israel",
    "Rafael",
    "Jaime",
    "Marcos",
    "Agustín",
    "Alan",
    "Pablo",
    "Emmanuel",
    "Félix",
    "Jairo",
    "Gerardo",
    "Ismael",
    "Josué",
    "Mauricio",
    "Rogelio",
    "Gustavo",
    "Benjamín",
    "Tomás",
    "Cristian",
    "Lorenzo",
    "Leonel",
    "Adolfo",
    "Efraín",
    "Alfredo",
    "Axel",
    "Aarón",
    "Gabriel",
    "Nicolás",
    "Ezequiel",
    "Darío",
    "Elias",
    "Edwin",
    "Bryan",
    "Francisco",
    "Andrés",
    "Pablo",
    "Diego",
    "Sebastián",
    "Iker",
    "Damián",
    "Eduardo",
    "Guillermo",
    "Armando",
    "Cristopher",
    "Leonardo",
    "Andrés",
    "Pablo",
    "Diego",
    "Sebastián",
    "Iker",
    "Damián",
];
const apellidos = [
    "García",
    "Hernández",
    "López",
    "Martínez",
    "González",
    "Rodríguez",
    "Pérez",
    "Sánchez",
    "Ramírez",
    "Torres",
    "Flores",
    "Rivera",
    "Gómez",
    "Díaz",
    "Reyes",
    "Cruz",
    "Morales",
    "Ortiz",
    "Ramos",
    "Castillo",
    "Cortés",
    "Guerrero",
    "Vargas",
    "Rojas",
    "Romero",
    "Mendoza",
    "Vázquez",
    "Jiménez",
    "Lara",
    "Silva",
    "Navarro",
    "Medina",
    "Cervantes",
    "Méndez",
    "Juárez",
    "Chávez",
    "Duarte",
    "Soto",
    "Rangel",
    "Ríos",
    "Castañeda",
    "Aguilar",
    "Escobar",
    "Herrera",
    "Villanueva",
    "Franco",
    "Valenzuela",
    "Salazar",
    "Campos",
    "Zamora",
    "Miranda",
    "Carrillo",
    "Esparza",
    "Sosa",
    "Delgado",
    "Molina",
    "Valdés",
    "Cabrera",
    "Orozco",
    "Carranza",
    "Ibarra",
    "Nava",
    "Bautista",
    "Cuevas",
    "Cisneros",
    "Escamilla",
    "Santillán",
    "Pacheco",
    "Rico",
    "Barragán",
    "Serrano",
    "Del Rio",
    "Toledo",
    "Valdez",
    "Corona",
    "Navarrete",
    "Treviño",
    "Estrada",
    "Trujillo",
    "Balderas",
    "Carreón",
    "Leyva",
    "Ochoa",
    "Salinas",
    "Parra",
    "Téllez",
    "Vallejo",
    "Córdova",
    "Lira",
    "Noriega",
    "Villa",
    "Ceja",
    "Franco",
    "Gurrola",
    "Lomelí",
];
generar.addEventListener("click", generacion, false);
getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
function generacion() {
    let correo = "";
    let elemento = {
        nombre: nombres[getRandomInt(nombres.length)],
        apellido: apellidos[getRandomInt(apellidos.length)]
    }
    correo += formatearNombreApellido(elemento.nombre, elemento.apellido);
    for (let i = 0; i <= 6; i++) {
        correo += getRandomInt(10);
    }
    correo += "@gmail.com";
    let contra = generarContrasenaSegura();
    let final = {
        nombre: elemento.nombre,
        apellido: elemento.apellido,
        correo: correo,
        contra: contra
    }
    document.querySelector("#nombre").value = final.nombre;
    document.querySelector("#apellido").value = final.apellido;
    document.querySelector("#correo").value = final.correo;
    document.querySelector("#contrasena").value = final.contra;

}
formatearNombreApellido = (nombre, apellido) => {
    const nombreFormateado = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const apellidoFormateado = apellido.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const apellidoSin = apellidoFormateado.replace(/ñ/g, "n");
    const nombreCompleto = nombreFormateado + apellidoSin;
    return nombreCompleto;
}
generarContrasenaSegura = () => {
    const caracteresPermitidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}<>?";
    const longitudMinima = 12;
    const longitudMaxima = 16;

    const longitudContrasena = Math.floor(Math.random() * (longitudMaxima - longitudMinima + 1)) + longitudMinima;

    let contrasena = '';
    for (let i = 0; i < longitudContrasena; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        contrasena += caracteresPermitidos.charAt(indiceAleatorio);
    }

    return contrasena;
}

