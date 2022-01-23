// https://leetcode.com/problems/length-of-last-word/

export const getLengthOfLastWord = (s: string): number => {
    let stringArr = s.split(' ');
    stringArr = stringArr.filter((string) => string !== "")
    return stringArr[stringArr.length-1].length
}