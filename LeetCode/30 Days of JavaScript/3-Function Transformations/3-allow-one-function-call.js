// Question Link: https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isCalledOnce = false;
    return function(...args){
        if (isCalledOnce) return undefined;

        isCalledOnce = true;
        return fn(...args);
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

/*
    (1) This question is very confusing. I had to read the question and its examples few times to understand
        what they are asking for. Anyway, here's a breakdown for it:

    (2) "Given a function fn", this fn function is actually a callback function that is being passed to the
        "once" function. If you look at the code template you would see, 

            var once = function(fn) {
                return function(...args){
                }
            };

        And underneath this, you will see 
        /**
         * let fn = (a,b,c) => (a + b + c)
         * let onceFn = once(fn)
         *
         * onceFn(1,2,3); // 6
         * onceFn(2,3,6); // returns undefined without calling fn
        
    (3) If we look at our default code template, The "once" function returns a closure function which has 
        a rest parameter "...args" which means it can take indefinite number of arguments.
        We are storing this closure in the onceFn variable and so we can directly pass arguments to it and execute the 
        closure. 
                    let fn = (a,b,c) => (a + b + c)
                    let onceFn = once(fn)
                    onceFn(1,2,3); 

        This closure has access to the callback function fn that was passed to the "once" function when we
        initialized the "onceFn" variable. 

    (4) Now, let's look at the requirements for the question, 
            (a) The first time the returned function is called, it should return the same result as fn. 
            (b) Every subsequent time it is called, it should return undefined.
        
        By returned function, LeetCode is referring to the closure.

        So, that means we have to execute the callback function fn inside the closure and add the condition
        that this closure will only execute the callback function and return its value the first time it is called. 
        The rest of the times, we will return undefined.

                return function(...args){
                    if(isCalledOnce) return undefined;
                    isCalledOnce = true;
                    return fn(...args);
                }

*/