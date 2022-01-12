/*
let area;
const pi = Math.PI

function calculateArea(circleZise){
  return pi * Math.pow(circleZise, 2);
};
*/
let array = [1,2,3,4,5];
array.push(6);
let array1 = ["hola", 2, true];


function readArray(arrayReaded){
  for (let index = 0; index < arrayReaded.length; index++) {
    console.log(arrayReaded[index]);  
  };
};

readArray(array);
readArray(array1);
