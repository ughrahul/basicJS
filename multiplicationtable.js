const generateMultiplicationTable = (number, limit) => {
  for (let i = 1; i <= limit; i++) {
    const result = number * i;
    alert(number + " × " + i + " = " + result);
  }
};

generateMultiplicationTable(3, 10);
