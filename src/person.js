function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
};

Person.prototype.calculate_bmi = function(type) {
  calculator = new BMICalculator();
  if(type == "metric"){
    calculator.metric_bmi(this);
  }
  else if(type == "imperial"){
    calculator.imperial_bmi(this);
  }
};
