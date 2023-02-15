/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X';

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/
function handleTurn(event) {
 let idx = squares.findIndex(square => {
  return square == event.target;
 });
 board[idx] = turn;
 console.log(board);
};


function init() {
 board = ['','','','','','','','',''];
 render();
};
init();

function render() {
 board.forEach((mark, index) => {
  squares[index].textContent = mark;
 });
};
