let person = {
  name: "Juan",
  age: 20,
  height: 1.70,
  class: {
    math: "401",
    science: "200"
  },
  books: [
    1,2,3
  ]
};

person.name = "santiago"
delete person.height

function somefunction(){
  //
}

const someOtherFunction = () => {
  //
}

const keys = Object.keys(person);
console.log(keys)

const mappedKeys = keys.map( (key) =>{
  return key + "something"
})
console.log(mappedKeys)

const personKey = "name";
console.log(person[personKey] )


class Person{
  constructor(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
  };

  sayHi(){
    console.log("Hello my name is ", this.name)
  };
};

class SoccerPlayer extends Person{
  constructor(backNumber){
    super();
    this.backNumber = backNumber;
  };

  makeGoal(){
    console.log("kick the ball");
  };
};

let citizen = new Person("Johan", 10, 0.8);
let otherCitizen = new Person("Liliana", 50, 1.6);
let player = new SoccerPlayer(10);