/**
 * Question Link: https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, millis);
    });

    // in short -> return new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/*
    Notes:

    (1) The question wants us to return a promise that resolves after millis milliseconds. Every async function 
        returns a promise. When we create a promise object, JS automatically  provides resolve and reject functions
        to the promise object's callback function.

            new Promise(function(resolve){})

        A promise object can have 3 states:
            (a) pending
            (b) fulfilled
            (c) rejected
            
        The initial state of a promise is pending and the purpose of resolve() is to fulfill the promise, 
        which simply means the promise is completed. 

    (2) The question says that the promise object can resolve any value, meaning it can return any value when it 
        is fulfilled; so, we don't have to pass any value to the resolve() and leave the resolve() as it is.

    (3) What we now need to do is call the resolve function of the promise object after millis milliseconds using
        setTimeout().

 */