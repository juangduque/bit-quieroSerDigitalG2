const myName: any = true;

const myLength: number = (<string>myName).length;

const userName: string = myName as string;

interface Person {
  name: string;
  age: number;
  height: number;
};

interface User {
  name: string;
  age: number;
  height: number;
  isAdmin: boolean;
};

const person1: Person = {
  name: "John",
  age: 30,
  height: 180,
};

(<User>person1)
person1 as User
