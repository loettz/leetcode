// https://leetcode.com/problems/valid-palindrome/

export const isValidPalindrome = (input: String): boolean => {
    let cleanedString = input.replace(/(\W*)(\s*)([-_]*)/g, "");
    cleanedString = cleanedString.toLowerCase();

    const reverseString = cleanedString.split("").reverse().join("");
    return cleanedString === reverseString;
}
