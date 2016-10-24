
var FizzBuzz = function(){};

FizzBuzz.prototype.says = function(number) {
  if (this.isDivisibleByThree(number)) {
    return "Fizz";
  }
  if (this.isDivisibleByFive(number)) {
    return "Fizz";
  }
  if (this.isDivisibleByFifteen(number)) {
    return "FizzBuzz";
  }
  return number
};
