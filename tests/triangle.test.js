import { MyTriangle } from './../src/scripts.js';

describe("myTriangle", () => {

  test("Should not be a triangle", () => {
    var result = new MyTriangle(0,0,0);
    expect(result.checkType()).toEqual("NOT A TRIANGLE!!!!");
  });
  test("Should be Equilateral", () => {
    var result = new MyTriangle(2,2,2);
    expect(result.checkType()).toEqual("You have an Equilateral triangle");
  });
  test("Should be Isosceles", () => {
    var result = new MyTriangle(2,2,3);
    expect(result.checkType()).toEqual("You have an Isosceles triangle");
  });
  test("Should be scalene", () => {
    var result = new MyTriangle(2,3,4);
    expect(result.checkType()).toEqual("You have an scalene triangle");
  });
});
