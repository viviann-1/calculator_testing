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

  test('can subtract two large numbers', () =>{
    const expected = 1000;
    const actual = subtract(3000, 2000);
    expect(actual).toBe(expected);
 
  });

  test('can subtract two negative numbers', () =>{
    const expected = -25;
    const actual = subtract(-50, -25);
    expect(actual).toBe(expected);
  });

  test('can subtract sero', () =>{
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

  test('can multiply two large numbers', () =>{
    const expected = 900;
    const actual = multiply(30, 30);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () =>{
    const expected = 25;
    const actual = multiply(-5, -5);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
