class Student extends Person{
  constructor(firstName, lastName, age, gender, interest, grade, classes, studyType){
    super(firstName, lastName, age, gender, interest);
    this.grade = grade;
    this.classes = classes;
    this.studyType = studyType;
  };
};