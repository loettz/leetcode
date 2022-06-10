// https://leetcode.com/problems/valid-sudoku/

export function isValidSudoku(board: string[][]): boolean {

    for (let indexX = 0; indexX < board.length; indexX++) {
        let currentRow: string[] = [];
        let currentCol: string[] = [];
        let currentBox: string[] = [];

        for (let indexY = 0; indexY < board.length; indexY++) {
            currentRow.push(board[indexX][indexY]);
            currentCol.push(board[indexY][indexX]);
            currentBox.push(board[3*Math.floor(indexX/3)+Math.floor(indexY/3)][3*(indexX%3)+(indexY%3)])
        }

        if (!isValid(currentRow)) return false;
        if (!isValid(currentCol)) return false;
        if (!isValid(currentBox)) return false;

    }

    return true;
};

function isValid(el: string[]): boolean {
    const numbers =  el.filter(element => element !== ".");
    const numberSet = new Set(numbers);
    return numbers.length === numberSet.size;
}



