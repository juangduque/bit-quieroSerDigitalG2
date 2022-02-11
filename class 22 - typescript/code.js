console.log("ola ke ase");
var varTexto = "texto";
varTexto = '2';
var varNumero = 23;
document.write(varNumero.toString());
var varBoleanos = true || false;
var varDinamica = "texto";
varDinamica = 90;
varDinamica = false;
varDinamica = ["texto1", 2, true];
varDinamica = { key1: "hola" };
var varArreglo = ["texto", 2, true, ["texto", 3]];
var varArregloN = [1, 2, 3, 4, 5];
var varArregloT = ["texto1", "texto2"];
var varArregloB = [true, true, false];
//tuple
var tupleArreglo1;
tupleArreglo1 = [1, 2, true, "hola"];
var tupleArregloD;
tupleArregloD = [[2, { key1: "valor" }, true], [2, { key1: "valor" }, true], [2, { key1: "valor" }, true]];
//datos vacios
// let vacio1: void = undefined;
// let vacio2: null = null;
// let vacio3: undefined = undefined;
// console.log(typeof(vacio1));
// console.log(typeof(vacio2));
// console.log(typeof(vacio3));
//funciones y metodos
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(multiplicar(2, 3));
// let numero: string | number = 98;
function sumar(num1, num2) {
    if (typeof (num1) === 'string')
        num1 = parseInt(num1);
    num2 = typeof (num2) === 'string' ? parseInt(num2) : num2;
    return num1 + num2;
}
console.log(sumar(1, "8"));
//parametro opcional
function saludo(nombre, apellido) {
    apellido = apellido == undefined ? '' : apellido;
    return "Hola ".concat(nombre, " ").concat(apellido, ", bienvenido...");
}
console.log(saludo('Miguel', 'Nieto'));
function hago_un_proceso(valor, accion_usuario) {
    var localArray;
    switch (accion_usuario) {
        case 'agregar':
            if (localStorage.getItem("nuestro_array") == null) {
                localStorage.setItem("nuestro_array", valor);
            }
            else {
                localArray = localStorage.getItem("nuestro_array");
                console.clear();
                console.log(localArray);
                localArray = localArray.split(',');
                console.log(localArray);
                localArray.push(valor);
                localStorage.setItem("nuestro_array", localArray);
            }
            break;
        case 'eliminar':
            localArray = localStorage.getItem("nuestro_array");
            localArray = localArray.split(',');
            if (localArray.length > 1) {
                localArray.pop();
                localStorage.setItem("nuestro_array", localArray);
            }
            else {
                localStorage.removeItem("nuestro_array");
            }
            break;
    }
}
hago_un_proceso('mi_valor', 'eliminar');
