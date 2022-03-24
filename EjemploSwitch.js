const EDAD = 5;
let mensaje ="Es un infante";


switch (true){
    case EDAD > 0 && EDAD <=5:
        mensaje = "Es un infante"
        
    case EDAD > 5 && EDAD <=18:
        mensaje = "Es un adolescente"
        break;

}

console.log(mensaje);