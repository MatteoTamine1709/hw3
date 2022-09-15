const enteredDay = prompt("Enter a day of the week.");

switch (enteredDay) {
    case "sun":
        alert(`You entered: ${enteredDay}.\nThe following day is mon.`);
        break;
    case "mon":
        alert(`You entered: ${enteredDay}.\nThe following day is tue.`);
        break;
    case "tue":
        alert(`You entered: ${enteredDay}.\nThe following day is wed.`);
        break;
    case "wed":
        alert(`You entered: ${enteredDay}.\nThe following day is thu.`);
        break;
    case "thu":
        alert(`You entered: ${enteredDay}.\nThe following day is fri.`);
        break;
    case "fri":
        alert(`You entered: ${enteredDay}.\nThe following day is sat.`);
        break;
    case "sat":
        alert(`You entered: ${enteredDay}.\nThe following day is sun.`);
        break;

    default:
        alert(`Sorry, ${enteredDay} is not a valid entry.`);
        break;
}