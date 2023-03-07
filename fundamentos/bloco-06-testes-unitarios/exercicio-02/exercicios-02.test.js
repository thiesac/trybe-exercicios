const myFizzBuzz = require('./exercicio-02');

it('myFizzBuzz() returns "fizzbuzz" if num is divisible by 3 and 5. Returns "fizz" if num is only divisible by 3. Returns "buzz" if num is only divisible by 5. Returns the number itself case num is not divisible by 3 or 5. returns false if num is not a number', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
    expect(myFizzBuzz(9)).toBe("fizz");
    expect(myFizzBuzz(10)).toBe("buzz");
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('a')).toBe(false);
})