function roundMe(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

let roundedValues = numbers.map(number => Math.round(number));
if (roundedValues.length === 1) {
return roundedValues[0];
}
return roundedValues;
}
console.log(roundMe());
console.log(roundMe(4.7));
console.log(roundMe(4.7, 4.4));
console.log(roundMe(2.3, 5.8, 7.2));