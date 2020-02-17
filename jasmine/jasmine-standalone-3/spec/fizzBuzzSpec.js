describe('Fizzbuzz', function() {
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  // describe('knows when a number is', function() {
  //   it('divisible by 3', function(){
  //     expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  //   });
  // });

  // describe('knows when a number is NOT', function() {
  //   it('divisible by 3', function() {
  //     expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
  //   });
  // });

  describe('when playing, says', function() {
    it('"Fizz" when a number is divible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual('Fizz');
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual('Buzz');
    });

    it('"Fizzbuzz" when a number is divisible by 3 & 5', function() {
      expect(fizzbuzz.says(15)).toEqual('Fizzbuzz');
    });

    it('returns number when number is not divisble by either 3 or ', function() {
      expect(fizzbuzz.says(4)).toEqual(4);
    });
  })
});
