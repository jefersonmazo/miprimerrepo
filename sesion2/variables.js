var nombre = 'Jeferson';
// const ESTADO = { nombre: 'Jeferson', apellido: 'Mazo'};   // si la constante es un numero o un string, no se puede volver a cambiar el valor pero de esta forma si se puede modificar
// ESTADO.nombre = 'Camilo';
const ESTADO = 1;
let apellido = 'Mazo'

if(nombre === 'Jeferson'){
    let apellido = 'Román';
    const ESTADO = 3;
    console.log('Ingreso al if')
    console.log(apellido)
    console.log(ESTADO)
}

console.log('============================');
console.log(nombre);
console.log(ESTADO);
console.log(apellido);
console.log('============================');