"use strict";
// ejercicio 2
console.log("Ejercicio 2: corriendo desde typescript");
// ejercicio 3
const text3 = "Priviet TS";
const num3 = 333;
const bool3 = true;
const date3 = new Date();
let ej03 = document.getElementById("ej03");
ej03.innerHTML += `
Texto: ${text3} </br>
Numero: ${num3} </br>
Boolean: ${bool3.valueOf()} </br>
Fecha: ${date3}`;
// ejercicio 4
const num4 = 333;
const changeToString = (num) => {
    return num.toString();
};
let ej04 = document.getElementById("ej04");
ej04.innerHTML += `
Numero convertido a texto: ${changeToString(num4)}`;
// ejercicio 5
const numArray5 = [28, 7, 14, 153, 99, 32];
const arrayAdder = (arr) => {
    let counter = 0;
    for (let index = 0; index < arr.length; index++) {
        counter += arr[index];
    }
    return counter;
};
const ej05 = document.getElementById("ej05");
ej05.innerHTML += `
Suma del array: ${arrayAdder(numArray5)}`;
// ejercicio 6
class Estudiante {
    constructor() {
        this.nombre = "Gaston";
        this.edad = 23;
        this.curso = "Programación III";
    }
}
const estudiante6 = new Estudiante();
const ej06 = document.getElementById("ej06");
ej06.innerHTML += `
Estudiante: ${estudiante6.nombre} </br>
Edad: ${estudiante6.edad} </br>
Curso: ${estudiante6.curso}
`;
const dir7 = {
    calle: "Av. San Martin 1843",
    ciudad: "Ciudad de Mendoza",
    cp: 5500
};
const ej07 = document.getElementById("ej07");
ej07.innerHTML += `
Dirección: Calle: ${dir7.calle}, ${dir7.ciudad}. CP: ${dir7.cp}.
`;
const usr8 = {
    nombre: "Tonga",
    correo: "que.te@importa.xyz",
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};
const ej08 = document.getElementById("ej08");
ej08.innerHTML += `
${usr8.saludar()}
`;
// ejercicio 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años de edad`;
    }
}
const persona9 = new Persona("Lord Tonga", 7500);
const ej09 = document.getElementById("ej09");
ej09.innerHTML += `
${persona9.presentarse()}
`;
// ejercicio 10
class Caja {
    constructor(value) {
        this.value = value;
    }
    showValue() {
        return `Esta caja tiene un dato del tipo ${typeof (this.value)} y su contenido es: ${this.value}`;
    }
}
const box10a = new Caja(755);
const box10b = new Caja("Secret message");
const box10c = new Caja(true);
const ej10 = document.getElementById("ej10");
ej10.innerHTML += `
${box10a.showValue()} </br>
${box10b.showValue()} </br>
${box10c.showValue()}
`;
// ejercicio 11
let identidad = (identity) => {
    return identity;
};
const ej11 = document.getElementById("ej11");
ej11.innerHTML += `
Identidad del ${typeof (identidad(666))}: ${identidad(666)} </br>
Identidad del ${typeof (identidad("HESOYAM"))}: ${identidad("HESOYAM")}
`;
// ejercicio 12
var Color;
(function (Color) {
    Color["Negro"] = "negro";
    Color["Violeta"] = "violeta";
    Color["Rojo"] = "rojo";
})(Color || (Color = {}));
const darkness = Color.Negro;
const ej12 = document.getElementById("ej12");
ej12.innerHTML += `
El color favorito es ${darkness}
`;
