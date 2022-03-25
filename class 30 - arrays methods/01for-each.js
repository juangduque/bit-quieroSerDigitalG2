const numbers = [1,2,3,4];
for (let index = 0; index < numbers.length; index++) {
  // console.log("index:", index)
  // const element = letters[index];
  // console.log("element", element)
  const element = numbers[index];
  const muliplyby2 = element * 2;
  console.log(muliplyby2)
};

const letters = ['a', 'b', 'c', 'd', 'e'];
for (let index = 0; index < letters.length; index++) {
  // console.log("index:", index)
  // const element = letters[index];
  // console.log("element", element)
  const element = numbers[index];
  const concat = element + "hola";
  console.log(concat)
};

//Método for each

letters.forEach((item) => {
  console.log("item",  item);
});

// letters.forEach(function(item){
//   console.log("item",  item);
// });

numbers.forEach( function(element){
  console.log("number: ", element * 2 )
})