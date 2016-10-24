function Fizzbuzz() {
};
 Fizzbuzz.prototype.isDivisibleByThree = function(number) {
    if (number % 3 === 0) {
     return true;
  }
 };

 Fizzbuzz.prototype.isDivisibleByFive = function(number) {
   if (number % 5 === 0) {
     return true;
   }
 };

 Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
   if (number % 15 === 0) {
     return true;
   }
 };

Fizzbuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return "FizzBuzz"
  }
  if (this.isDivisibleByThree(number)) {
      return "Fizz";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz"
  }
  return number;
};
