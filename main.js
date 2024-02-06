// Definición de la función recursiva
function listarFamilias(familias, parentId = 0, level = 0) {
    const indent = "  ".repeat(level);
    const hijos = familias.filter(familia => familia.idPadre === parentId);

    hijos.forEach(hijo => {
        console.log(`${indent}-${hijo.Nombre}`);
        listarFamilias(familias, hijo.Id, level + 1);
    });
}

// Datos de ejemplo (la tabla de la base de datos)
// incluyendo la correccion del punto 2
const familias = [
    { Id: 1, Nombre: "Mascotas", idPadre: 0 },
    { Id: 2, Nombre: "Gato", idPadre: 1 },
    { Id: 3, Nombre: "Perro", idPadre: 1 },
    { Id: 4, Nombre: "Plantas", idPadre: 0 },
    { Id: 5, Nombre: "Árbol", idPadre: 4 },
    { Id: 6, Nombre: "Flores", idPadre: 4 },
    { Id: 7, Nombre: "Micu", idPadre: 2 },
    { Id: 8, Nombre: "Sasy", idPadre: 2 },
    { Id: 9, Nombre: "Fido", idPadre: 3 },
    { Id: 10, Nombre: "Bobby", idPadre: 3 },
    { Id: 11, Nombre: "Roble", idPadre: 5 }
];

// Agregar un registro para la familia de Gato
let nuevoGato = {"Id": 12, "Nombre": "NuevoGato", "idPadre": 2};
familias.push(nuevoGato);

// Agregar un registro para la familia de Fido
let nuevoFido = {"Id": 13, "Nombre": "NuevoFido", "idPadre": 3};
familias.push(nuevoFido);

console.log('*'.repeat(20));

// Llamada a la función para listar las familias con registros nuevos
listarFamilias(familias);