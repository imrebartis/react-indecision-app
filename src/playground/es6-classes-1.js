class Person {
  constructor(name = 'Anonymous', age = 1) {
    this.name = name;
    this.age = age;
  }
  getGreating() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Jay Bead', 6);
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreating());
