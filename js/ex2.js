const enteredName = prompt("What is your name?");
const enteredCredits = prompt("How many credits have you completed at college?");

if (isNaN(enteredCredits) && n % 1 !== 0) {
    alert(`Sorry, ${enteredCredits} is not a valid entry.`);
} else {
    const getGradeStanding = (credits) => {
        if (credits < 30) {
            return "Freshman";
        } else if (credits < 60) {
            return "Sophomore";
        } else if (credits < 90) {
            return "Junior";
        }
        return "Senior";
    };

    alert(`Hello, ${enteredName}!\nYour grade standing is ${getGradeStanding(enteredCredits)}`);
}