interface Person{
  name: string,
  age: number | string,
  educativeDegree: string,
  hasChildren?: boolean
};

let maria: Person = {
  name: "maria",
  age: 15,
  educativeDegree: "school",
  hasChildren: false
};

let person1: Person = {
  name: "John",
  age: 18,
  educativeDegree: "school",
};

console.log(maria.age, person1.educativeDegree);