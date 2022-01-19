const container = document.getElementById("container");
container.innerHTML = "Soy un div";

const titlesArray = document.getElementsByClassName("title");

titlesArray[0].innerHTML = "Soy un título";

const subtitle = document.querySelector(".subtitles");
const nodeText = document.createTextNode("Hola soy un subtitulo");
subtitle.appendChild(nodeText);

let text = "soy un h3";
const newContainer = document.createElement("span");
const h3 = document.createElement("h3");
const content = document.createTextNode( text );
h3.appendChild( content );
newContainer.appendChild( h3 );
document.body.appendChild( newContainer);

const parragraph = document.querySelector("p");
parragraph.appendChild( document.createElement("img"))

const title3NodeText = document.createTextNode("Soy un titulo h3")
const title3 = document.querySelector("#title3")
title3.appendChild( title3NodeText );
title3.style.color = "green";

const h5 = document.createElement("h5");
const texth5Node = document.createTextNode("Soy un h5");
h5.append( texth5Node );
document.body.append(h5);

const eventType = "dblclick";
const controlFunction = () => {
  alert("el btn esta siendo clickeado")
};
const eventListener = document.querySelector("#btn").addEventListener(eventType, controlFunction);
//document.querySelector("#btn").removeEventListener(eventType, eventListener)