// Question: Find the factorial of a number

var findFactorial = function (n) {
    if (n === 1) {
        return 1;
    }

    return n * findFactorial(n - 1);
}

console.log(findFactorial(5));