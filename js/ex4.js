const number1 = prompt("Enter a number");
const number2 = prompt("Enter another number");

if (isNaN(number1) || isNaN(number2)) {
    alert("Sorry, one of those is not a valid number.");
} else {
    const sum = Number(number1) + Number(number2);
    // addition substraction multiplication division remainder
    alert(`The sum of ${number1} and ${number2} is ${sum}.\nThe difference is ${number1 - number2}.\nThe product is ${number1 * number2}.\nThe quotient is ${number1 / number2}.\nThe remainder is ${number1 % number2}.`);

}