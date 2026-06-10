/**
 * Question Link: https://leetcode.com/problems/interval-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(...args);

    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearInterval(intervalId);
    }
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */


/*
    Notes:

    (1) fn needs to be executed immediately, and then it will get executed again after every t milliseconds.

    (2) If we look at the comments provided, the closure that cancellable function returns
        is assigned to the variable "cancel". This closure has access to the interval timer in the parent function.

    (3) So, now we can use the cancel variable to cancel the interval timer.

*/