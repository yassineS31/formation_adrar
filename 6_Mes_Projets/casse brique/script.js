var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10; 
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;





    var x = canvas.width / 2;
    var y = canvas.height - 30;
    var dx =  2;
    var dy = -2;


function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if (y + dy > canvas.height-ballRadius || y + dy < ballRadius ){
        dy = -dy ;
    }

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
        dx = -dx;
    }

    x += dx;
    y += dy;
}

setInterval(draw,10);

