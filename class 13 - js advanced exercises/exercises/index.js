let menuOption = prompt("Inresa la opción del menú a ejecutar");

switch(menuOption){
  case "1":
    let entryNumber = prompt("Ingresa un número para ver un cuadrado");
    entryNumber = Number(entryNumber);
    let floors = [];
    for (let index = 0; index < entryNumber; index++) {  
      const node = document.createElement( "div" );
      const content = document.createTextNode("*".repeat(entryNumber));
      node.append( content );
      floors.push(node)
    };
    document.body.append( ...floors )
    break;

  case "2":
    let entryNumber1 = prompt("Ingresa un número para ver una pirámide");
    entryNumber1 = Number(entryNumber1);
    let floors1 = [];
    for (let index = 0; index < entryNumber1; index++) {  
      const node = document.createElement( "div" );
      const content = document.createTextNode("x".repeat(index));
      node.append( content );
      floors1.push(node)
    };
    document.body.append( ...floors1 )
    break;

  case "3":
    let entryNumber2 = prompt("Ingresa un número para ver un cuadrado con símbolos intercalados");
    entryNumber2 = Number(entryNumber2);
    let floors2 = [];
    for (let index = 0; index < entryNumber2; index++) {  
      const node = document.createElement( "div" );
      let content;
      let signs = "";
      for (let i = 0; i < entryNumber2; i++) {
        if(i % 2 === 0){
          signs = signs + "+";
        }else{
          signs = signs + "*";
        }    
      };
      content = document.createTextNode( signs );
      node.append( content );
      floors2.push(node);
    };
    document.body.append( ...floors2 );
    break;
  default:
    alert("Número ingresado no es válido");
    break;
};




