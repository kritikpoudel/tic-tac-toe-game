// const cells = document.querySelectorAll('.cell');
// const resetButton = document.getElementById('reset');
// const statusDiv = document.getElementById('status');
// let board = ['', '', '', '', '', '', '', '', ''];
// const player = 'O';
// const ai = 'X';
// let currentPlayer = player;

// const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// cells.forEach(cell => {
//     cell.addEventListener('click', handleClick);
// });

// resetButton.addEventListener('click', resetGame);

// function handleClick(e) {
//     const index = e.target.dataset.index;
//     if (board[index] === '' && currentPlayer === player) {
//         makeMove(index, player);
//         if (!checkWin(board, player) && !isBoardFull(board)) {
//             const aiMove = getBestMove(board, ai);
//             makeMove(aiMove, ai);
//         }
//     }
// }

// function makeMove(index, player) {
//     board[index] = player;
//     cells[index].textContent = player;
//     currentPlayer = player === 'O' ? 'X' : 'O';
//     if (checkWin(board, player)) {
//         statusDiv.textContent = `${player} wins!`;
//         endGame();
//     } else if (isBoardFull(board)) {
//         statusDiv.textContent = 'Draw!';
//         endGame();
//     }
// }

// function checkWin(board, player) {
//     return winningCombos.some(combo => {
//         return combo.every(index => {
//             return board[index] === player;
//         });
//     });
// }

// function isBoardFull(board) {
//     return board.every(cell => {
//         return cell !== '';
//     });
// }

// function resetGame() {
//     board = ['', '', '', '', '', '', '', '', ''];
//     cells.forEach(cell => {
//         cell.textContent = '';
//     });
//     statusDiv.textContent = '';
//     currentPlayer = player;
// }

// function getBestMove(board, player) {
//     let bestScore = -Infinity;
//     let move;
//     for (let i = 0; i < board.length; i++) {
//         if (board[i] === '') {
//             board[i] = player;
//             let score = minimax(board, 0, false);
//             board[i] = '';
//             if (score > bestScore) {
//                 bestScore = score;
//                 move = i;
//             }
//         }
//     }
//     return move;
// }

// function minimax(board, depth, isMaximizing) {
//     if (checkWin(board, ai)) {
//         return 10 - depth;
//     } else if (checkWin(board, player)) {
//         return depth - 10;
//     } else if (isBoardFull(board)) {
//         return 0;
//     }

//     if (isMaximizing) {
//         let bestScore = -Infinity;
//         for (let i = 0; i < board.length; i++) {
//             if (board[i] === '') {
//                 board[i] = ai;
//                 let score = minimax(board, depth + 1, false);
//                 board[i] = '';
//                 bestScore = Math.max(score, bestScore);
//             }
//         }
//         return bestScore;
//     } else {
//         let bestScore = Infinity;
//         for (let i = 0; i < board.length; i++) {
//             if (board[i] === '') {
//                 board[i] = player;
//                 let score = minimax(board, depth + 1, true);
//                 board[i] = '';
//                 bestScore = Math.min(score, bestScore);
//             }
//         }
//         return bestScore;
//     }
// }

// function endGame() {
//     cells.forEach(cell => {
//         cell.removeEventListener('click', handleClick);
//     });
// }
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const statusDiv = document.getElementById('status');
let board = ['', '', '', '', '', '', '', '', ''];
const player = 'O';
const ai = 'X';
let currentPlayer = player;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetGame);

function handleClick(e) {
    const index = e.target.dataset.index;
    if (board[index] === '' && currentPlayer === player) {
        makeMove(index, player);
        if (!checkWin(board, player) && !isBoardFull(board)) {
            const aiMove = getBestMove(board, ai);
            makeMove(aiMove, ai);
        }
    }
}

function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;
    currentPlayer = player === 'O' ? 'X' : 'O';
    if (checkWin(board, player)) {
        statusDiv.textContent = `${player} wins!`;
        endGame();
    } else if (isBoardFull(board)) {
        statusDiv.textContent = 'Draw!';
        endGame();
    }
}

function checkWin(board, player) {
    return winningCombos.some(combo => {
        return combo.every(index => {
            return board[index] === player;
        });
    });
}

function isBoardFull(board) {
    return board.every(cell => {
        return cell !== '';
    });
}
function resetGame() {
    console.log('Reset button clicked'); // Debugging statement
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleClick);
    });
    statusDiv.textContent = '';
    currentPlayer = player;
}

function getBestMove(board, player) {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = player;
            let score = minimax(board, 0, false);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    return move;
}
function minimax(board, depth, isMaximizing) {
    if (checkWin(board, ai)) {
        return 10 - depth;
    } else if (checkWin(board, player)) {
        return depth - 10;
    } else if (isBoardFull(board)) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = ai;
                let score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = player;
                let score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function endGame() {
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
    });
}

