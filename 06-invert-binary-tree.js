// Given the root of a binary tree, invert the tree and return its root

// Examples:
const input1 = [4, 2, 7, 1, 3, 6, 9];
// should return: [4, 7, 2, 9, 6, 3, 1]
const input2 = [];
// should return: []

const invertTree = binTree => {
    let output = [];
    let treeLevel = 1;

    while (binTree.length > 0) {
        const nextLevel = binTree.splice(0, treeLevel).reverse();
        output = [...output, ...nextLevel];
        treeLevel = treeLevel * 2;
    }

    return output;
}

console.log(invertTree(input1));
console.log(invertTree(input2));
