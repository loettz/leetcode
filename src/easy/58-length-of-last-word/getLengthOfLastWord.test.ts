import {getLengthOfLastWord} from "./getLengthOfLastWord";

test('detect duplicates', () => {
    const input1 = "Hello World";
    const input2 = "   fly me   to   the moon  ";
    const input3 = " dreizehn ";
    expect(getLengthOfLastWord(input1)).toBe(5);
    expect(getLengthOfLastWord(input2)).toBe(4);
    expect(getLengthOfLastWord(input3)).toBe(8);
})
