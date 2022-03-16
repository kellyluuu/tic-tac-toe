/*----- constants -----*/
// X & O - Players
const PLAYERS = {
    '1': 'X',
    '-1': 'O',
}
// winning combinations 012 345 678
const COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,2,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
/*----- app's state (variables) -----*/
// where the users click (where to put an x or o) - make sure a square is not taken first
let board; // a data variable that stores the board position 
let turn; // will be X or O 
let winner; // this can be 3 things - X/O, tie, or null
// Bonus - score for games won
// Bonus - if the player wants to quit
// Bonus - timer for game turn

/*----- cached element references -----*/
// message container - h1
const domMessage = document.querySelector('h2')
// the game board
const gameBoard = document.querySelector('.game-board')
// the game squares 
const domSquare = document.querySelectorAll('.square')
// reset button
const resetButton = document.querySelector('button')



/*----- event listeners -----*/
// mouse click on 9 squares
gameBoard.addEventListener('click',handleMove)
// mouse click on reset 
resetButton.addEventListener('click', init)


/*----- functions -----*/
// initialize game - Start
function init(){
    console.log('init function called')
    board = new Array(9).fill(null) // array to keep track of player move
    turn = 1; // player 1 goes first which is X
    winner = null; // set initial winner to no one 
    render();
}   

init(); //if you want to start the game when the page load 



// handle user interation - handleMove()
function handleMove (event){
    const squareNumber = parseInt(event.target.dataset.square);
    if(board[squareNumber] || winner ){
        return //end the turn 
    }
    board[squareNumber] = turn; //set a index and value in board array
    winner = checkForWinner()
    turn *= -1; // switched the turn 
    render()
}


// check for 3 in a row - or winner 
function checkForWinner(){
    //this can be 3 things x/0, tie, or null 
    for (let index in COMBOS) {
        if (
          board[COMBOS[index][0]] == turn &&
          board[COMBOS[index][1]] == turn &&
          board[COMBOS[index][2]] == turn 
        ) {
          return turn
        }
      }
    
      if (board.includes(null)) {
        return null
      }
    
      return "tie"
    }

// render messages to the dom
function render() {
    // console.log('render function called')
    // puts an x or o on the board mapped from board
    board.forEach(function (value, index) {
      domSquare[index].textContent = PLAYERS[value]
    })
  
    if (!winner) {
      // tell whose turn it is
      domMessage.textContent = `${PLAYERS[turn]}'s turn`
    } else if (winner === "tie"){
      // tell the user there is a tie
      domMessage.textContent = "Tie game!"
    } else {
      // tell them the winner
      domMessage.textContent = `${PLAYERS[winner]} Wins!`
    }
  
  }
