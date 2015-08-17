var boxes = document.querySelectorAll('.box'); //grab all of the boxes
console.log(boxes);//make sure that worked
var turn = 0;//set an initial value of "turn"
var array = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];//establish the winning combinations
var player = 0;

function getPiece() {//define fx getPiece
    console.log(turn);//see what turn we're on in the console
	if (this.innerHTML !== "X" && this.innerHTML !== "O") {//ensure that box is NOT empty
		if (turn % 2 === 0) {//assign x and o based on even/odd turns
		this.innerHTML ="X";//assign x and o based on even/odd turns
	} else {//assign x and o based on even/odd turns
		this.innerHTML ="O";//assign x and o based on even/odd turns
		
	}
	checkWinner(this.innerHTML);//run checkWinner fx after every turn
	turn ++;//increment the turn number by 1

	}
    
}

function checkWinner(player) {//establish a fx that will check for a winner
    console.log("checking winner with the variable " + player);
    for (var j = 0; j < array.length; j++) {
        console.log(boxes[array[j][0]].innerHTML);
        if (boxes[array[j][0]].innerHTML === player && 
            boxes[array[j][1]].innerHTML === player && 
            boxes[array[j][2]].innerHTML === player) {
            alert(player + " IS THE WINNER!");

        }
    }

}


function restartGame() {
	for (var i = 0; i < boxes.length; i++) { //want to go through all of the boxes in order to do something to them
    boxes[i].innerHTML = ""; //go through boxes and make them empty

    }
}

for(var i = 0; i < boxes.length; i++) { //want to go through all of the boxes in order to do something to them
    boxes[i].addEventListener('click', getPiece);//now go through each box, listening for a click, then run the getPiece fx
    console.log(boxes[i]);//display in console to make sure it's working
}


document.querySelector('#restart').addEventListener('click', restartGame);



