// Given heads of two sorted linked lists list1 and list2
// merge the two lists into one sorted list - should be made
// by splicing together the nodes of the first two lists
// and return the head of the new list
// both list1 and list2 are sorted in non-decreasing order

// Example:
const testList1 = [1, 2, 4];
const testList2 = [1, 3, 4, 6];

// Output: [1, 1, 2, 3, 4, 4, 6];

const mergedList = (l1, l2) => {
    const merged = [];

    while (l1.length !== 0 && l2.length !== 0) {
        if (l1[0] <= l2[0]) {
            merged.push(l1.shift());
        } else {
            merged.push(l2.shift());
        }
    }
    if (l1.length !== 0) { merged.push(...l1); }
    if (l2.length !== 0) { merged.push(...l2); }

    return merged;
};

console.log(mergedList(testList1, testList2));
