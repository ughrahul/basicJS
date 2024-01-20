const n1 = prompt("Enter your name ");
const n2 = prompt("Enter your age");
const yearsLeft = 18 - n2;

if (n2 > 18) {
  alert(n1 + " your are eligibile");
} else {
  alert(n1 + " you are not eligibile");
  alert("You need to wait for " + yearsLeft + " more years to be eligible");
}
