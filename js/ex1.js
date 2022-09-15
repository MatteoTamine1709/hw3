const enteredValue = prompt("Enter a number between 1 and 100.");
if (enteredValue < 1 || enteredValue > 100 || isNaN(enteredValue)) {
    alert(`Sorry, ${enteredValue} is not a valid entry.`);
} else {
    alert(`Thank you! You entered '${enteredValue}', a valid number.`);
}