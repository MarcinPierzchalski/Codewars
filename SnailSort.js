// to jest to przeanalizowania...

function snail(array){
    let result = [];
    let row = 0;
    let col = 0;
    let dir = 'right';
    let maxRow = array.length - 1;
    let maxCol = array[0].length - 1;
    while (row <= maxRow && col <= maxCol) {
        if (dir === 'right') {
        for (let i = col; i <= maxCol; i++) {
            result.push(array[row][i]);
        }
        row++;
        dir = 'down';
        } else if (dir === 'down') {
        for (let i = row; i <= maxRow; i++) {
            result.push(array[i][maxCol]);
        }
        maxCol--;
        dir = 'left';
        } else if (dir === 'left') {
        for (let i = maxCol; i >= col; i--) {
            result.push(array[maxRow][i]);
        }
        maxRow--;
        dir = 'up';
        } else if (dir === 'up') {
        for (let i = maxRow; i >= row; i--) {
            result.push(array[i][col]);
        }
        col++;
        dir = 'right';
        }
    }
    return result;
}