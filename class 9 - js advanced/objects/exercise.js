const diceLaunch = 10;
let diceCount = {
  is1: 0,
  is2: 0,
  is3: 0,
  is4: 0,
  is5: 0,
  is6: 0,
}
function getRandomArbitrary(min, max) {
  return Math.floor( Math.random() * (max - min) + min );
}

for (let index = 0; index < diceLaunch; index++) {
  const launch = getRandomArbitrary(1, 7);
  /*if(launch === 1){

  } else if(launch === 2){

  }*/
  switch(launch){
    case 1:
      diceCount.is1 = diceCount.is1 + 1
      break
    case 2:
      diceCount.is2 = diceCount.is2 + 1
      break
    case 3:
      diceCount.is3 = diceCount.is3 + 1
      break
    case 4:
      diceCount.is4 = diceCount.is4 + 1
      break
    case 5:
      diceCount.is5 = diceCount.is5 + 1
      break
    case 6:
      diceCount.is6 = diceCount.is6 + 1;
      break
    default:
      break;
  };
};
/*
//Math random explanation
const randomNumber =  Math.random() * (5 - 1) + 1;
console.log(randomNumber);
const randomNumber2 = Math.ceil(randomNumber);
const randomNumber2 = Math.floor(randomNumber);
console.log(randomNumber2)
*/

console.log(diceCount);