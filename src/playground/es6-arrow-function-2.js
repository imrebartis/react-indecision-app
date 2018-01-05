// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
  const user = {
    name: 'Joy',
    cities: ['Phily', 'LA', 'Cork'],
    printPlacesLived() {
    //   this.cities.forEach((city) => {
    //       console.log(this.name + ' has lived in ' + 'city');
    //   });
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(user.printPlacesLived());
  
  // Challenge area
  
  const multiplier = {
    numbers: [34, 12, 21],
    multiplyBy: 3,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
  };
  
  console.log(multiplier.multiply());
  