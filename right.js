var canvas;
var ctx;

// order : opposite, side, celling, shadow, door
function drawGray1() {
    
    "use strict";
    ctx.beginPath();
    ctx.moveTo(604, 136);
    ctx.lineTo(604, 162);
    
    ctx.moveTo(604, 162);
    ctx.lineTo(848, 156);
    
    ctx.moveTo(848, 156);
    ctx.lineTo(848, 82);
    
    ctx.moveTo(848, 82);
    ctx.lineTo(604, 136);
    ctx.closePath();
    //style
    
    ctx.lineWidth = 2;
    ctx.fillStyle = 'gray';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawWall1() {
    "use strict";
    ctx.beginPath();
    ctx.moveTo(604, 162);
    ctx.lineTo(604, 376);
    
    ctx.moveTo(604, 376);
    ctx.lineTo(848, 392);
    
    
    ctx.moveTo(848, 392);
    ctx.lineTo(848, 156);
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawGray2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(848, 156);
    ctx.lineTo(1073, 173);
    
    ctx.moveTo(1073, 173);
    ctx.lineTo(1073, 116);
    
    ctx.moveTo(1073, 116);
    ctx.lineTo(848, 82);
    
    
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawWall2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(848, 392);
    ctx.lineTo(1073, 350);
    
    ctx.moveTo(1073, 350);
    ctx.lineTo(1073, 173);
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


function drawCell1(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(589, 113);
    ctx.lineTo(588, 141);
    
    ctx.moveTo(588, 141);
    ctx.lineTo(880, 73);
    
    ctx.moveTo(880, 73);
    ctx.lineTo(880, 38);
    
    ctx.moveTo(880, 38);
    ctx.lineTo(589, 113);
    
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawCell2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(880, 73);
    ctx.lineTo( 1124, 114);
    
    ctx.moveTo(1124, 114);
    ctx.lineTo(1124, 86);
    
    ctx.moveTo(1124, 86);
    ctx.lineTo(880, 38);

    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawShadow(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(1073, 122);
    ctx.lineTo(1124, 114);
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawWall3(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(592, 141);
    ctx.lineTo(588, 141);
    
    ctx.moveTo(588, 141);
    ctx.lineTo(553, 141);
    
    ctx.moveTo(553, 141);
    ctx.lineTo(536, 138);
    
    ctx.moveTo(536, 138);
    ctx.lineTo(536, 373);
    
    ctx.moveTo(536, 373);
    ctx.lineTo(604, 376);
    ctx.closePath();
    //style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawDoor(){
    ctx.rect(550, 180, 40, 170);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    
}
function draw() {
    "use strict";
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    drawGray1();
    drawWall1();
    drawGray2();
    drawWall2();
    drawCell1();
    drawCell2();
    drawShadow();
    drawWall3();
    drawDoor();
}
