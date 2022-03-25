const numbers = [1,2,3,4];

let arrayReturned = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element > 2){
    arrayReturned.push(element);
  };
};

// console.log("arrayReturned", arrayReturned);

const letters = ["kiwi", "apple", "banana", "orange"];

let arrayReturned2 = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  if(element.length === 6){
    arrayReturned2.push(element);
  };
};

// console.log("arrayReturned", arrayReturned2);

const arrayFiltered = letters.filter( (item) => item.length === 6 );

// console.log("arrayFiltered", arrayFiltered)

const arrayFiltered2 = numbers.filter( (item) => item > 2 );

// console.log("arrayFiltered", arrayFiltered2)


const products = [
  {
    name: "alpinito",
    price: 2000
  },
  {
    name: "yogo yogo",
    price: 2500
  },
  {
    name: "jet",
    price: 700
  }
];

const userInput = "alpinito"
const productsFiltered = products.filter((item) => item.name === userInput);

// console.log("products ", products)
// console.log("productsFiltered ", productsFiltered)


const userInput2 = 2000
const productsFiltered2 = products.filter((item) => item.price >= userInput2);

console.log("products ", products)
console.log("productsFiltered ", productsFiltered2)

