//https://leetcode.com/problems/valid-anagram/

export const isAnagram = (string1: string, string2: string): boolean => {

    const sourceArray = string1.split('').sort();
    const targetArray = string2.split('').sort();

    if (sourceArray.length !== targetArray.length) {
        return false
    }

    return sourceArray.every((value, index) => value === targetArray[index])
}