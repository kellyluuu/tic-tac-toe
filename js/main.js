/*----- constants -----*/
// X & O - Players
const PLAYERS = {
    '1': 'X',
    '-1': 'O,',
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
// the game squares 
// reset button


/*----- event listeners -----*/
// mouse click on 9 squares
// mouse click on reset 

/*----- functions -----*/
// initialize game - Start
// handle user interation
// check for 3 in a row - or winner 
// render messages to the dom 

