const numbers = [1,30,39,29,10,13];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element > 0){
    rta = true;
  };
};

console.log("rta", rta)

const rta2 = numbers.every((item) => item > 50)
console.log("rta2", rta2)

