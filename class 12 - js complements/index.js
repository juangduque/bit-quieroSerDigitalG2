"use strict";

let name = "Jhon";
let surname = "Martinez"

function putName(){
  const surname = "rodriguez";
  console.log("Surname inside the function: " + surname);
  name = "Juan";
  alert(name);
};

putName();
console.log(name + " " +surname);