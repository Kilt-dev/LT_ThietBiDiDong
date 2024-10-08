// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
   
};
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
  
};
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
const calcBMI = (person) => {
    person.bmi = person.mass / (person.height ** 2);
    return person.bmi;
};
calcBMI(mark);
calcBMI(john);

console.log(calcBMI(mark));
console.log(calcBMI(john));
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.bmi > john.bmi) {
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
  } else {
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
  } 
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
