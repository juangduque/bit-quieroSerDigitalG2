class Teacher extends Person{
  constructor(
      firstName, 
      lastName,
      age,
      gender,
      interest,
      groupDirector,
      title,
      salary,
      classes,
      prefix
    ){
    super(firstName, lastName, age, gender, interest);
    this.groupDirector = groupDirector;
    this.title = title;
    this.salary = salary;
    this.classes = classes;
    this.prefix = prefix;
  };

  greetingAsTeacher(){
    return "Hello, my name is " + this.prefix + " " + this.name + " and I teach " +  this.classes[0]
  };
};