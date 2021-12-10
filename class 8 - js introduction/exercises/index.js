//Determine circle area
const pi = 3.1416;
const radio = 10;

const area = pi * Math.pow(radio, 2);

console.log("El área del círculo es: ", area);

//Determine the major of 3 numbers
let number1 = 60;
let number2 = 50;
let number3 = 30;

if(number1 > number2 && number1 > number3){
  console.log(number1,"Es el numero mayor");
}else if(number2 > number1 && number2 > number3) {
  console.log(number2,"Es el numero mayor");
} else {
  console.log(number3, "Es el numero mayor")
}

// List from a max number from 3 to 3 until final
let maxNum = 30;
for (let index = 0; index <= maxNum; index++) {
  if(index % 3 === 0){
    console.log(" ", index);
  };
};