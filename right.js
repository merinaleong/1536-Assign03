var canvas;
var ctx;

// order : opposite, side, celling, shadow, door
function drawGray1() {

    "use strict";
    ctx.beginPath();
    ctx.moveTo(604, 246);
    ctx.lineTo(604, 272);
    ctx.lineTo(848, 266);
    ctx.lineTo(848, 192);
    ctx.lineTo(604, 246);
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
    ctx.moveTo(604, 272);
    ctx.lineTo(604, 486);
    ctx.lineTo(848, 502);
    ctx.lineTo(848, 266);
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawGray2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(848, 266);
    ctx.lineTo(1073, 283);
    ctx.lineTo(1073, 226);
    ctx.lineTo(848, 192);


    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawWall2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(848, 502);
    ctx.lineTo(1073, 460);
    ctx.lineTo(1073, 283);
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


function drawCell1(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(589, 223);
    ctx.lineTo(588, 251);
    ctx.lineTo(880, 183);
    ctx.lineTo(880, 148);
    ctx.lineTo(589, 223);

    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawCell2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(880, 183);
    ctx.lineTo( 1124, 224);
    ctx.lineTo(1124, 196);
    ctx.lineTo(880, 148);

    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawShadow(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(1073, 232);
    ctx.lineTo(1124, 224);
    ctx.closePath();
    // style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawWall3(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(592, 251);
    ctx.lineTo(588, 251);
    ctx.lineTo(553, 251);
    ctx.lineTo(536, 248);
    ctx.lineTo(536, 483);
    ctx.lineTo(604, 486);
    ctx.closePath();
    //style
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawDoor(){
    ctx.rect(550, 280, 40, 170);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawChimney(){
  "use strict";
    ctx.beginPath();
    ctx.moveTo(631, 156);
    ctx.lineTo(631, 156);
    ctx.lineTo(631, 48);
    ctx.lineTo(651, 48);
    ctx.lineTo(536, 483);
    ctx.lineTo(654, 90);
    ctx.closePath();
    ctx.fillStyle = 'gray';
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
    drawChimney();
}
