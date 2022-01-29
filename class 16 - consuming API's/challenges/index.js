let menu = Number( prompt("ingrese la opción a ejecutar") );

switch(menu){
  case 1:
    var a =prompt("ingrese el primer numero");
    var b =prompt("ingrese el segundo numero");
    if(a===b) alert("son iguales");
    if(a>b) alert("el numero mayor es : "+a);
    if(b>a) alert("el numero mayor es : "+b);
    break;

  case 2:
    let nota1 = Number( prompt("ingrese la primera nota") );
    let nota2 = Number( prompt("ingrese la segunda nota") );
    let nota3 = Number( prompt("ingrese la tercera nota") );
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 3) {
      console.log(`el promedio es ${promedio}, el estudiante aprobo`)
    } else {
      console.log(`el promedio es ${promedio}, el estudiante reprobo`)
    }
    break;
    
  default:
    console.log("opción no válida");
}


