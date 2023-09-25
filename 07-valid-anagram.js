// Given two strings s and t, return true if
// t is an anagram of s, false otherwise

// Examples:
const input1a = 'anagram';
const input1b = 'nagaram';
// output: true
const input2a = 'rat';
const input2b = 'car';
// output: false

const isAnagram = (s, t) => {
    if (s.length !== t.length) { return false; }
    const sLetters = s.split('');
    const tLetters = t.split('');

    for (let i = 0; i < sLetters.length; i++) {
        const index = tLetters.indexOf(sLetters[i]);
        if (index === -1) { return false; }
        tLetters.splice(index, 1);
    }

    return true;
};

console.log(isAnagram(input1a, input1b));
console.log(isAnagram(input2a, input2b));
