/**
 * INCORRECT SOLUTION
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let earning = 0;
    let smallestNum = 7;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < smallestNum) {
            smallestNum = prices[i];
            earning = 0;
        } else {
            earning = Math.max(prices[i], earning);
        }
    }

    const maxProfit = earning - smallestNum;

    return maxProfit > 0 ? maxProfit : 0;
};