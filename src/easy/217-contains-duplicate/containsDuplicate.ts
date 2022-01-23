//https://leetcode.com/problems/contains-duplicate/

export const containsDuplicate = (numbers: number[]): boolean => {
    return (new Set(numbers)).size !== numbers.length;
}
