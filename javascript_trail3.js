$(document).ready( function(){
	
	var myVar = null;
	var row;
	var col;
	var PlayerOrder;
	
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
	
	function computerMove() {
		var cMove = [Math.floor(Math.random()*3)+1, Math.floor(Math.random()*3)+1];
		while(1) {
			if(viableMove(cMove[0], cMove[1])) { return cMove; }
			else { cMove = [Math.floor(Math.random()*3)+1, Math.floor(Math.random()*3)+1]; }
		}
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
	
	function r2c1(turn) { 
		if(document.getElementById("r2c1").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r2c1").innerHTML = "X"; }
			else {
				document.getElementById("r2c1").innerHTML = "O"; }
		}
		else { document.getElementById("r2c1").innerHTML = ""; }
	}
	
	function r2c2(turn) { 
		if(document.getElementById("r2c2").innerHTML == "") {
			if(turn == 1) {
				document.getElementById("r2c2").innerHTML = "X"; }
			else {
				document.getElementById("r2c2").innerHTML = "O"; }
		}
		else { document.getElementById("r2c2").innerHTML = ""; }
	}
	
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
	
	function submit(turn, players) {
		message("Player " + turn + " submitted turn.");
		if(turn == 1 && players == 1) {
			var compMove = computerMove();
			document.getElementById("r"+compMove[0]+"c"+compMove[1]).innerHTML = "O";
		}
		else if(turn == 2 && players == 1) {
			var compMove = computerMove();
			document.getElementById("r"+compMove[0]+"c"+compMove[1]).innerHTML = "O";
			playerOrder = 1;
		}
		else if(turn == 1 && players == 2) {
			playerOrder = 2;
		}
		else {
			playerOrder = 1;
		}
		
		var cont = scanForTurn();
		var winner = scanForWinner();
		if(cont == 0 || winner == 1 || winner == 2) {
			if(winner == 1 || winner == 2) { message("Winner is Player " + winner); }
			else { message("The result is a Tie!!!"); }
		}
	}
	
	/* Decide who goes first */
	playerOrder = whoGoesFirst();
	
	/* Ask if playing against computer or not */
	var playerNumber = askIfMultiplePlayers();
	
	document.getElementById("r1c1").addEventListener("click", function() { r1c1(playerOrder) });
	document.getElementById("r1c2").addEventListener("click", function() { r1c2(playerOrder) });
	document.getElementById("r1c3").addEventListener("click", function() { r1c3(playerOrder) });
	document.getElementById("r2c1").addEventListener("click", function() { r2c1(playerOrder) });
	document.getElementById("r2c2").addEventListener("click", function() { r2c2(playerOrder) });
	document.getElementById("r2c3").addEventListener("click", function() { r2c3(playerOrder) });
	document.getElementById("r3c1").addEventListener("click", function() { r3c1(playerOrder) });
	document.getElementById("r3c2").addEventListener("click", function() { r3c2(playerOrder) });
	document.getElementById("r3c3").addEventListener("click", function() { r3c3(playerOrder) });
	document.getElementById("submit").addEventListener("click", function() { submit(playerOrder, playerNumber) });
	
});