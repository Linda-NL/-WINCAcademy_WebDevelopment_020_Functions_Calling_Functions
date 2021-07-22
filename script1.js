// PART 1: HEY KIDDO

const checkIfAdult = function (age) {
    return age >= 18;
};

const greetingPerson = function (age) {
    const adultAge = checkIfAdult(age);
    if (adultAge === true) {
        greetingType = 'Hello there!';      // comment 1
    } else {
        greetingType = 'Hey Kiddo!';
    };
    return greetingType;
};

console.log(greetingPerson(6));
console.log(greetingPerson(17));
console.log(greetingPerson(18));
console.log(greetingPerson(26));



// comment 1
/* At first I put const in front of greetingType, but then the code wasn't working.
The error message was: 'greetingType' is declared but it's value is never read.
For now, I have no clue to why this is wrong. */