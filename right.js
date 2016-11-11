var canvas;
var ctx;
var x = 40;
var y = 300;
// order : opposite, side, celling, shadow, door
function gray1() {
    "use strict";
    ctx.beginPath();
    ctx.moveTo(604, 136);
    ctx.lineTo(604, 162);
    ctx.lineTo(848, 156);
    ctx.lineTo(848, 82);
    ctx.closePath();
    //style
    ctx.fillStyle = "rgb(84, 73, 90)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function wall1() {
    "use strict";
    ctx.beginPath();
    ctx.moveTo(604, 162);
    ctx.lineTo(604, 376);
    ctx.lineTo(848, 392);
    ctx.lineTo(848, 156);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(253, 187, 108)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function gray2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(848, 156);
    ctx.lineTo(1073, 173);
    ctx.lineTo(1073, 116);
    ctx.lineTo(848, 82);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(84, 73, 90)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function wall2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(848, 156);
    ctx.lineTo(1073, 173);
    ctx.lineTo(1073, 350);
    ctx.lineTo(848, 392);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(253, 187, 108)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function cell1(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(589, 113);
    ctx.lineTo(588, 141);
    ctx.lineTo(880, 73);
    ctx.lineTo(880, 38);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(238, 190, 144)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function cell2(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(880, 38);
    ctx.lineTo(880,73);
    ctx.lineTo(1124, 114);
    ctx.lineTo(1124, 86);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(238, 190, 144)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function shadow(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(880, 73);
    ctx.lineTo(848, 82);
    ctx.lineTo(1073, 116);
    ctx.lineTo(1110, 114);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(85, 48, 29)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function wall3(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(536, 138);
    ctx.lineTo(536, 373);
    ctx.lineTo(602, 375);
    ctx.lineTo(602, 137);
    ctx.lineTo(588, 141);
    ctx.lineTo(553, 141);
    ctx.closePath();
    //style
    ctx.fillStyle = "rgb(131, 85, 62)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function door(){
    "use strict";
    ctx.beginPath();
    ctx.rect(550, 180, 40, 170);
    ctx.closePath();
    ctx.fillStyle = "rgb(70, 102, 179)";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
// left part
function middle(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(552, 110);
    ctx.lineTo(554, 140);
    ctx.lineTo(588, 140);
    ctx.lineTo(588, 116);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(238, 190, 144)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function cellL1(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(168, 48);
    ctx.lineTo(169, 73);
    ctx.lineTo(554, 141);
    ctx.lineTo(552, 112);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(238, 190, 144)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function grayL1(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(226, 84);
    ctx.lineTo(228, 168);
    ctx.lineTo(490, 168);
    ctx.lineTo(492, 130);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(84, 73, 90)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
function wallL1(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(228,170);
    ctx.lineTo(228,357);
    ctx.lineTo(492,373);
    ctx.lineTo(492, 130);
    ctx.lineTo(489, 168);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(253, 187, 108)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    }
function shadowL(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(492, 130);
    ctx.lineTo(492, 374);
    ctx.lineTo(537, 368);
    ctx.lineTo(533, 137);
    ctx.closePath();
    // style
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    }
function celling(){
    "use strict";
    ctx.beginPath();
    ctx.moveTo(533, 84);
    ctx.lineTo(168, 48);
    ctx.lineTo(552, 112);
    ctx.lineTo(588, 116);
    ctx.lineTo(640, 101);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(251, 217, 184)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    }
function smokeStack(){
        "use strict";
        ctx.beginPath();
        ctx.rect(450, -10, 80, 100);
        ctx.closePath();
        ctx.fillStyle = "rgb(253, 187, 108)";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
function sky(){
        "use strict";
        ctx.beginPath();
        ctx.rect(0, 0, 500, 300);
        ctx.closePath();
        ctx.fillStyle = "cyan";
        ctx.fill();
    }
function ground(){
        "use strict";
        ctx.beginPath();
        ctx.rect(0, 300, 500, 200);
        ctx.closePath();
        ctx.fillStyle = "lightgreen";
        ctx.fill();
    }
function path(){
        "use strict";
        ctx.beginPath();
        ctx.arc(50, 310, 230, 0*Math.PI, 0.5*Math.PI);
        ctx.closePath();

        ctx.fillStyle = "lightgray";
        ctx.fill();
    }
function sun(){
        "use strict";
        ctx.beginPath();
        ctx.arc(0, 0, 100, 0, 1*Math.PI);
        ctx.closePath();

        ctx.fillStyle = "yellow";
        ctx.fill();
    }

var smokeShape = {x: 210, y: 140, r: 20, s: 0, e: 2*Math.PI};
var opacity = 0.8;
var height = 50;
var yMinus = 0.5;
var yStart = 140;

function smoke(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(smokeShape.x,smokeShape.y,smokeShape.r,smokeShape.s,smokeShape.e);
  ctx.fillStyle = "rgba(255,255,255,"+opacity+")";
  ctx.fill();
   if (smokeShape.y > height){
     smokeShape.y -= yMinus;
     opacity -= 0.008;
   } else {
     smokeShape.y = yStart;
     opacity = 0.8;//before
   }
}

var smokeShape1 = {x: 205, y: 140, r: 20, s: 0, e: 2*Math.PI};
var opacity1 = 0.7;
var height1 = 49;
var yMinus1 = 0.5;
var yStart1 = 140;

function smoke1(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(smokeShape1.x,smokeShape1.y,smokeShape1.r,smokeShape1.s,smokeShape1.e);
  ctx.fillStyle = "rgba(255,255,255,"+opacity1+")";
  ctx.fill();
   if (smokeShape1.y > height1){
     smokeShape1.y -= yMinus1;
     opacity1 -= 0.008;
   } else {
     smokeShape1.y = yStart1;
     opacity1 = 0.8;//before
   }
}

var smokeShape2 = {x: 215, y: 145, r: 25, s: 0, e: 2*Math.PI};
var opacity2 = 0.6;
var height2 = 48;
var yMinus2 = 0.5;
var yStart2 = 145;

function smoke2(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(smokeShape2.x,smokeShape2.y,smokeShape2.r,smokeShape2.s,smokeShape2.e);
  ctx.fillStyle = "rgba(255,255,255,"+opacity2+")";
  ctx.fill();
   if (smokeShape2.y > height2){
     smokeShape2.y -= yMinus2;
     opacity2 -= 0.008;
   } else {
     smokeShape2.y = yStart2;
     opacity2 = 0.8;
   }
}

var smokeShape3 = {x: 200, y: 125, r: 10, s: 0, e: 2*Math.PI};
var opacity3 = 1.0;
var height3 = 47;
var yMinus3 = 0.5;
var yStart3 = 125;

function smoke3(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(smokeShape3.x,smokeShape3.y,smokeShape3.r,smokeShape3.s,smokeShape3.e);
  ctx.fillStyle = "rgba(255,255,255,"+opacity3+")";
  ctx.fill();
   if (smokeShape3.y > height3){
     smokeShape3.y -= yMinus3;
     opacity3 -= 0.008;
   } else {
     smokeShape3.y = yStart3;
     opacity3 = 0.80;
   }
}

var smokeShape4 = {x: 220, y: 120, r: 15, s: 0, e: 2*Math.PI};
var opacity4 = 0.95;
var height4 = 46;
var yMinus4 = 0.5;
var yStart4 = 120;

function smoke4(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(smokeShape4.x,smokeShape4.y,smokeShape4.r,smokeShape4.s,smokeShape4.e);
  ctx.fillStyle = "rgba(255,255,255,"+opacity4+")";
  ctx.fill();
   if (smokeShape4.y > height4){
     smokeShape4.y -= yMinus4;
     opacity4 -= 0.008;
   } else {
     smokeShape4.y = yStart4;
     opacity4 = 0.80;
   }
}

function draw(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
        "use strict";
        sky();
        ground();
        sun();
        path();
        ctx.save();
        ctx.scale(0.4,0.55);
        ctx.translate(x,y);
        gray1();
        wall1();
        gray2();
        wall2();
        cell1();
        cell2();
        shadow();
        wall3();
        door();

        middle();
        cellL1();
        grayL1();
        wallL1();
        shadowL();

        smokeStack();
        celling();
        ctx.restore();
    }

function scene(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  var time = setInterval(function () {
    draw();
    smoke();
    smoke1();
    smoke2();
    smoke3();
    smoke4();
  }, 30);
    var slider = document.getElementById("slides").value;
}
