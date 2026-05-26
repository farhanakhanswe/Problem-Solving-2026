/**
 * Question Link: https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

/* 
    Notes:
    
    (1) A Promise is a placeholder for a value that will be available in the future, so we use await to pause
        execution of the current async function until that value is resolved.

    (2) Here is a more simplified version:
     
          var addTwoPromises = async function(promise1, promise2) {
            const num1 = await promise1;
            const num2 = await promise2;

            return num1 + num2;
        };

        Here, we are first waiting to get a value back from promise1 and assign it to num1.
        Then, we are waiting to get a value back from promise2 and assign it to num2.
        Finally, we are returning the sum of num1 and num2
      
    
*/
