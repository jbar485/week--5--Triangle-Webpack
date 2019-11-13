export function myTriangle(a, b, c){
  let result = "";
  if (a <= 0 || b <= 0 || c <= 0) {
    result = "NOT A TRIANGLE!!!!";
  } else if (a === b && b === c) {
    result = "You have an Equilateral triangle";
  }else if (a === b || a === c || b === c) {
    result = "You have an Isosceles triangle";
  } else if (a != b && a != c && c != b) {
    result = "You have an scalene triangle";
  } else {
    result = "What did you do?";
  }
    return result;
}
