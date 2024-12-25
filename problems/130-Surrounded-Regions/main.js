import { testCases } from "./testcases.js";

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var main = function (board) {
    if (board.length === 0) {
        return board;
    }
    const boardHeight = board.length;
    const boardWidth = board[0].length;
    for (let i = 1; i < boardHeight - 1; i++) {
        toNotFlip(board, i, 0);
        toNotFlip(board, i, boardWidth - 1);
    }
    for (let i in board[0]) {
        toNotFlip(board, 0, Number(i));
    }
    for (let i in board[boardHeight - 1]) {
        toNotFlip(board, boardHeight - 1, Number(i));
    }

    for (let i = 0; i < boardHeight; i++) {
        for (let j = 0; j < boardWidth; j++) {
            if (board[i][j] === 'V') {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
    return board;
}

var toNotFlip = function (board, i, j) {
    if (0 <= i && i < board.length) {
        if (0 <= j && j < board[i].length) {
            if (board[i][j] === 'O') {
                board[i][j] = 'V'

                let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
                dirs.forEach(dir => {
                    toNotFlip(board, i + dir[0], j + dir[1]);
                });
            }
        }
    }
}




for (const testCase of testCases) {
    console.log(JSON.stringify(main(...testCase.input)) === JSON.stringify(testCase.output) ? 'pass' : 'fail',
        main(...testCase.input),
        testCase.output);

}