function snakeGame(gameBoard, commands) {
  
  // initialize 
  var snake = new skGame(gameBoard, commands),
      output = [];
  
  // start the snake
  snake.start().forEach(function(row) {
    output.push(row);
  });
  
  return output;
}

// arrows for directions
var HEAD_UP = '^';
var HEAD_RIGHT = '>';
var HEAD_LEFT = '<';
var HEAD_DOWN = 'v';
var BODY_PART = '*';
var directions = [HEAD_LEFT, HEAD_UP, HEAD_RIGHT, HEAD_DOWN];

function skGame(board, commands) {

  // bind board
  this.board = board;

  // bind commands
  this.commands = commands;

  // find snake
  this.snake = this.mapSnake(board);

  // set initial direction
  this.direction = this.snake[0].value;
}

skGame.prototype.start = function() {
  this.run(this.commands);
  return this.board;
};


skGame.prototype.nextDirection = function(direction, command) {
  var length = directions.length;
  var index = directions.indexOf(direction);
  var nextIndex;
  // clockwise
  if (command === 'R') {
    nextIndex = index + 1 >= length ? 0 : index + 1;
  }

  // counterclockwise
  if (command === 'L') {
    nextIndex = index - 1 < 0 ? length - 1 : index - 1;
  }
  return directions[nextIndex];
};

skGame.prototype.run = function(commands) {
  var getBoard = this.getBoard.bind(this);
  var execCommand = this.execCommand.bind(this);
  var nextBoard = creatNextBoard.bind(this);

  // convert to array
  commands = Array.from(commands);

  // traverse commands , exit if done
  for (var i = 0, length = commands.length; i < length; i++) {
    var command = commands[i];

    // generate the next board
    nextBoard(getBoard());

    // exect the command
    if (!execCommand(command)) {
      break;
    }
  }

  function creatNextBoard(board) {
    this.virtualBoard = this.blankBoard(board);
  }
};

skGame.prototype.blankBoard = function(board) {
  return board.map(function(row) {
    return row.slice(0).fill('.');
  });
};


skGame.prototype.getBoard = function() {
  return this.board;
};

skGame.prototype.execCommand = function(command) {
  var board = this.getBoard();
  var snake = this.snake;
  var snakeHead = this.snake[0].value;

  var nextSnake = cloneSnake(this.snake);
  var nextBoard = this.virtualBoard;
  var boardDimensions = [this.rows, this.cols];
  var direction = directionValues(snakeHead);

  var nextDirection = this.nextDirection.bind(this);

  switch (command) {
    case 'F':
      // create the next snake            
      nextSnake = updateSnake(direction, nextSnake);

      // update the next board with new positions
      nextBoard = updateBoard(nextSnake, nextBoard);
      if (nextBoard) {
        // replace the old board
        this.board = nextBoard;
        this.snake = nextSnake;

      } else {
        // kill the snake
        this.board = killSnake(snake, board);
        return false;
      }
      break;

      // done
    case 'R':
      // update snake head
      snake[0].value = nextDirection(snake[0].value, 'R');

      // update direction in board
      updateDirection(snake, board);
      break;
    case 'L':
      // update snake head
      snake[0].value = nextDirection(snake[0].value, 'L');

      // update direction in board
      updateDirection(snake, board);
      break;
  }


  function updateDirection(snake, board) {
    var head = snake[0];
    board[head.row][head.col] = head.value;
  }

  function killSnake(snake, nextBoard) {
    snake.forEach(function(part) {
      var row = part.row;
      var col = part.col;
      nextBoard[row][col] = 'X';
    });
    return nextBoard;
  }

  // [x] done
  function directionValues(direction) {
    if (direction === HEAD_UP) return [-1, 0];
    if (direction === HEAD_DOWN) return [1, 0];
    if (direction === HEAD_RIGHT) return [0, 1];
    if (direction === HEAD_LEFT) return [0, -1];
  }

  function updateSnake(direction, snake) {
    var lastPosition = null;
    nextSnake.forEach(function(part) {
      if (lastPosition === null) {
        lastPosition = [part.row, part.col];
        part.row = part.row + direction[0];
        part.col = part.col + direction[1];
      } else {
        var nextRow = lastPosition[0];
        var nextCol = lastPosition[1];
        lastPosition = [part.row, part.col];
        part.row = nextRow;
        part.col = nextCol;
      }
    });
    return nextSnake;
  }

  function updateBoard(snake, nextBoard) {
    // check dimensions
    var dimensions = [nextBoard.length, nextBoard[0].length];
    for (var i = 0; i < snake.length; i++) {
      var part = snake[i];
      var row = part.row;
      var col = part.col;

      // check row boundaries
      if (row < 0 || row >= dimensions[0]) {
        //console.log('row out of boundaries')
        return false;
      }

      // check col boundaries 
      if (col < 0 || col >= dimensions[1]) {
        //console.log('col out of boundaries')
        return false;
      }

      // if the space is empty 
      if (nextBoard[row][col] === '.') {
        nextBoard[row][col] = part.value;
      } else {
        //console.log('the space is not empty', nextBoard[row][col])
        return false
      }
    }
    return nextBoard;
  }

  function cloneSnake(snake) {
    return snake.map(function(part) {
      return Object.assign({}, part);
    });
  }
  // keep game going 
  return true;
};


// [x] done
skGame.prototype.mapSnake = function(board) {
  var head = null;
  // find snake parts , scan board
  var snakeParts = board.reduce(function(parts, row, rowIndex) {
    return parts.concat(row.reduce(function(cells, cell, colIndex) {
      if (
        cell === HEAD_UP ||
        cell === HEAD_DOWN ||
        cell === HEAD_RIGHT ||
        cell === HEAD_LEFT
      ) {
        // find head
        head = {
          row: rowIndex,
          col: colIndex,
          value: cell
        };
        // push snake part
      } else if (cell === BODY_PART) {
        cells.push({
          row: rowIndex,
          col: colIndex,
          value: cell
        });
      }
      return cells;
    }, []));
  }, []);

  //printing body parts
  var sides = [
    [0, 1], //right
    [0, -1], //left
    [1, 0], //down
    [-1, 0], //up
  ];

  var linkedSnake = [head];
  var currentNode = head;
  var attempts = 1;
  var prevNode = null;
  var prevIndexNode = null;

  // find snake sequence
  while (snakeParts.length > 0) {

    // Iterate through snake parts
    for (var i = 0, length = snakeParts.length; i < length; i++) {
      var part = snakeParts[i];
      var row = part.row;
      var col = part.col;

      // Lookup for Neighbors
      var rightSide = part.row === currentNode.row && part.col === currentNode.col + 1;
      var leftSide = part.row === currentNode.row && part.col === currentNode.col - 1;
      var downSide = part.row === currentNode.row + 1 && part.col === currentNode.col;
      var upSide = part.row === currentNode.row - 1 && part.col === currentNode.col;

      // Is this part a neighbor ?  
      if (rightSide || leftSide || downSide || upSide) {

        // last piece added
        currentNode = part;
        linkedSnake.push(part);

        // remove linked part
        snakeParts.splice(i, 1);

        // piece found then break the loop
        break;

      } else if (i === length - 1) {
        // go out from scan
        snakeParts = [];
      }
    }
  }
  return linkedSnake;
};