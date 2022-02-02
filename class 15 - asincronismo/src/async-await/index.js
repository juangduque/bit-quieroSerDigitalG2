

const doSomethingAsync = () => {
  return new Promise( (resolve, reject) => {
    (true)
      ? setTimeout( () => resolve('Esto hace algo async'), 3000)
      : reject(new Error("Error"))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log("Antes (before)");
doSomething();
console.log("Después (After)");

const anotherFunction = async () => {
  try{
      const something = await doSomethingAsync();
      console.log(`${something} 2`);
  }catch(error){
      console.error(error)
  }
}

console.log('Before 2');
anotherFunction();
console.log('After 2');