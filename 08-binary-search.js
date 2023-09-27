// Given array of integers nums sorted in ascending order and integer
// target, write function to search target in nums - if target exists,
// return index, otherwise return -1
// Must be O(log n) complexity

// Examples:
const input = [-1, 0, 3, 5, 9, 12];
const target1 = 9;
// output: 4 (index of 4)
const target2 = 2;
// output: -1 (does not exist)

const binarySearch = (nums, target) => {
    const lowest = nums[0];
    const highest = nums[nums.length - 1];
    let index = 0;
    if (target < lowest || target > highest) { return -1; };

    while (nums.length > 1) {
        const middleIndex = Math.floor(nums.length / 2);
        const middle = nums[middleIndex];

        if (target === middle) {
            return index + middleIndex;
        } else if (target > middle) {
            nums = nums.slice(middleIndex);
            index += middleIndex;
        } else {
            nums = nums.slice(0, middleIndex);
        }
    }

    return nums[0] === target ? index : -1;
}

console.log(binarySearch(input, target1));
console.log(binarySearch(input, target2));
