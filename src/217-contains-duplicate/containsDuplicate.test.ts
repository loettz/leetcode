import {containsDuplicate} from "./containsDuplicate";

test('detect duplicates', () => {
    const input1 = [1,2,3,1];
    const input2 = [1,2,3,4];
    const input3 = [1,1,1,3,3,4,3,2,4,2];
    expect(containsDuplicate(input1)).toBe(true);
    expect(containsDuplicate(input2)).toBe(false);
    expect(containsDuplicate(input3)).toBe(true);
})

