export const titleToNumber = (columnTitle: string): number => {
    const columnTitleLength = columnTitle.length;
    const asciOffset = 96;
    const alphabetSize = 26;
    let sum = 0;

    for (let i = 0; i <= columnTitleLength -1; i++) {
        let currCol = columnTitle.toLowerCase().charCodeAt(i) - asciOffset;
        sum = sum * alphabetSize + currCol;
    }

    return sum;
}