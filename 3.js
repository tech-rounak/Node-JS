function student(roll, name, marks) {
  this.roll = roll;
  this.name = name;
  this.marks = marks;
  this.getDetails = () => {
    return "Name=" + this.name + " Roll=" + this.roll + " Marks=" + this.marks;
  };
}

let s1 = new student(12, "Rounak", 23);
console.log(s1.getDetails());
