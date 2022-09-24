// https://leetcode.com/problems/special-positions-in-a-binary-matrix/
export const numSpecial = (mat: number[][]): number => {
    let specialPositions: number = 0;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                let onesRow = mat[i].filter((elem) => elem === 1);
                let isValidRow = onesRow.length === 1;
                let isSpecialPosition = isValidRow && isValidCol(j);
                if (isSpecialPosition) specialPositions++;
            }
        }
    }

    function isValidCol(index) {
        let ones = 0
        for (let i = 0; i < mat.length; i++) {
            let row = mat[i]
            if (row[index] === 1) ones++
        }

        return ones === 1;
    }

    return specialPositions;
}



