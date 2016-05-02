describe('BMI_UI - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#weight').val('90');
    $('#height').val('186');
    $('#calculate').trigger('click');
  });

  it("displays BMI value", function() {
    expect($('#display_value').text()).toBe('Your BMI is 26.01');
  });

  it("displays BMI message", function(){
    expect($('#display_message').text()).toBe('and you are Overweight');
  });
});
