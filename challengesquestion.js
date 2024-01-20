/*
1. Write a JavaScript program that prints 'Hello World'.
console.log("Hello World");
alert("Hello World");



2.Write a JavaScript program to set the value of PI.
const pi = 3.14;
console.log(pi);
const r = prompt("Give the radius for circle");
const area = 2 * pi * r;
alert("Your area for given radius is:" + area);



3.Write a JavaScript program to compute the sum of the two given integers. 
If the two values are the same, then return triple their sum.
const num1 = prompt("ENTER THE FIRST INTEGER:");
const num2 = prompt("ENTER THE SECOND INTEGER:");
const a = Number(num1);
const b = Number(num2);
if (a === b) {
  alert("YOUR TRIPLE THE SUM IS:" + 3 * (a + b));
} else {
  alert("YOUR SUM IS:" + (a + b));
}



4.Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
const num3 = prompt("GIVE ME A POSITIVE NUMBER");
const num4 = Number(num3);
if (num4 > 0) {
  if (num4 % 3 === 0) {
    alert(num4 + "is a multiple of 3 ");
  } else if (num4 % 7 === 0) {
    alert(num4 + " is multiple of 7");
  } else {
    alert(num4 + " is not multiple of 3 or 7");
  }
} else {
  alert("ENTER THE POSITIVE NUMBER");
}



5.Write a JavaScript program to get the current date.
const currentDate = new Date();
alert("Current Date and Time:" + new Date().toString());



6.Write a JavaScript program to calculate multiplication and division of 
two numbers.(use same function to achieve this)
const num1 = Number(prompt("ENTER FIRST NUMBER: "));
const num2 = Number(prompt("ENTER SECOND NUMBER: "));

if (!num1 == 0 && !num2 == 0) {
  const multi = num1 * num2;
  const div = num1 / num2;
  alert("YOUR MULTIPLICATION IS: " + multi + " AND YOUR DIVISION IS: " + div);
} else {
  alert("Please enter non-zero numbers for both inputs.");
}



7.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C

const celsiusTemp = parseFloat(prompt("Enter the temperature in Celsius: "));
const convertedToFahrenheit = (celsiusTemp * 9) / 5 + 32;
alert("YOUR CONVERTED TEMPERATURE IS: " + convertedToFahrenheit + "°F");

const fahrTemp = parseFloat(prompt("Enter the temperature in Fahrenheit: "));
const convertedToCelsius = ((fahrTemp - 32) * 5) / 9;
alert("YOUR CONVERTED TEMPERATURE IS: " + convertedToCelsius + "°C");

*/

//8.Write a JavaScript program to count the number of vowels in a given string.
// Get user input
const inputString = prompt("Enter a string:");

// Count the number of vowels
const numOfVowels = (inputString.match(/[aeiouAEIOU]/g) || []).length;

// Display the result
alert(`The number of vowels in "${inputString}" is: ${numOfVowels}`);
