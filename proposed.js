// Definir una clase para representar cada nodo de la jerarquía
class Nodo {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.hijos = [];
    }
}

// Función para agregar un nuevo nodo a la jerarquía
function agregarNodo(padre, id, nombre) {
    const nuevoNodo = new Nodo(id, nombre);
    padre.hijos.push(nuevoNodo);
    return nuevoNodo;
}

// Función para imprimir la jerarquía como se espera
function imprimirJerarquia(nodo, nivel = 0) {
    console.log("  ".repeat(nivel) + "-" + nodo.nombre);
    nodo.hijos.forEach(hijo => imprimirJerarquia(hijo, nivel + 1));
}

// Crear nodos iniciales para la jerarquía
const mascotas = new Nodo(1, "Mascotas");
const gato = agregarNodo(mascotas, 2, "Gato");
const perro = agregarNodo(mascotas, 3, "Perro");
const plantas = new Nodo(4, "Plantas");
const arbol = agregarNodo(plantas, 5, "Árbol");
const flores = agregarNodo(plantas, 6, "Flores");
const micu = agregarNodo(gato, 7, "Micu");
const sasy = agregarNodo(gato, 8, "Sasy");
const fido = agregarNodo(perro, 9, "Fido");
const bobby = agregarNodo(perro, 10, "Bobby");
const roble = agregarNodo(arbol, 11, "Roble");

// Agregar nuevos nodos
const nuevoGato = agregarNodo(gato, 12, "Nuevo Gato");
const nuevoFido = agregarNodo(perro, 13, "Nuevo Fido");

// Imprimir la jerarquía como se espera
console.log("Interpretación esperada:");
imprimirJerarquia(mascotas);
imprimirJerarquia(plantas);