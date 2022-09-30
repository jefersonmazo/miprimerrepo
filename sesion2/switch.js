// let mensaje = '';
// const EDAD = require('readline');
// const rl = EDAD.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('cual es tu edad ? ', EDAD => {
//       console.log(`${EDAD}`);
//       rl.close();
// });

// if (age = 5){
//     mensaje = 'Es un infante';
// } else if (age > 5 && age < 18){
//     mensaje = 'Es un adolescente';
// } else if (age > 18){
//     mensaje = 'Es Mayor de edad';
// }

// console.log(mensaje);






const EDAD = 4;
let mensaje = "";

switch (true) {
    case EDAD > 0 && EDAD < 5:
        mensaje = 'Es un infante';
    break;
    case EDAD >= 5 && EDAD <= 35:
        mensaje = 'Quince';
    break;
    case EDAD > 36 && EDAD < 50:
        mensaje = 'Cincuenta';
    break;
    default:
        mensaje = 'Es amparo'
}

console.log(mensaje);



// Operador terniario

// let genero = 'M';
// mensaje = 'Eres Hombre';

// if(genero == 'F'){
//     mensaje = 'Eres Mujer';
// }


let genero = 'M';
mensaje = (genero != 'M') ? 'Eres Hombre' : 'Eres Mujer';

console.log(mensaje);