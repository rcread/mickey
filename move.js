var mickey = document.getElementById('mickey');
document.onkeydown = detectKey;

function detectKey(e) {

    var posLeft = document.getElementById('mickey').offsetLeft;
    var posTop = document.getElementById('mickey').offsetTop;
    
    e = e || window.event;

    if (e.keyCode == '38'){
    mickey.style.marginTop = (posTop - 210)+"px";
    }
    else if (e.keyCode == '40'){
    mickey.style.marginTop = (posTop + 10)+"px";
    }
    else if (e.keyCode == '37'){
    mickey.style.marginLeft = (posLeft - 95)+"px";
    }
    else if (e.keyCode == '39'){
    mickey.style.marginLeft = (posLeft + 60)+"px";
    }
    else if (e.keyCode == '13'){
    // reset to original position on enter
    }
}

const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext("2d");

let x = 20;
let y = 20;
let radius = 20;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundaryCheck();
    moveMickey();
}

function boundaryCheck(){
if (y < radius){
    y = radius;
    }
if (y > canvas.height - radius){
    y = canvas.height - radius;
}
if (x < radius){
    x = radius;
}
if (x > canvas.width - radius){
    x = canvas.width - radius;
}
}

function inputs(){
    if (upPressed){
        y = y - speed;
    }
    if (downPressed){
        y = y + speed;
    }
    if (leftPressed){
        x = x - speed;
    }
    if (rightPressed){
        x = x + speed;
    }

}

function moveMickey(){
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI *2);
    ctx.fill();
}

function clearScreen(){
    ctx.fillStyle="black";
ctx.fillRect(0,0, canvas.clientWidth, canvas.height);
}

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event){
    if (event.keyCode == 38){
        upPressed = true;
    }
    if (event.keyCode == 40){
        downPressed = true;
    }
    if (event.keyCode == 37){
        leftPressed = true;
    }
    if (event.keyCode == 39){
        rightPressed = true;
    }
}

function keyUp(event){
    if (event.keyCode == 38){
        upPressed = false;
    }
    if (event.keyCode == 40){
        downPressed = false;
    }
    if (event.keyCode == 37){
        leftPressed = false;
    }
    if (event.keyCode == 39){
        rightPressed = false;
    }
}

drawGame();


const restart = document.querySelector(resetGame);
const resetGame = () => {
    window.location.reload();
}

restart.addEventListener('click', resetGame)
