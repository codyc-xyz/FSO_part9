const calculateBmi = (h: number, w: number): string => {
  const heightinM = h / 100
  const bmi = w / (heightinM * heightinM)
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal (healthy weight)'
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight'
  } else {
    return 'Obese'
  }
}

console.log(calculateBmi(185, 85))