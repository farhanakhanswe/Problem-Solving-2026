var printNumbersFrom1ToN = function (n) {
    if (n > 0) {
        printNumbersFrom1ToN(n - 1);
        console.log(n);
    }
}

printNumbersFrom1ToN(5);

/*
    As we keep calling the function, each "console.log(n)" is delayed and stacked on the call stack.
    When the recursion starts returning, the stack unwinds, and the numbers are printed in order. We see 1 first and 
    n at the end because the call stack follows LIFO - Last In, First Out.
*/