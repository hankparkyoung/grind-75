// a phrase is a palindrome if, after converting all uppercase letters
// into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward
// Given a string s, return true if a palindrome, false otherwise

// Examples:
const input1 = "A man, a plan, a canal: Panama";
// should return true
const input2 = "race a car";
// should return false
const input3 = " ";
// should return true

const isAlphanumeric = str => {
    return /^[a-zA-Z0-9]+$/.test(str);
}

const isPalindrome = str => {
    const cleanStrArr = str.toLowerCase().split("").filter(s => isAlphanumeric(s));

    if (cleanStrArr.length === 0 || cleanStrArr.length === 1) { return true; };

    let halfway = cleanStrArr.length / 2;

    if (halfway % 1 !== 0) {
        halfway = Math.floor(halfway);
        cleanStrArr.splice(halfway, 1);

    }

    const cleanStr = cleanStrArr.join("");
    const firstHalf = cleanStr.substring(0, halfway)
    const secondHalf = cleanStr.substring(halfway).split("").reverse().join("");

    // should probably do the above before joining first
    // to be able to reverse the second half as an array
    // before converting to string
    return firstHalf === secondHalf;
}

console.log(isPalindrome(input1));
console.log(isPalindrome(input2));
console.log(isPalindrome(input3));
