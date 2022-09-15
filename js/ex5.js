const password = prompt("Enter a password.");

const correctPassword = "secret";
const MAX_NUMBER_OF_ATTEMPTS = 3;
let numberOfAttempt = 0;

while (password !== correctPassword && numberOfAttempt < MAX_NUMBER_OF_ATTEMPTS) {
    numberOfAttempt++;
    alert(`Sorry, that is incorrect. You have ${MAX_NUMBER_OF_ATTEMPTS - numberOfAttempt} attempt(s) remaining.`);
    password = prompt("Enter a password.");
}

if (password === correctPassword) {
    alert(`You entered the correct password after ${numberOfAttempt} attempt(s).`);
} else {
    alert(`Your account is locked! You failed to enter the correct password ${MAX_NUMBER_OF_ATTEMPTS} times.`);
}