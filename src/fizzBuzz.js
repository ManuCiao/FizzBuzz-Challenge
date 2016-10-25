function Fizzbuzz() {
};


 Fizzbuzz.prototype.isDivisibleBy = function(divisor, number) {
    if (number % divisor === 0) {
     return true;
  }
 };

Fizzbuzz.prototype.says = function(number) {
  if (this.isDivisibleBy(15, number)) {
    return "FizzBuzz";
  }
  if (this.isDivisibleBy(3, number)) {
      return "Fizz";
  }
  if (this.isDivisibleBy(5, number)) {
    return "Buzz";
  }
  return number;
};
