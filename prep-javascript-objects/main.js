var person = {
  firstName: 'Robert',
  lastName: 'Curtis',
  hobby: 'surfing'
};
const firstName = 'Robert ';
const lastName = 'Curtis ';
const hobby = 'Surfing';
console.log(person);

const fullName = firstName + lastName;
console.log("The person's name is:", fullName);

person.job = 'Uber Eats Driver';
const job = 'Uber Eats Driver';
console.log("This person's current job is:", job);

person.previousJob = 'Franciscan Friar';
const previousJob = 'Franciscan Friar';
console.log("This person's previous job was a:", previousJob);

console.log(hobby);
console.log(person);
