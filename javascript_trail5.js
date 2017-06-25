$(document).ready( function(){
	
	var myVar = null;
	var row;
	var col;
	var playerOrder;
	var check1 = [["","",""],["","",""],["","",""]];
	var check2 = [["","",""],["","",""],["","",""]];
	var difficulty;
	
	function message(text) {
		/* Displays text */
		alert(text);
	}
	
	function whoGoesFirst() {
		/* Selects a number between 0 and 19 */
		var playerOrder = Math.floor(Math.random()*20);
		
		if(playerOrder >= 10) { return 2; }
		else { return 1; }
	}
	
	function askIfMultiplePlayers() {
		/* Asks the player one or two players */
		while(1) {
			var playerNumber = parseInt(prompt("Is there 1 or 2 players? (Enter 1 or 2).", "Enter number here!"));
			if(Number.isInteger(playerNumber)) {
				if(playerNumber == 1 || playerNumber == 2) { break; }
			}
		}
		return playerNumber;
	}
	
	function scanForTurn() {
		var val;
		for(i=1; i<=3; i++) {
			for(j=1; j<=3; j++) {
				val = document.getElementById("r" + i + "c" + j).innerHTML;
				if(val == "") { return 1; }
			}
		}
		return 0;
	}
	
	function scanForWinner() {
		var first;
		var second;
		var third;
		
		for(i = 1; i <=3; i++) {
			first = document.getElementById("r" + i + "c1").innerHTML;
			second = document.getElementById("r" + i + "c2").innerHTML;
			third = document.getElementById("r" + i + "c3").innerHTML;
			if(first == "X" && second == "X" && third == "X") { return 1; }
			else if(first == "O" && second == "O" && third == "O") { return 2; }
		}
		
		for(i = 1; i<=3; i++) {
			first = document.getElementById("r1c" + i).innerHTML;
			second = document.getElementById("r2c" + i).innerHTML;
			third = document.getElementById("r3c" + i).innerHTML;
			if(first == "X" && second == "X" && third == "X") { return 1; }
			else if(first == "O" && second == "O" && third == "O") { return 2; }
		}
		
		first = document.getElementById("r1c1").innerHTML;
		second = document.getElementById("r2c2").innerHTML;
		third = document.getElementById("r3c3").innerHTML;
		if(first == "X" && second == "X" && third == "X") { return 1; }
		else if(first == "O" && second == "O" && third == "O") { return 2; }
		
		first = document.getElementById("r1c3").innerHTML;
		second = document.getElementById("r2c2").innerHTML;
		third = document.getElementById("r3c1").innerHTML;
		if(first == "X" && second == "X" && third == "X") { return 1; }
		else if(first == "O" && second == "O" && third == "O") { return 2; }
	}
	
	function viableMove(r, c) {
		var value = document.getElementById("r" + r + "c" + c).innerHTML
		if(value == "") {return 1;}
		else {return 0;}
	}
	
	function easyCompMove() {
		var cMove = [Math.floor(Math.random()*3)+1, Math.floor(Math.random()*3)+1];
		while(1) {
			if(viableMove(cMove[0], cMove[1])) { return cMove; }
			else { cMove = [Math.floor(Math.random()*3)+1, Math.floor(Math.random()*3)+1]; }
		}
	}
	
	function blockPlayer() {
		var cMove;
		if(check2[0][0] == "X" && check2[0][1] == "X" && document.getElementById("r1c3").innerHTML != "O") {
			cMove = [1, 3];
		}
		else if(check2[0][0] == "X" && check2[0][2] == "X" && document.getElementById("r1c2").innerHTML != "O") {
			cMove = [1, 2];
		}
		else if(check2[0][1] == "X" && check2[0][2] == "X" && document.getElementById("r1c1").innerHTML != "O") {
			cMove = [1, 1];
		}
		else if(check2[1][0] == "X" && check2[1][1] == "X" && document.getElementById("r2c3").innerHTML != "O") {
			cMove = [2, 3];
		}
		else if(check2[1][0] == "X" && check2[1][2] == "X" && document.getElementById("r2c2").innerHTML != "O") {
			cMove = [2, 2];
		}
		else if(check2[1][1] == "X" && check2[1][2] == "X" && document.getElementById("r2c1").innerHTML != "O") {
			cMove = [2, 1];
		}
		else if(check2[2][0] == "X" && check2[2][1] == "X" && document.getElementById("r3c3").innerHTML != "O") {
			cMove = [3, 3];
		}
		else if(check2[2][0] == "X" && check2[2][2] == "X" && document.getElementById("r3c3").innerHTML != "O") {
			cMove = [3, 2];
		}
		else if(check2[2][1] == "X" && check2[2][2] == "X" && document.getElementById("r3c1").innerHTML != "O") {
			cMove = [3, 1];
		}
		else if(check2[0][0] == "X" && check2[1][0] == "X" && document.getElementById("r3c1").innerHTML != "O") {
			cMove = [3, 1];
		}
		else if(check2[0][0] == "X" && check2[2][0] == "X" && document.getElementById("r2c1").innerHTML != "O") {
			cMove = [2, 1];
		}
		else if(check2[1][0] == "X" && check2[2][0] == "X" && document.getElementById("r1c1").innerHTML != "O") {
			cMove = [1, 1];
		}
		else if(check2[0][1] == "X" && check2[1][1] == "X" && document.getElementById("r3c2").innerHTML != "O") {
			cMove = [3, 2];
		}
		else if(check2[0][1] == "X" && check2[2][1] == "X" && document.getElementById("r2c2").innerHTML != "O") {
			cMove = [2, 2];
		}
		else if(check2[1][1] == "X" && check2[2][1] == "X" && document.getElementById("r1c2").innerHTML != "O") {
			cMove = [1, 2];
		}
		else if(check2[0][2] == "X" && check2[1][2] == "X" && document.getElementById("r3c3").innerHTML != "O") {
			cMove = [3, 3];
		}
		else if(check2[0][2] == "X" && check2[2][2] == "X" && document.getElementById("r2c3").innerHTML != "O") {
			cMove = [2, 3];
		}
		else if(check2[1][2] == "X" && check2[2][2] == "X" && document.getElementById("r1c3").innerHTML != "O") {
			cMove = [1, 3];
		}
		else if(check2[0][0] == "X" && check2[1][1] == "X" && document.getElementById("r3c3").innerHTML != "O") {
			cMove = [3, 3];
		}
		else if(check2[0][0] == "X" && check2[2][2] == "X" && document.getElementById("r2c2").innerHTML != "O") {
			cMove = [2, 2];
		}
		else if(check2[1][1] == "X" && check2[2][2] == "X" && document.getElementById("r1c1").innerHTML != "O") {
			cMove = [1, 1];
		}
		else if(check2[0][2] == "X" && check2[1][1] == "X" && document.getElementById("r3c1").innerHTML != "O") {
			cMove = [3, 1];
		}
		else if(check2[0][2] == "X" && check2[2][0] == "X" && document.getElementById("r2c2").innerHTML != "O") {
			cMove = [2, 2];
		}
		else if(check2[2][0] == "X" && check2[1][1] == "X" && document.getElementById("r1c3").innerHTML != "O") {
			cMove = [1, 3];
		}
		else {
			cMove = [20, 20]
		}
		return cMove;
	}
	
	function findCMoveWinner() {
		if(check2[0][0] == "O" && check2[0][1] == "O" && document.getElementById("r1c3").innerHTML != "X") {
			cMove = [1, 3];
		}
		else if(check2[0][0] == "O" && check2[0][2] == "O" && document.getElementById("r1c2").innerHTML != "X") {
			cMove = [1, 2];
		}
		else if(check2[0][1] == "O" && check2[0][2] == "O" && document.getElementById("r1c1").innerHTML != "X") {
			cMove = [1, 1];
		}
		else if(check2[1][0] == "O" && check2[1][1] == "O" && document.getElementById("r2c3").innerHTML != "X") {
			cMove = [2, 3];
		}
		else if(check2[1][0] == "O" && check2[1][2] == "O" && document.getElementById("r2c2").innerHTML != "X") {
			cMove = [2, 2];
		}
		else if(check2[1][1] == "O" && check2[1][2] == "O" && document.getElementById("r2c1").innerHTML != "X") {
			cMove = [2, 1];
		}
		else if(check2[2][0] == "O" && check2[2][1] == "O" && document.getElementById("r3c3").innerHTML != "X") {
			cMove = [3, 3];
		}
		else if(check2[2][0] == "O" && check2[2][2] == "O" && document.getElementById("r3c2").innerHTML != "X") {
			cMove = [3, 2];
		}
		else if(check2[2][1] == "O" && check2[2][2] == "O" && document.getElementById("r3c1").innerHTML != "X") {
			cMove = [3, 1];
		}
		else if(check2[0][0] == "O" && check2[1][0] == "O" && document.getElementById("r3c1").innerHTML != "X") {
			cMove = [3, 1];
		}
		else if(check2[0][0] == "O" && check2[2][0] == "O" && document.getElementById("r2c1").innerHTML != "X") {
			cMove = [2, 1];
		}
		else if(check2[1][0] == "O" && check2[2][0] == "O" && document.getElementById("r1c1").innerHTML != "X") {
			cMove = [1, 1];
		}
		else if(check2[0][1] == "O" && check2[1][1] == "O" && document.getElementById("r3c2").innerHTML != "X") {
			cMove = [3, 2];
		}
		else if(check2[0][1] == "O" && check2[2][1] == "O" && document.getElementById("r2c2").innerHTML != "X") {
			cMove = [2, 2];
		}
		else if(check2[1][1] == "O" && check2[2][1] == "O" && document.getElementById("r1c2").innerHTML != "X") {
			cMove = [1, 2];
		}
		else if(check2[0][2] == "O" && check2[1][2] == "O" && document.getElementById("r3c3").innerHTML != "X") {
			cMove = [3, 3];
		}
		else if(check2[0][2] == "O" && check2[2][2] == "O" && document.getElementById("r2c3").innerHTML != "X") {
			cMove = [2, 3];
		}
		else if(check2[1][2] == "O" && check2[2][2] == "O" && document.getElementById("r1c3").innerHTML != "X") {
			cMove = [1, 3];
		}
		else if(check2[1][1] == "O" && check2[2][2] == "O" && document.getElementById("r1c1").innerHTML != "X") {
			cMove = [1, 1];
		}
		else if(check2[0][0] == "O" && check2[2][2] == "O" && document.getElementById("r2c2").innerHTML != "X") {
			cMove = [2, 2];
		}
		else if(check2[0][0] == "O" && check2[1][1] == "O" && document.getElementById("r3c3").innerHTML != "X") {
			cMove = [3, 3];
		}
		else if(check2[0][2] == "O" && check2[1][1] == "O" && document.getElementById("r3c1").innerHTML != "X") {
			cMove = [3, 1];
		}
		else if(check2[0][2] == "O" && check2[2][0] == "O" && document.getElementById("r2c2").innerHTML != "X") {
			cMove = [2, 2];
		}
		else if(check2[0][2] == "O" && check2[1][1] == "O" && document.getElementById("r1c3").innerHTML != "X") {
			cMove = [1, 3];
		}
		else {
			cMove = [20, 20];
		}
		return cMove;
	}
	
	function mediumCompMove() {
		var cMove;
		cMove = blockPlayer();
		if(cMove[0] == 20 && cMove[1] == 20) {
			cMove = easyCompMove();
		}
		return cMove;
	}
	
	function hardCompMove() {
		var CMove;
		cMove = findCMoveWinner();
		if(cMove[0] == 20 && cMove[1] == 20) {
			cMove = mediumCompMove();
		}
		return cMove;
	}
	
	function computerMove(diff) {
		var cMove;
		if(diff == "e") {
			cMove = easyCompMove();
		}
		else if(diff == "m") {
			cMove = mediumCompMove();
		}
		else if(diff == "h") {
			cMove = hardCompMove();	
		}
		return cMove;
	}

	function r1c1(turn) {
		if(document.getElementById("r1c1").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r1c1").innerHTML = "X"; }
			else {
				document.getElementById("r1c1").innerHTML = "O"; }
		}
		else { 
			document.getElementById("r1c1").innerHTML = ""; }
	}
	
	function first() { r1c1(playerOrder) }
	
	function r1c2(turn) { 
		if(document.getElementById("r1c2").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r1c2").innerHTML = "X"; }
			else {
				document.getElementById("r1c2").innerHTML = "O"; }
		}
		else { 
			document.getElementById("r1c2").innerHTML = ""; }
	}
	
	function second() { r1c2(playerOrder) }
	
	function r1c3(turn) { 
		if(document.getElementById("r1c3").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r1c3").innerHTML = "X"; }
			else {
				document.getElementById("r1c3").innerHTML = "O"; }
		}
		else { 
			document.getElementById("r1c3").innerHTML = ""; }
	}
	
	function third() { r1c3(playerOrder) }
	
	function r2c1(turn) { 
		if(document.getElementById("r2c1").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r2c1").innerHTML = "X"; }
			else {
				document.getElementById("r2c1").innerHTML = "O"; }
		}
		else { document.getElementById("r2c1").innerHTML = ""; }
	}
	
	function fourth() { r2c1(playerOrder) }
	
	function r2c2(turn) { 
		if(document.getElementById("r2c2").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r2c2").innerHTML = "X"; }
			else {
				document.getElementById("r2c2").innerHTML = "O"; }
		}
		else { document.getElementById("r2c2").innerHTML = ""; }
	}
	
	function fifth() { r2c2(playerOrder) }
	
	function r2c3(turn) { 
		if(document.getElementById("r2c3").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r2c3").innerHTML = "X"; }
			else {
				document.getElementById("r2c3").innerHTML = "O"; }
		}
		else {
			document.getElementById("r2c3").innerHTML = "";}
	}
	
	function sixth() { r2c3(playerOrder) }
	
	function r3c1(turn) { 
		if(document.getElementById("r3c1").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r3c1").innerHTML = "X"; }
			else {
				document.getElementById("r3c1").innerHTML = "O"; }
		}
		else {
			document.getElementById("r3c1").innerHTML = "";}
	}
	
	function seventh() { r3c1(playerOrder) }
	
	function r3c2(turn) { 
		if(document.getElementById("r3c2").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r3c2").innerHTML = "X"; }
			else {
				document.getElementById("r3c2").innerHTML = "O"; }
		}
		else {
			document.getElementById("r3c2").innerHTML = "";}
	}
	
	function eighth() { r3c2(playerOrder) }
	
	function r3c3(turn) { 
		if(document.getElementById("r3c3").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r3c3").innerHTML = "X"; }
			else {
				document.getElementById("r3c3").innerHTML = "O"; }
		}
		else {
			document.getElementById("r3c3").innerHTML = "";}
	}
	
	function nineth() { r3c3(playerOrder) }
	
	function change() {
		var values = [["","",""],["","",""],["","",""]];
		for(i = 1; i<=3; i++) {
			for(j=1; j<=3; j++) {
				values[i-1][j-1] = document.getElementById("r"+i+"c"+j).innerHTML;
			}
		}
		return values;
	}
	
	function difference(checkArray1, checkArray2) {
		for(i = 0; i<=2; i++) {
			for(j=0; j<=2; j++) {
				if(checkArray1[i][j] != checkArray2[i][j]) {
					return [i, j];
				}
			}
		}
		return [20, 20];
	}
	
	function numberDifference(checkArray1, checkArray2) {
		var difference = 0;
		for(i = 0; i<=2; i++) {
			for(j=0; j<=2; j++) {
				if(checkArray1[i][j] != checkArray2[i][j]) {
					difference += 1;
				}
			}
		}
		return difference;
	}
	
	function copy(array) {
		return array;
	}
	
	function removeEvent(location) {
		if(location[0] == 0 && location[1] == 0) {
			document.getElementById("r1c1").removeEventListener("click", first, false);
		}
		else if(location[0] == 0 && location[1] == 1) {
			document.getElementById("r1c2").removeEventListener("click", second, false);
		}
		else if(location[0] == 0 && location[1] == 2) {
			document.getElementById("r1c3").removeEventListener("click", third, false);
		}
		else if(location[0] == 1 && location[1] == 0) {
			document.getElementById("r2c1").removeEventListener("click", fourth, false);
		}
		else if(location[0] == 1 && location[1] == 1) {
			document.getElementById("r2c2").removeEventListener("click", fifth, false);
		}
		else if(location[0] == 1 && location[1] == 2) {
			document.getElementById("r2c3").removeEventListener("click", sixth, false);
		}
		else if(location[0] == 2 && location[1] == 0) {
			document.getElementById("r3c1").removeEventListener("click", seventh, false);
		}
		else if(location[0] == 2 && location[1] == 1) {
			document.getElementById("r3c2").removeEventListener("click", eighth, false);
		}
		else if(location[0] == 2 && location[1] == 2) {
			document.getElementById("r3c3").removeEventListener("click", nineth, false);
		}
	}
	
	function winnerRemoveEvent() {
		document.getElementById("r1c1").removeEventListener("click", first, false);
		document.getElementById("r1c2").removeEventListener("click", second, false);
		document.getElementById("r1c3").removeEventListener("click", third, false);
		document.getElementById("r2c1").removeEventListener("click", fourth, false);
		document.getElementById("r2c2").removeEventListener("click", fifth, false);
		document.getElementById("r2c3").removeEventListener("click", sixth, false);
		document.getElementById("r3c1").removeEventListener("click", seventh, false);
		document.getElementById("r3c2").removeEventListener("click", eighth, false);
		document.getElementById("r3c3").removeEventListener("click", nineth, false);

	}
	
	function submit(turn, players) {
		/* add return to stop player if he tries to input more than one value */
		check2 = change();
		var numDiff = numberDifference(check2, check1);
		if(numDiff > 1) {
			message("Too many spots selected!");
			return;
		}
		
		/* alternate turn between the two players */
		if(turn == 1 && players == 1) {
			var location = difference(check1, check2);
			removeEvent(location);
			check1 = copy(check2);
			var cont = scanForTurn();
			var winner = scanForWinner();
			if(cont == 0 || winner == 1 || winner == 2) {
				if(winner == 1 || winner == 2) {
					winnerRemoveEvent();
					document.getElementById("Turn").innerHTML = "Winner is Player " + winner; }
				else {
					document.getElementById("Turn").innerHTML = "The result is a Tie!" }
				return;
			}
			var compMove = computerMove(difficulty);
			document.getElementById("r"+compMove[0]+"c"+compMove[1]).innerHTML = "O";
			check2 = change();
		}
		else if(turn == 1 && players == 2) {
			playerOrder = 2;
			document.getElementById("Turn").innerHTML = "Player " + playerOrder + "'s turn";
		}
		else {
			playerOrder = 1;
			document.getElementById("Turn").innerHTML = "Player " + playerOrder + "'s turn";
		}
		
		/* remove EventListener after submitting that spot */
		var location = difference(check1, check2);
		removeEvent(location);
		check1 = copy(check2);
		
		/* Check if the game is tied or if there is a winner */
		var cont = scanForTurn();
		var winner = scanForWinner();
		if(cont == 0 || winner == 1 || winner == 2) {
			if(winner == 1 || winner == 2) {
				winnerRemoveEvent();
				document.getElementById("Turn").innerHTML = "Winner is Player " + winner; }
			else {
				document.getElementById("Turn").innerHTML = "The result is a Tie!" }
			
		}
	}
	
	function askForDifficulty() {
		while(1) {
			difficulty = prompt("What difficulty do you want to play at? (easy (e), medium (m), or hard (h))");
			if(difficulty == "e" || difficulty == "m" || difficulty == "h") {
				break;
			}
		}
	}
	
	/* Decide who goes first */
	playerOrder = whoGoesFirst();
	
	/* Ask if playing against computer or not */
	var playerNumber = askIfMultiplePlayers();
	
	if(playerNumber == 1) {
		askForDifficulty();
	}
	
	if(playerOrder == 2 && playerNumber == 1) {
		var compMove = computerMove(difficulty);
		document.getElementById("r"+compMove[0]+"c"+compMove[1]).innerHTML = "O";
		check2 = change();
		check1 = copy(check2);
		playerOrder = 1;
		document.getElementById("Turn").innerHTML = "Player " + playerOrder + "'s turn";
	}
	
	document.getElementById("r1c1").addEventListener("click", first, false);
	document.getElementById("r1c2").addEventListener("click", second, false);
	document.getElementById("r1c3").addEventListener("click", third, false);
	document.getElementById("r2c1").addEventListener("click", fourth, false);
	document.getElementById("r2c2").addEventListener("click", fifth, false);
	document.getElementById("r2c3").addEventListener("click", sixth, false);
	document.getElementById("r3c1").addEventListener("click", seventh, false);
	document.getElementById("r3c2").addEventListener("click", eighth, false);
	document.getElementById("r3c3").addEventListener("click", nineth, false);
	document.getElementById("submit").addEventListener("click", function tenth() { submit(playerOrder, playerNumber) }, false);
	document.getElementById("Restart").addEventListener("click", function restart() { location.reload() }, false);
	
	document.getElementById("Turn").innerHTML = "Player " + playerOrder + "'s turn";
	
});