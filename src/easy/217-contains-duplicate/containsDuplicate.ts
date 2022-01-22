//https://leetcode.com/problems/contains-duplicate/

export const containsDuplicate = (numbers: number[]): boolean => {
    return numbers.some((number:number) => {
        return numbers.indexOf(number) !== numbers.lastIndexOf(number)
    })
}