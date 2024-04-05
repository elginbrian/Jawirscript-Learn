function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(2, height);
    return Math.round(bmi);
}

console.log(bmiCalculator(40, 170));