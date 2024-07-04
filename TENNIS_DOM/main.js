const field = document.querySelector("#field");
const start = document.createElement("button");
const gameField = document.createElement("div");
let gameFieldOptions = {
	sizeX : 600,
	sizeY : 400,
}
const leftBorder = 2*gameField.offsetLeft;
const count = document.createElement("div");
const ball = document.createElement("div");
const size = 30;
let timer=0;
let ballOptions = {
	posX : gameFieldOptions.sizeX/2,
	posY : gameFieldOptions.sizeY/2 + 2*size,
	speedX : 0,
	speedY : 0,
	update : function(){
		ball.style.left = ballOptions.posX + "px";
		ball.style.top = ballOptions.posY + "px";
	}
}
const leftRacket = document.createElement("div");
const rightRacket = document.createElement("div");
let racketOptions = {
	posLeftY : gameFieldOptions.sizeY/2+size,
	posRightY : gameFieldOptions.sizeY/2+size,
	speedY : 10,
	update : function(){
		leftRacket.style.top = racketOptions.posLeftY  + "px";
		rightRacket.style.top = racketOptions.posRightY  + "px";
	}
}
let leftCount = 0;
let rightCount = 0;
start.style.height = size + "px";
count.style.fontSize = size + "px";
count.textContent = `${leftCount}:${rightCount}`;

start.textContent = "start!";
gameField.style.width = gameFieldOptions.sizeX + "px";
gameField.style.height = gameFieldOptions.sizeY + "px";
gameField.style.background = "yellow";

ball.style.width = size + "px";
ball.style.height = size + "px";
ball.style.background = "red"; 
ball.style.borderRadius = "50%";
ball.style.position = "absolute";
ball.style.left = ballOptions.posX+ "px";
ball.style.top = ballOptions.posY+ "px";		

leftRacket.style.width = "10px";
leftRacket.style.height = "100px";
leftRacket.style.background = "green";
leftRacket.style.position = "absolute";
leftRacket.style.top = racketOptions.posLeftY + "px";
rightRacket.style.width = "10px";
rightRacket.style.height = "100px";
rightRacket.style.background = "blue";
rightRacket.style.position = "absolute";
rightRacket.style.top = racketOptions.posRightY + "px";
rightRacket.style.left = gameFieldOptions.sizeX + "px";

field.appendChild(start);
field.appendChild(count);
field.appendChild(gameField);
gameField.appendChild(ball);
gameField.appendChild(leftRacket);
gameField.appendChild(rightRacket);

function areElementsTouching(element1, element2) {
	const rect1 = element1.getBoundingClientRect();
	const rect2 = element2.getBoundingClientRect();

	return !(rect1.right < rect2.left || 
					 rect1.left > rect2.right || 
					 rect1.bottom < rect2.top || 
					 rect1.top > rect2.bottom);
}

function run(){

	timer=setInterval(function(){
		if (areElementsTouching(ball, rightRacket)) {
			ballOptions.speedX =- ballOptions.speedX;
		}
		if(ballOptions.posX+size/1.5>gameFieldOptions.sizeX+leftBorder){
			ballOptions.speedX=0;
			ballOptions.speedY=0;
		}
		if(ballOptions.posY-size>gameFieldOptions.sizeY){
			ballOptions.speedY =- ballOptions.speedY;
		}
		if (areElementsTouching(ball, leftRacket)) {
			ballOptions.speedX =- ballOptions.speedX;
		}
		if(ballOptions.posX-size/2.5<leftBorder){
			ballOptions.speedX=0;
			ballOptions.speedY=0;
		}
		if(ballOptions.posY-2.5*size<0){
			ballOptions.speedY =- ballOptions.speedY;
		}
		ballOptions.posX+=ballOptions.speedX;
		ballOptions.posY+=ballOptions.speedY;
		ballOptions.update();
	},50);
}

document.addEventListener('keydown', function(event) {
  if (event.shiftKey) {
		if(racketOptions.posLeftY>2.5*size){
			racketOptions.posLeftY-=racketOptions.speedY;
		}
  }
	if (event.ctrlKey){
		if(racketOptions.posLeftY+size<gameFieldOptions.sizeY){
			racketOptions.posLeftY+=racketOptions.speedY;
		}
	}
	racketOptions.update();
});
document.addEventListener('keydown', function(event) {
	if(event.key === 'ArrowUp'){
		if(racketOptions.posRightY>2.5*size){
			racketOptions.posRightY-=racketOptions.speedY;
		}
	}
	if(event.key === 'ArrowDown') {
		if(racketOptions.posRightY+size<gameFieldOptions.sizeY){
			racketOptions.posRightY+=racketOptions.speedY;
		}
  }
	racketOptions.update();
});
run()
start.addEventListener("click",function(){
	timer=0;
	if(ballOptions.posX-2*gameField.offsetLeft<0){
		rightCount++;
	}		
	if(ballOptions.posX+size>gameFieldOptions.sizeX){
		leftCount++;
	}	
	count.textContent = `${leftCount}:${rightCount}`;
	ballOptions.speedX = Math.floor(Math.random() * 21) - 10;
	ballOptions.speedY = Math.floor(Math.random() * 21) - 10;
	ballOptions.posX = gameFieldOptions.sizeX/2;
	ballOptions.posY = gameFieldOptions.sizeY/2 + 2*size;
	ball.style.left = ballOptions.posX + "px";
	ball.style.top = ballOptions.posY + "px";
});