 
1. //Write a Js function that reverse a number

const reverser = (num) => {
  const data = String(num);
  const lengthOfData = data.length;
  let reversedData = "";

  for (let i = lengthOfData - 1; i >= 0; i--) {
    reversedData += data[i];
  }

  console.log(reversedData);
};

reverser(12345);

2. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
  [ Formula : c/5 = (f-32)/9 


// Function to convert Celsius to Fahrenheit
const convertCelsiusToFahrenheit = (celsiusTemp) => {
  return (celsiusTemp * 9) / 5 + 32;
};

// Function to convert Fahrenheit to Celsius
const convertFahrenheitToCelsius = (fahrTemp) => {
  return ((fahrTemp - 32) * 5) / 9;
};

// Prompt user for Celsius temperature
const celsiusTemp = parseFloat(prompt("Enter the temperature in Celsius: "));
const convertedToFahrenheit = convertCelsiusToFahrenheit(celsiusTemp);
alert("YOUR CONVERTED TEMPERATURE IS: " + convertedToFahrenheit + "°F");

// Prompt user for Fahrenheit temperature
const fahrTemp = parseFloat(prompt("Enter the temperature in Fahrenheit: "));
const convertedToCelsius = convertFahrenheitToCelsius(fahrTemp);
alert("YOUR CONVERTED TEMPERATURE IS: " + convertedToCelsius + "°C");

///////////ALTERNATIVE WAY/////////////

const tempConverter = (temp, measurement = "c") => {
  if (measurement === "c") {
    return (9 * temp) / 5 + 32 + "fahrenheit";
  }
  return ((temp - 32) / 9) * 5 + "celsius";
};
console.log(tempConverter(45, "f"));

///////////////////////////////////////

3. /*Write a JavaScript program to calculate multiplication and division of 
two numbers.(use same function to achieve this)*/

const mathOperation = (num1, num2, operation = "multiply") => {
  if (operation === "multiply") {
    return "MULTIPLICATION RESULT IS: " + num1 * num2;
  }
  return "DIVISION RESULT IS: " + num1 / num2;
};

console.log(mathOperation(5, 3, "multiply"));
console.log(mathOperation(10, 2, "divide"));
