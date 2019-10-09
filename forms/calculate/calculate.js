

function calcAvgSquare(x, y, z) {
   return ((x + y + z)/3)* Math.pow(x, 2)
}

let num1 = Number(prompt("What is your first number?"))

let num2 = Number(prompt("What is your second number?"))

let num3 = Number(prompt("What is your third number?"))

alert( `The answer using ${num1}, ${num2}, and ${num3} is ${(calcAvgSquare(num1, num2, num3))}`);

