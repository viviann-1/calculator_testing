const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  test('can add two small positive numbers', () => {
    const expected = 5;
    const actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 100;
    const actual = sum(50, 50);
    expect(actual).toBe(expected);
    
  });

  test('can add two negative numbers', () => {
    const expected = -10;
    const actual = sum(-5, -5);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    const expected = 300;
    const actual = sum(300, 0);
    expect(actual).toBe(expected);
    
  });
});

describe('subtract', () => {
  test('can subract two positive numbers', () =>{
    const expected = 5;
    const actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () =>{
    const expected = 1000;
    const actual = subtract(3000, 2000);
    expect(actual).toBe(expected);
 
  });

  test('can subtract two negative numbers', () =>{
    const expected = -25;
    const actual = subtract(-50, -25);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () =>{
    const expected = 15;
    const actual = subtract(15, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two positive numbers', () =>{
    const expected = 100;
    const actual = multiply(10, 10);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () =>{
    const expected = 900;
    const actual = multiply(30, 30);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () =>{
    const expected = 25;
    const actual = multiply(-5, -5);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () =>{
    const expected = 0;
    const actual = multiply(0, 50);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test('can divide two positive numbers', () =>{
    const expected = 8;
    const actual = divide(16, 2);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () =>{
    const expected = 30;
    const actual = divide(90, 3);
    expect(actual).toBe(expected);
    
  });

  test('can divide two negative numbers', () =>{
    const expected = 2;
    const actual = divide(-100, -50);
    expect(actual).toBe(expected);

  });
  test('can divide by zero', () =>{
    const expected = 0;
    const actual = divide(0, 50);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can modulus to positive numbers', () =>{
    const expected = 1;
    const actual = modulus(5, 2);
    expect(actual).toBe(expected);
  });

  test('can modulus to large positive numbers', () =>{
    const expected = 5;
    const actual = divide(1000, 200);
    expect(actual).toBe(expected);
  });

  test('can modulus to negative numbers', () =>{
    const expected = 2.5;
    const actual = divide(-5, -2);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {
  test('number is even', () =>{
    const expected = true;
    const actual = even(4);
    expect(actual).toBe(expected);
  });

  test('number is NOT even', () =>{
    const expected = false;
    const actual = even(3);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {
  test('number is odd', () =>{
    const expected = true;
    const actual = odd(17);
    expect(actual).toBe(expected);
  });

  test('number is NOT odd', () =>{
    const expected = false;
    const actual = odd(22);
    expect(actual).toBe(expected);
  });

});
