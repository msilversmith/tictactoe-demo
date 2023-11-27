//In the first few lines of our script, we create a constant variable 
//for our x and o characters. The table under presents combinations of 
//movements for winning the game. These combinations will help us 
//determine if the game is over or not, by checking if any of the 
//combinations match the current gameplay.
const PLAYER_X_CLASS = 'x'
const PLAYER_O_CLASS = 'circle'
// TODO add the combinations for winning - hint: arrays are 0-indexed
const WINNING_COMBINATIONS = [
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
]

//Here we used the id tags we assigned in the initial.html to save 
//the values of all the board elements, winning message and the 
//restart button. For this we used the JavaScript method getElementById(). 
//For the winning message text element we used the querySelector() method 
//which returns the first element within the document that matches the 
//specified selector. We also used the squared brackets ([]) to target 
//the data-cell attribute.
const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')
let isPlayer_O_Turn = false


//In this portion of the script we created a function for starting the 
//game called gameStart(). 
//TODO We need to set the isPlayer_O_Turn variable to false, 
//meaning the first to play will be an x character. The rest of the 
//function will remove all the characters left from previous gameplay. 
//Here we also trigger the events which may happen on our board, which 
//are the mouse clicks.
function startGame() {
	isPlayer_O_Turn = //Finish this statement
	cellElements.forEach(cell => {
    // TODO add code in here to handle each cell click events and current state
	})
	setBoardHoverClass()
  // TODO Reset the winning message from the previous game
}

//In the function handleCellClick we handle the mouse click events 
//for the cells in the board. Most of the functions called here 
//will be separately explained. In short, the currentClass variable 
//saves the character (X or O), whose turn it is at the moment. 
//Another function is used in the if statement to check if someone 
//has already won by comparing the winning combinations to the gameplay. 
//This way it determines whether there is a draw or not.
function handleCellClick(e) {
	const cell = e.target
	const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBoardHoverClass()
	}
}

//The gameEnd() function was mentioned previously. It is the function 
//that ends the game. The function can either display a winner message 
//which specifies which character won or a message that states there is 
//no winner – it is a draw, depending on the outcome of the if statement. 
function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = // TODO add text here for if the game is a draw
  } else {
    // TODO add text here for if the game is won by a specific player - you can add additional code to make the message more descriptive
    winningMessageTextElement.innerText = 
  }
  // TODO show the winning message element
}

//Another function that was mentioned before is the isDraw() function. 
//This one just returns the value in case there is a draw, meaning that 
//neither of the players has won. There is also a nice method hidden in 
//the isDraw function named every that checks all elements of an array 
//to confirm a condition by returning a boolean value. It is usually 
//defined as an array which tests the elements of an array and returns 
//true (1) if they pass the test.
function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS)
  })
}

//placeMark() and swapTurns() are two short and simple functions. 
//The placeMark() places the character in the cell, currentClass being 
//either an X or an O depending on whose turn it is. The second function 
//is the one which swaps the turns after the character is placed in a cell.
function placeMark(cell, currentClass) {
	cell.classList.add(currentClass)
}

function swapTurns() {
	isPlayer_O_Turn = // TODO add code here to swap the turn of the players
}

//Since we want a character to appear in the cells while hovering 
//over them with our mouse cursor before placing them, the 
//setBoardHoverClass() function takes care of the interactive part of 
//that. The interactive elements will make our Tic-Tac-Toe JavaScript 
//game more interesting.
function setBoardHoverClass() {
	boardElement.classList.remove(PLAYER_X_CLASS)
	boardElement.classList.remove(PLAYER_O_CLASS)
	if (isPlayer_O_Turn) {
		boardElement.classList.add(PLAYER_O_CLASS)
	} else {
		boardElement.classList.add(PLAYER_X_CLASS)
	}
}

//And lastly of our JavaScript is the function checkWin() which is 
//called to check if our board matches any of the winning combinations.
function checkWin(currentClass) {
	return WINNING_COMBINATIONS.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass)
		})
	})
}

//This initializes the game to start and adds a click event on the restart button
//to restart the game again
startGame()

restartButton.addEventListener('click', startGame)