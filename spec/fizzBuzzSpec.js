describe('Fizzbuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
   });

    describe('knows when a number is', function(){
      it('returns Fizz when a number is divisible by 3', function(){
        expect(fizzbuzz.says(3)).toEqual("Fizz");
      });

      it('returns Fizz when a number is divisible by 5', function(){
        expect(fizzbuzz.says(5)).toEqual("Buzz");
      });

      it('returns FizzBuzz when a number is divisible by 15', function(){
        expect(fizzbuzz.isDivisibleByFifteen(15)).toEqual("FizzBuzz");
      });
    });
  
});
