const numbers = [1,2,3,4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element > 2){
    rta = true;
    break;
  };
};

console.log("rta", rta)

const rta2 = numbers.some((item) => item > 2 )
console.log("rta2", rta2)
