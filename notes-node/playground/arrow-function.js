
//statement syntax
var square = (x) => {
  var result = x * x;
  return result;
};

//expression syntax
var newsquare = (x) => x*x; // var square = x => x*x ;

console.log(square(9));

console.log(newsquare(9));

var user = {
  name: 'Hiren',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHialt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};


user.sayHi();
user.sayHialt(1, 2, 3);
