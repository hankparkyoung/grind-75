// Given an array of integers nums and an integer target,
// return indices of two numbers such that they add up to target

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice

// Example 1:
// input: nums = [2, 7, 11, 15], target = 9
// output: [0, 1]
// since nums[0] + nums[1] == 9

const testNums = [2, 7, 11, 15];
const testTarget = 9;

const bruteForce = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

// console.log(bruteForce(testNums, testTarget));

const findSumIndices = (nums, target) => {
    const hashMap = {};
    hashMap[target - nums[0]] = 0;

    for (let i = 1; i < nums.length; i++) {
        const pairRequired = target - nums[i];
        if (nums[i] in hashMap) {
            return [hashMap[nums[i]], i];
        }
        hashMap[pairRequired] = i;
    }
}

console.log(findSumIndices(testNums, testTarget));