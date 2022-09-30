//Destructuring

const persona = {
    nombre: 'Juana',
    apellido:'Muñoz',
    amigo: {nombre: 'Ana', edad: 20, amiguis: {nombre: 'Jeferson', edad: 27, apellido:'Román' } },
};


const {
    amigo:{
        amiguis:{nombre: nombreFinal, edad: edadFinal, apellido: apellidoFinal}, //le damos un nombre distinto a nombre: nombreFinal
    },
} = persona;

console.log(nombreFinal,edadFinal,apellidoFinal);
// console.log(nombreFinal,edadFinal,apellidoFinal);

// const {amigo:{amiguis:{nombre}}} = persona;
// console.log(nombre);
// const {amigo} = persona;
// console.log(persona.amigo.amigo.nombre);
