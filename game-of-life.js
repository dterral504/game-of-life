/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules:

* Any live cell with fewer than two live neighbors dies, as if caused by under-population.
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by over-population.
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
* Write a function to compute the next state (after one update) of the board given its current state.

*/

// helper function for counter number of living neighbors for each cell
function numLivingNeighbors(board, r, c, numRows, numCols) {
  var count = 0;

  if (r == 0) {
    // TO DO
    if (c == 0) {
      // TO DO
      if (board[r][c + 1] == 1) count++;
      if (board[r + 1][c] == 1) count++;
      if (board[r + 1][c + 1] == 1) count++;
    } else if (c == numCols - 1) {
      // TO DO
      if (board[r][c - 1] == 1) count++;
      if (board[r + 1][c] == 1) count++;
      if (board[r + 1][c - 1] == 1) count++;
    } else {
      // TO DO
      if (board[r][c - 1] == 1) count++;
      if (board[r][c + 1] == 1) count++;
      if (board[r + 1][c - 1] == 1) count++;
      if (board[r + 1][c] == 1) count++;
      if (board[r + 1][c + 1] == 1) count++;
    }
  } else if (r == numRows - 1) {
    if (c == 0) {
      // TO DO
      if (board[r][c + 1] == 1) count++;
      if (board[r - 1][c] == 1) count++;
      if (board[r - 1][c + 1] == 1) count++;
    } else if (c == numCols - 1) {
      // TO DO
      if (board[r][c - 1] == 1) count++;
      if (board[r - 1][c] == 1) count++;
      if (board[r - 1][c - 1] == 1) count++;
    } else {
      // TO DO
      if (board[r][c - 1] == 1) count++;
      if (board[r][c + 1] == 1) count++;
      if (board[r - 1][c - 1] == 1) count++;
      if (board[r - 1][c] == 1) count++;
      if (board[r - 1][c + 1] == 1) count++;
    }
  } else {
    if (c == 0) {
      // TO DO
      if (board[r][c + 1] == 1) count++;
      if (board[r + 1][c] == 1) count++;
      if (board[r + 1][c + 1] == 1) count++;
      if (board[r - 1][c] == 1) count++;
      if (board[r - 1][c + 1] == 1) count++;
    } else if (c == numCols - 1) {
      // TO DO
      if (board[r][c - 1] == 1) count++;
      if (board[r + 1][c] == 1) count++;
      if (board[r + 1][c - 1] == 1) count++;
      if (board[r - 1][c] == 1) count++;
      if (board[r - 1][c - 1] == 1) count++;
    } else {
      // TO DO
      if (board[r][c - 1] == 1) count++;
      if (board[r][c + 1] == 1) count++;
      if (board[r + 1][c - 1] == 1) count++;
      if (board[r + 1][c] == 1) count++;
      if (board[r + 1][c + 1] == 1) count++;
      if (board[r - 1][c - 1] == 1) count++;
      if (board[r - 1][c] == 1) count++;
      if (board[r - 1][c + 1] == 1) count++;
    }
  }
  return count;
}

function gameOfLife() {
  // prompt user for board dimensions
  var numRows = parseInt(prompt("Enter the number of rows on the board: "), 10);
  var numCols = parseInt(
    prompt("Enter the number of columns on the board: "),
    10
  );
  console.log(
    "Board Dimensions:\n# of Rows: " + numRows + "\n# of Columns: " + numCols
  );

  // initialize game board
  var board = new Array(numRows);
  for (var i = 0; i < numRows; i++) {
    // get one row of input from user
    var input = prompt("Enter Row #" + (i + 1) + ": ");

    // check if row is valid
    var isValidRow = input.match(/^[10 ]*$/) !== null;
    while (!isValidRow) {
      input = prompt("Invalid Input!\nEnter Row #" + (i + 1) + ": ");
      isValidRow = input.match(/^[10 ]*$/) !== null;
    }

    // allocate new row on board
    board[i] = new Array(numCols);

    // fill board from user input
    var rowArray = input.split(" ");
    for (var j = 0; j < numCols; j++) {
      board[i][j] = parseInt(rowArray[j], 10);
    }
  }

  // output the original (user input) board
  console.log("Original Board:");
  for (var i = 0; i < numRows; i++) {
    console.log(board[i]);
  }

  // 2D array which holds the number of living neighbors for each cell
  var numNeighbors = new Array(numRows);
  // populate num neighbors using helper function
  for (var r = 0; r < numRows; r++) {
    numNeighbors[r] = new Array(numCols);
    for (var c = 0; c < numCols; c++) {
      numNeighbors[r][c] = numLivingNeighbors(board, r, c, numRows, numCols);
    }
  }

  for (var x = 0; x < numRows; x++) {
    for (var y = 0; y < numCols; y++) {
      // if cell is alive
      if (board[x][y] == 1) {
        // Any live cell with fewer than two live neighbors dies, as if caused by under-population.
        if (numNeighbors[x][y] < 2) {
          board[x][y] = 0;
        }
        // Any live cell with more than three live neighbors dies, as if by over-population.
        else if (numNeighbors[x][y] > 3) {
          board[x][y] = 0;
        }
        // Any live cell with two or three live neighbors lives on to the next generation.
      }
      //  else, the cell is dead
      else {
        // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        if (numNeighbors[x][y] == 3) {
          board[x][y] = 1;
        }
      }
    }
  }

  console.log("Updated Board:");
  for (var i = 0; i < numRows; i++) {
    console.log(board[i]);
  }
}
