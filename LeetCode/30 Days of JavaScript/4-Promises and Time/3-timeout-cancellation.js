/**
 * Question Link: https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearTimeout(timer);
    };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

/* 
    Notes:

    (1) "cancellable()" returns a function called "cancelFn" which is a closure. When we execute the closure, it clears 
        out the timer for "fn" to stop "fn" from being executed.

    (2) const cancel = cancellable(log, args, t); Here, "cancel" is storing the closure. This closure has access to 
        the outer variables in the parent function "cancellable", so it does keep track of the timer to execute "fn".

    (3) When we first call the "cancellable()", it starts the delay timer so that "fn" is executed after "t" 
        milliseconds. However, if we execute the returned closure "cancelFn" before the "t" milliseconds have passed,
        we have to stop "fn" execution by clearing out the timer using clearTimeout().

    (4) Since "cancel" contains the closure, cancel() needs to be called to clear the timer.

*/