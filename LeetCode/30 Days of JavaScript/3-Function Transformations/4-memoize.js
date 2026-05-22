/**
 * Question Link: https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cacheMap = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cacheMap.has(key)) return cacheMap.get(key);

        const result = fn(...args);

        cacheMap.set(key, result);
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

/*
    NOTES:

    (1) The question's description can be confusing so I'll try to simplify it for you.

    (2) We are given a function "fn" and we need to return a memoized version of that function. If we
        look at the code template LeetCode provided, we can see that fn is a callback function that is  
        passed into the memoize function and the memoize function is a returning a closure.

        A closure is function that has access to the variables in the function it was created in even after
        the outer function has stopped executing. In this scenario, the closure will have access to the variables
        created in memoize function even after the memoize function has stopped executing. The fn parameter of 
        memoize function acts like a local variable since function parameters are local variables to the function. 
        
        So, the closure will have access to fn. Furthermore, we need to code a map object for the cached values 
        in the outer memoize function so that the closure will have access to that as well.

    (3) The memoize function is returning a closure which has a rest parameter. The rest parameter allows
        indefinite number of arguments to be passed to the closure.

    (4) So, in our solution we have 3 functions we should be concerned with:
            (a) The parent function memoize function 
            (b) The callback function fn that's passed to the memoize function
            (c) The retured anonymous function which is a closure

            Here's the provided code template:

                function memoize(fn) {
                
                    return function(...args) {
                    
                    }
                }

                /** 
                 * let callCount = 0;
                 * const memoizedFn = memoize(function (a, b) {
                 *	 callCount += 1;
                *   return a + b;
                * })
                * memoizedFn(2, 3) // 5
                * memoizedFn(2, 3) // 5
                * console.log(callCount) // 1 
               
            We are storing the closure inside the memoizeFn variable so that we can keep referring to the
            same closure which will have access to the cached values ,and the callback function that
            was passed to the memoize function which could be either sum or fib or factorial or any other function.
            In this example, the callback function is the sum function mentioned in the job description.
            The callback function is passed as an anonymous function directly instead of creating the
            sum function outside and then passing the function name as an argument into the memoize function. 

            
    (5) Now, coming back to the question description. A memoized function is a function that will never be 
        called twice with the same inputs. Instead it will return a cached value.

        The job description further gives examples of 3 input functions: sum, fib and factorial. But, in our solution,
        we do not have to care about the logic for these functions which are mentioned in the description. 
        Our only concern is that, whatever input function we pass to the memoize function, the memoize function 
        should simply return the memoized version of that function.

        According to the code template, we have to do that by returning a closure. Inside the closure, 
        we have to execute the callback function fn. The closure is accepting arguments and we have to use those
        arguments as inputs for the callback function fn which will be used inside the closure.

        After we execute the callback function inside the closure, we have to map the inputs with the 
        result returned from the callback function using a map object, so that if the same inputs are passed 
        to the same closure, we will fetch the cached value from the map instead of executing the callback 
        function again since it cannot be called twice with the same inputs to maintain memoization.

    (6) The expected output for this question is confusing because in the description, we are asked to
        return a memoized version of the callback function; but, in the examples, we can see the output
        is an array of values. Actually, all we have to do is create the memoized version of the callback
        which is the closure we are returning to the memoize function. If we look at the code template,
        the memoized version is the closure which is all we need to care about building.

        * let callCount = 0;
        * const memoizedFn = memoize(function (a, b) {
        *	 callCount += 1;
        *   return a + b;
        * })
        * memoizedFn(2, 3) // 5
        * memoizedFn(2, 3) // 5
        * console.log(callCount) // 1 



*/