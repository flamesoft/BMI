describe("BMICalculator", function() {
  var bmi_calculator;
  var person;
  var person_imperial;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    person_imperial = new Person({weight: 198, height:73})
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function(){
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  it("calculates BMI for a person using imperial method", function(){
    calculator.imperial_bmi(person_imperial);
    expect(person_imperial.bmiValue).toEqual(26.12);
  });

});
