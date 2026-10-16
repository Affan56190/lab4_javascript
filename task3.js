
function convert_to_PhoneNumber(numbers) {
    if (numbers.length !== 10 ||
        numbers.some(n => !Number.isInteger(n) || n < 0 || n > 9)) {
        throw new Error("Enter exactly 10 integers between 0 and 9.");
    }

    let phoneNumber = "(" + numbers.slice(0, 3).join("") + ") ";
    phoneNumber += numbers.slice(3, 6).join("") + "-";
    phoneNumber += numbers.slice(6, 10).join("");

    return phoneNumber;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(convert_to_PhoneNumber(numbers));
