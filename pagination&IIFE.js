//pagination by default function
const pagination = (page = 1, size = 5) => {
  for (let i = page; i <= size; i++) {
    console.log(i);
  }
};

pagination();

// inline function --> assigning nameless/anonymous function to a variable which can be used repeatedly wherever we want
//reusability.
const footer = function () {
  console.log("Anonymous");
};

footer();
footer();
footer();

//Closure function --> function that return harcorded variable stored inside the function.

const secret = () => {
  const password = "password";
  return password;
};
console.log(secret());

//IMPLICIT FUNCTION
const a = parseInt(prompt("Enter the first integer"));
const b = parseInt(prompt("Enter the second integer"));

const addit = (x, y) => x + y;
const result = addit(a, b);

alert(result);

//IIFE(Immediately Invoke Functional Expression)--> scripts to add dummy data inside application during first run

(function (a, b) {
  console.log(a + b);
  console.log("Hello I'm IIFE");
})(1, 2);
