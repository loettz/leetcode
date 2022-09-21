import {titleToNumber} from "./titleToNumber";


test('column number for valid inputs', () => {
    expect(titleToNumber('A')).toBe(1);
    expect(titleToNumber('AB')).toBe(28);
    expect(titleToNumber('ZY')).toBe(701);
    expect(titleToNumber('GUV')).toBe(5300);
})

test('empty input', () => {
    expect(titleToNumber('')).toBe(0);
})