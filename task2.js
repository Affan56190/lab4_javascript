
let givenP_no = 11;
let nextP = givenP_no + 1;
let isPrime = false;

while (true) {
    isPrime = true;

    for (let i = 2; i <= Math.sqrt(nextP); i++) {
        if (nextP % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Given prime number: " + givenP_no);
        console.log("Next prime number: " + nextP);
        break;
    }

    nextP++;
}
