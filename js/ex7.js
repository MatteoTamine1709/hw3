const enteredHour = prompt("Enter the hour: ");
const enteredMinute = prompt("Enter the minute: ");
const enteredSecond = prompt("Enter the second: ");

if (isNaN(enteredHour) || isNaN(enteredMinute) || isNaN(enteredSecond)) {
    if (enteredHour < 0 || enteredHour > 23 || enteredMinute < 0 || enteredMinute > 59 || enteredSecond < 0 || enteredSecond > 59) {
        alert("Sorry, one of those is not a valid number.");
    }
} else {
    const enteredTime = `${enteredHour}h${enteredMinute}m${enteredSecond}s`;
    //compute time one second later
    let nextSecond = Number(enteredSecond) + 1;
    let nextMinute = Number(enteredMinute);
    let nextHour = Number(enteredHour);
    if (nextSecond > 59) {
        nextSecond = 0;
        nextMinute++;
        if (nextMinute > 59) {
            nextMinute = 0;
            nextHour++;
            if (nextHour > 23) {
                nextHour = 0;
            }
        }
    }
    const nextTime = `${nextHour}h${nextMinute}m${nextSecond}s`;
    alert(`Time input: ${enteredTime}.\nOne second later: ${nextTime}.`);
}