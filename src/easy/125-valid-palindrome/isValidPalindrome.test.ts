import {isValidPalindrome} from "./isValidPalindrome";

test('validity of palindromes', () => {
    const input1 = "A man, a plan, a canal: Panama";
    const input2 = "race a car";
    const input3 = " ";
    const input4 = "ab_a";
    const input5 = "0P";
    expect(isValidPalindrome(input1)).toBe(true);
    expect(isValidPalindrome(input2)).toBe(false);
    expect(isValidPalindrome(input3)).toBe(true);
    expect(isValidPalindrome(input4)).toBe(true);
    expect(isValidPalindrome(input5)).toBe(false);
})
