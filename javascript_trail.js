$(document).ready( function(){
	
	var myVar = null;
	var row;
	var col;
	
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
	
	function askRow(turn) {
		while(1) {
			var r = parseInt(prompt("Player " + turn + ", what row do you want to place?", "Enter 1, 2, or 3"));
			if(Number.isInteger(r)) {
				if(r == 1 || r == 2 || r == 3) { return r; }
			}
		}
	}
	
	function askColumn(turn) {
		while(1) {
			var c = parseInt(prompt("Player " + turn + ", what column do you want to place?", "Enter 1, 2, or 3"));
			if(Number.isInteger(c)) {
				if(row == 1 || row == 2 || row == 3) { return c; }
			}
		}
	}
	
	function placeMarker(r, c, turn) {
		var location = "r" + r + "c" + c;
		if(turn == 1) { document.getElementById(location).innerHTML = "X"; }
		else if(turn == 2) { document.getElementById(location).innerHTML = "O"; }
		endGame(myVar);
	}
	
	function turn(player) {
		myVar = setInterval(function() {
		row = askRow(player)
		col = askColumn(player);
		var goodMove = viableMove(row, col);
		if(goodMove == 1) { placeMarker(row, col, player);}
		if(player == 1 && goodMove == 1) {player = 2;}
		else if(player ==2 && goodMove == 1) {player = 1;}
		else if(goodMove == 0) { message("Move not allowed! Already Marker There.")}
		}, 1000);
	}
	
	function endGame(myVar) {
		var cont = scanForTurn();
		var winner = scanForWinner();
		if(cont == 0 || winner == 1 || winner == 2) {
			clearInterval(myVar);
			message("Winner is player" + winner);
		}
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
	
	/* Decide who goes first */
	var playerOrder = whoGoesFirst();
	
	/* Ask if playing against computer or not (1 player mode not up and running)*/
	/* var playerNumber = askIfMultiplePlayers(); */
	
	/* Performs game */
	turn(playerOrder);
});