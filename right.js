var canvas;
var ctx;

// order : opposite, side, celling, shadow, door
function drawGray1() {

    "use strict";
    ctx.beginPath();
    ctx.moveTo(604, 196);
    ctx.lineTo(604, 222);
    ctx.lineTo(848, 216);
    ctx.lineTo(848, 142);
    ctx.lineTo(604, 196);
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
    ctx.moveTo(604, 222);
    ctx.lineTo(604, 436);
    ctx.lineTo(848, 452);
    ctx.lineTo(848, 216);
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawGray2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(848, 216);
    ctx.lineTo(1073, 233);
    ctx.lineTo(1073, 176);
    ctx.lineTo(848, 142);


    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawWall2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(848, 452);
    ctx.lineTo(1073, 410);
    ctx.lineTo(1073, 233);
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


function drawCell1(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(589, 173);
    ctx.lineTo(588, 201);
    ctx.lineTo(880, 133);
    ctx.lineTo(880, 98);
    ctx.lineTo(589, 173);

    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawCell2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(880, 133);
    ctx.lineTo( 1124, 174);
    ctx.lineTo(1124, 146);
    ctx.lineTo(880, 98);

    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawShadow(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(1073, 182);
    ctx.lineTo(1124, 174);
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawWall3(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(592, 201);
    ctx.lineTo(588, 201);
    ctx.lineTo(553, 201);
    ctx.lineTo(536, 198);
    ctx.lineTo(536, 433);
    ctx.lineTo(604, 436);
    ctx.closePath();
    //style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawDoor(){
    ctx.rect(550, 230, 40, 170);
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
