
let area;
const pi = Math.PI

function calculateArea(circleZise){
  return pi * Math.pow(circleZise, 2);
};

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

function readArray(arrayReaded){
  for (let index = 0; index < arrayReaded.length; index++) {
    console.log(arrayReaded[index]);  
  };
};

let fruits = ['Banana', 'apple', 'kiwi'];
fruits.push('pitaya');
fruits.forEach( function(fruit){
  console.log(fruit);
})
fruits.shift()

const numbers = [1,2,3,4,5];
const newNumbersArray = numbers.map( 
  function(x){
    console.log("this is the entried number: ", x)
    return x * 2;
  }
);
console.log(newNumbersArray)