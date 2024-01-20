const a = parseFloat(prompt("ENTER FIRST INTEGER"));
const b = parseFloat(prompt("ENTER SECOND INTEGER"));

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function evenCheck(a, b) {
  let aCheck = a % 2 === 0;
  let bCheck = b % 2 === 0;
  return { a, aCheck, b, bCheck };
}

const ad = add(a, b);
alert("SUM: " + ad);

const su = sub(a, b);
alert("DIFFERENCE: " + su);

const mu = multi(a, b);
alert("MULTIPLICATION: " + mu);

const di = div(a, b);
alert("DIVISION: " + di);

const eC = evenCheck(a, b);
console.log("Even Number is: ", eC);
