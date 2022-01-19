function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hours = convertHoursToMinutes(2);
console.log('Hours to minutes:', hours);

function getGreeting(name) {
  return 'Hello' + ' ' + (name) + '!';
}

var name = getGreeting('World');
console.log('getGreeting:', name);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var math = addAndMultiplyBy5(10, 5);
console.log('multiplyby5:', math);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var divide = multiplyAndDivideBy5(35, 10);
console.log('divideby5:', divide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(22, 7);
console.log('subtract', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('Fullname:', fullName);

function cube(number) {
  return number * number * number;
}

var thecube = cube(5);
console.log('the cube of:', thecube);
