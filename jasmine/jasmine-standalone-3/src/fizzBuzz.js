var Fizzbuzz = function() {};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

// Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
//   return this._isDivisibleBy(number, 15);
// };

// Fizzbuzz.prototype.isDivisibleByThree = function(number) {
//   return this._isDivisibleBy(number, 3);
// };

Fizzbuzz.prototype.says = function(number) {
  if (this._isDivisibleBy(number,15)) {
    return 'Fizzbuzz';
  };
  if (this._isDivisibleBy(number, 3)) {
    return 'Fizz';
  };
  if (this._isDivisibleBy(number, 5)) {
    return 'Buzz';
  };
  return number;
};

Fizzbuzz.prototype.display = function() {
  var i;
  for (i=0; i < 101; i++) {
    console.log(this.says(i));
  };
};