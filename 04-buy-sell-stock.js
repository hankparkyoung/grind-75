// Given an array prices where prices[i] is the price of a given
// stock on the "i"th day, you want to maximize your profit by
// choosing a single day to buy one stock and choosing a different
// day in the future to sell that stock
// Return the max profit (if cannot profit, return 0)

// Examples:
const prices1 = [7, 1, 5, 3, 6, 4];
// output should be 5:
// buy on day 2 and sell on day 5
const prices2 = [7, 6, 4, 3, 1];
// output should be 0:
// no transactions done, max profit 0

const bruteForce = prices => {
    let maxProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length - i; j++) {
            possibleProfit = prices[j] - prices[i];

            if (possibleProfit > maxProfit) {
                maxProfit = possibleProfit;
            }
        }
    }

    return maxProfit;
}

console.log(bruteForce(prices1));
console.log(bruteForce(prices2));

const slidingWindow = prices => {
    let maxProfit = 0;
    let buyIndex = 0;
    let sellIndex = 1;

    while (sellIndex < prices.length) {
        if (prices[sellIndex] < prices[buyIndex]) {
            buyIndex = sellIndex;
            sellIndex += 1;
        } else {
            sellIndex++;
        }
        const profit = prices[sellIndex] - prices[buyIndex];
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

console.log(slidingWindow(prices1));
console.log(slidingWindow(prices2));
