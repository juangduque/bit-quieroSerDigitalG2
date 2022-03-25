const numbers = [1,2,3,4];

let arrayReturned = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  arrayReturned.push( element + 1 )
};

console.log("array1: ", arrayReturned);

const arrayMapped = numbers.map((item) => item + 1);

const arrayMapped2 = numbers.map((item) => {
  return  item + 1
});

console.log("arrayMapped", arrayMapped);
