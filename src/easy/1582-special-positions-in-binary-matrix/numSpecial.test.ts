import {numSpecial} from "./numspecial";

test('count special numbers', () => {
    const mat = [[1,0,0],[0,0,1],[1,0,0]];
    const mat2 = [[1,0,0],[0,1,0],[0,0,1]];
    const mat3 = [[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]];
    expect(numSpecial(mat)).toBe(1);
    expect(numSpecial(mat2)).toBe(3);
    expect(numSpecial(mat3)).toBe(1);
})