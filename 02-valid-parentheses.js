// Given a string s containing just the characters
// '(', ')', '{', '}', '[', ']', determine if the
// input string is valid

// An input string is valid if:
// 1. Open brackets must be closed by the same type
// 2. Open brackets must be closed in the correct order
// 3. Every close bracket has a corresponding open of the same type

// Example:
// input: s = "()[]{}"
// output: true
// Example:
// input: s = "([{])}"
// output: false
// Example:
// input: s = "([{}])"
// output: true

const exampleTrue = "([{}])";
const exampleFalse = "([{])}";

const validBrackets = str => {
    if (str.length % 2 !== 0) { return false; }
    // can also check if we start with a closing, or end with an opening

    const brackets = str.split('');
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const needsPair = []; // stack (push and pop)
    let valid = true;

    brackets.forEach(b => { // can change to a for loop and break upon false
        // switch (b) {
        //     case '(':
        //     case '{':
        //     case '[':
        //         needsPair.push(b);
        //         break;
        //     case ')':
        //         if (needsPair[needsPair.length - 1] === '(') {
        //             needsPair.pop();
        //         } else {
        //             valid = false;
        //         }
        //         break;
        //     case '}':
        //         if (needsPair[needsPair.length - 1] === '{') {
        //             needsPair.pop();
        //         } else {
        //             valid = false;
        //         }
        //         break;
        //     case ']':
        //         if (needsPair[needsPair.length - 1] === '[') {
        //             needsPair.pop();
        //         } else {
        //             valid = false;
        //         }
        //         break;
        // }
        if (b === '(' || b === '[' || b === '{') {
            needsPair.push(b);
            return;
        }
        if (needsPair[needsPair.length - 1] === pairs[b]) {
            needsPair.pop(b);
            return;
        }
        valid = false;
        return;
    })

    return valid;
}

console.log(`should be true: ${validBrackets(exampleTrue)}`);
console.log(`should be false: ${validBrackets(exampleFalse)}`);