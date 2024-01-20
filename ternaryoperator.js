const age = prompt("ENTER YOUR AGE");
const remainAge = 18 - age;

const result =
  age >= 18
    ? alert("YOU CAN VOTE")
    : alert("YOU CANNOT VOTE. WAIT FOR: " + remainAge + "Years");
