$(document).ready( function(){

	var ball = document.getElementById("balls"), velocity_x = 2, velocity_y = 2,
		ball_pos_x = 10, ball_pos_y = 10, limit_yb = 400, limit_yu = -300, 
		limit_xl = 0, limit_xr = 1230;
	
	var balls_remaining = document.getElementById("balls_remaining"), life = 3;
	
	var score = document.getElementById("score"), green = 1, blue = 2, red = 3, points = 0;
	
	var paddle = document.getElementById("paddle");
		
	
	var blocks = [];
	for(i=0; i<12; i++) { blocks.push([]);}
	for(i=1; i<13; i++) { for(j=1; j<11; j++) { blocks[i-1].push(document.getElementById("r" + i + "b" + j)); } }
	
	var blocks_rect = [];
	for(i=0; i<12; i++) { blocks_rect.push([]);}
	for(i=0; i<12; i++) { for(j=0; j<10; j++) { blocks_rect[i].push(blocks[i][j].getBoundingClientRect()); } }
	
	document.addEventListener("mousemove", function(event) { movePaddle(event); });
	
	function movePaddle(e) {
		var x = e.clientX;
		paddle.style.left= (x - 30) + "px";
	}
	
	function score_add(i) {
		if((i >=0 && i <= 1) || (i >=6 && i <= 7)) {
			points += red;
			score.innerHTML = "Score: " + points;
		}
		else if((i >=2 && i <= 3) ||(i >=8 && i <= 9)) {
			points += blue;
			score.innerHTML = "Score: "+ points;
		}
		else if((i >=4 && i <= 5) || (i >=10 && i <= 11)) {
			points += green;
			score.innerHTML = "Score: "+ points;
		}
	}
	
	function collision_brick() {
		var b, b_r;
		for(i = 0; i< 12; i++) {
			for(j = 0; j < 10; j++) {
				b = blocks[i][j];
				b_r = blocks_rect[i][j];
				if(b_r.bottom - ball.getBoundingClientRect().top > 1 && velocity_y < 0 && b.style.visibility != "hidden") {
					if((b_r.right - ball.getBoundingClientRect().right) > 1 && (b_r.left - ball.getBoundingClientRect().left) < -1) {
						velocity_y = -velocity_y;
						b.style.visibility = "hidden";
						score_add(i);
						return;
					}
				}
				if(b_r.top - ball.getBoundingClientRect().bottom > 1 && velocity_y > 0 && b.style.visibility != "hidden") {
					if((b_r.right - ball.getBoundingClientRect().right) > 1 && (b_r.left - ball.getBoundingClientRect().left) < -1) {
						velocity_y = -velocity_y;
						b.style.visibility = "hidden";
						score_add(i);
						return;
					}
				}
				if(b_r.right - ball.getBoundingClientRect().left < 1 && b_r.right-ball.getBoundingClientRect().left > -10 && velocity_x < 0 && b.style.visibility != "hidden") {
					if((b_r.top - ball.getBoundingClientRect().top) > 1 && (b_r.bottom - ball.getBoundingClientRect().bottom) > 1) {
						velocity_x = -velocity_x;
						b.style.visibility = "hidden";
						score_add(i);
						return;
					}
				}
				if(b_r.left - ball.getBoundingClientRect().right < 1 && b_r.left-ball.getBoundingClientRect().right > -10 && velocity_x > 0 && b.style.visibility != "hidden") {
					if((b_r.top - ball.getBoundingClientRect().top) > 1 && (b_r.bottom - ball.getBoundingClientRect().bottom) > 1) {
						velocity_x = -velocity_x;
						b.style.visibility = "hidden";
						score(i);
						return;
					}
				}
			}
		}
	}
	
	function collision_paddle() {
		if(ball.getBoundingClientRect().bottom - paddle.getBoundingClientRect().top > 1 && velocity_y > 0) {
			if(ball.getBoundingClientRect().left - paddle.getBoundingClientRect().left > 1 && ball.getBoundingClientRect().right - paddle.getBoundingClientRect().right < 1) {
				velocity_y = -velocity_y;
			}
		}
	}
	
	function ball_below_paddle() {
		if(ball.getBoundingClientRect().top - paddle.getBoundingClientRect().bottom > 5) {
			life = life - 1;
			balls_remaining.innerHTML = "Balls left: " + life;
			ball_pos_x = 10;
			ball_pos_y = 10;
		}
	}
	
	function game_over() {
		alert("GAME OVER!!!  YOUR SCORE: " + points);
	}
	
	function update() {
		ball_pos_x += velocity_x;
		ball_pos_y += velocity_y;
		collision_brick();
		collision_paddle();
		ball_below_paddle();
		if(ball_pos_x >= limit_xr || ball_pos_x <= limit_xl) velocity_x = -velocity_x;
		if(ball_pos_y >= limit_yb || ball_pos_y <= limit_yu) velocity_y = -velocity_y;
	}
	
	function ballMove() {
		balls.style.left = ball_pos_x + 'px';
		balls.style.top = ball_pos_y + 'px';
	}
	
	function mainLoop() {
		update();
		ballMove();
		if(life > 0) {
			requestAnimationFrame(mainLoop);
		}
		if(life < 1) {
			ball.style.visibility = "hidden";
			game_over();
		}
	}
	
	requestAnimationFrame(mainLoop);
	
});