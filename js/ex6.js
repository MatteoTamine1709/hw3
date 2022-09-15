const enteredValue = prompt("Enter a number");

let str = '';
for (let i = 0; i <= 10; i++)
    str += `${enteredValue} * ${i} = ${enteredValue * i}\n`;

alert(str);