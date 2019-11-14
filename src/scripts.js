export var MyTriangle = function (a, b, c){
  this.sidea = a,
  this.sideb = b,
  this.sidec = c
}

 MyTriangle.prototype.checkType = function() {
   let result = "";
   if (this.sidea <= 0 || this.sideb <= 0 || this.sidec <= 0) {
     result = "NOT A TRIANGLE!!!!";
   }else if (this.sidea === this.sideb && this.sideb === this.sidec) {
     result = "You have an Equilateral triangle";
   }else if (this.sidea === this.sideb || this.sidea === this.sidec || this.sideb === this.sidec) {
     result = "You have an Isosceles triangle";
   }else if (this.sidea != this.sideb && this.sidea != this.sidec && this.sidec != this.sideb) {
     result = "You have an scalene triangle";
   }
     return result;
};
