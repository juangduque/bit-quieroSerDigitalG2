console.log("ola ke ase");

var varTexto:string = "texto";
varTexto = '2';

var varNumero:number = 23;
document.write(varNumero.toString());

var varBoleanos: boolean = true || false;

var varDinamica: any = "texto";
varDinamica = 90;
varDinamica= false;
varDinamica = ["texto1", 2, true];
varDinamica = {key1: "hola"};


var varArreglo: any[] = ["texto", 2, true, ["texto", 3]];
var varArregloN: number[] = [1,2,3,4,5];
var varArregloT: string[] = ["texto1", "texto2"];
var varArregloB: boolean[] = [true, true, false];


//tuple
let tupleArreglo1: [number, number, boolean, string];
tupleArreglo1 = [1,2,true,"hola"];

let tupleArregloD: [number, object, boolean][];
tupleArregloD = [[2, {key1:"valor"}, true], [2, {key1:"valor"}, true], [2, {key1:"valor"}, true]];

//datos vacios
// let vacio1: void = undefined;
// let vacio2: null = null;
// let vacio3: undefined = undefined;

// console.log(typeof(vacio1));
// console.log(typeof(vacio2));
// console.log(typeof(vacio3));


//funciones y metodos
function multiplicar(num1: number, num2: number):number{
    return num1 * num2;
}

console.log(multiplicar(2, 3));

// let numero: string | number = 98;

function sumar(num1: number | string, num2: number | string): number{
    if(typeof(num1) === 'string')
        num1 = parseInt(num1);

    num2 = typeof(num2)==='string' ? parseInt(num2): num2;

    return num1 + num2;
}

console.log(sumar(1,"8"));


//parametro opcional
function saludo(nombre:string, apellido?:string):string{
    apellido = apellido == undefined ? '': apellido;
    return `Hola ${nombre} ${apellido}, bienvenido...`;
}

console.log(saludo('Miguel', 'Nieto'))

