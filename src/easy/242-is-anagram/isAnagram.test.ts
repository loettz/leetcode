import {isAnagram} from "./isAnagram";

test('detect isAnagram true', () => {
    const testString: string = "anagram"
    const testString2: string = "nagaram"
    expect(isAnagram(testString, testString2)).toBe(true);
})

test('detect isAnagram false', () => {
    const testString: string = "rat"
    const testString2: string = "car"
    expect(isAnagram(testString, testString2)).toBe(false);
})

test('detect isAnagram false (target contains source)', () => {
    const testString: string = "rat"
    const testString2: string = "rata"
    expect(isAnagram(testString, testString2)).toBe(false);
})

test('detect isAnagram false', () => {
    const testString: string = "aaabbb"
    const testString2: string = "aabbcc"
    expect(isAnagram(testString, testString2)).toBe(false);
})

