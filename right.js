var canvas;
var ctx;
var x = 40;
var y = 300;
// right part of the house
// draw the gray wall in the front
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
// draw the light brown wall in the front 
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
// draw the gray wall on the side
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
// draw the light brown wall on the side
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
// draw the beige roof in the front
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
// draw the beige roof on the side
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
// draw the dark brown shadow under the roof
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
// draw the brown side of the door
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
// draw the blue door
function door(){
    "use strict";
    ctx.beginPath();
    ctx.rect(550, 180, 40, 170);
    ctx.closePath();
    //style
    ctx.fillStyle = "rgb(70, 102, 179)";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
// left part of the house
// draw the middle roof of the house
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
// draw the left roof of the left part
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
// draw the gray wall of the left part
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
// draw the light brown wall of the left part
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
// draw the gray shadow of the left part
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
// draw the celling of the house
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
// draw the smoke Stack
function smokeStack(){
    "use strict";
    ctx.beginPath();
    ctx.rect(450, -10, 80, 100);
    ctx.closePath();
    // style
    ctx.fillStyle = "rgb(253, 187, 108)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    }
// draw the blue sky
function sky(){
    "use strict";
    ctx.beginPath();
    ctx.rect(0, 0, 500, 300);
    ctx.closePath();
    ctx.fillStyle = "cyan";
    ctx.fill();
    }
// draw the green square
function ground(){
    "use strict";
    ctx.beginPath();
    ctx.rect(0, 300, 500, 200);
    ctx.closePath();
    ctx.fillStyle = "lightgreen";
    ctx.fill();
    }
// draw the path to the house
function path(){
    "use strict";
    ctx.beginPath();
    ctx.arc(50, 310, 230, 0*Math.PI, 0.5*Math.PI);
    ctx.closePath();

    ctx.fillStyle = "lightgray";
    ctx.fill();
    }
// draw the sun
function sun(){
    "use strict";
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, 1*Math.PI);
    ctx.closePath();

    ctx.fillStyle = "yellow";
    ctx.fill();
    }

// variables for the smoke particles
var radius = 20;
var startA = 0;
var endA = 2*Math.PI;
var opacity = 0.8;
var smokeArray = [];

// create a smoke particle object
function object(){
  var start = {
    x: 210,
    y: 145
  }
  smokeArray.push(start);
}

// smoke array for smoke particles
function smokeArray1(){
    for(var i = 0; i < smokeArray.length; i++)
    {
      smokeArray[i].y -= 1;
      if ((Math.random() * 2) > 1){
        smokeArray[i].x += Math.random() * 3;
      }
      else {
      smokeArray[i].x -= Math.random() * 3;
      }
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(255,255,255,0.055)";
      ctx.beginPath();
      ctx.arc(smokeArray[i].x,smokeArray[i].y,radius,startA,endA);
      ctx.fill();
      ctx.closePath();
    }
}

// draws basic canvas for everything besides the smoke
function draw(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
        "use strict";
        sky();
        ground();
        sun();
        path();
    
    // house part
        ctx.save();
        ctx.scale(0.4,0.55);
        ctx.translate(x,y);
    // right part
        gray1();
        wall1();
        gray2();
        wall2();
        cell1();
        cell2();
        shadow();
        wall3();
        door();
    // left part
        middle();
        cellL1();
        grayL1();
        wallL1();
        shadowL();
    // smoke part
        smokeStack();
        celling();
        ctx.restore();
    }

// sets interval for smoke and house to be drawn
var time1 = setInterval(function() {draw(); object(); smokeArray1;}, 40);
function scene(newValue){
  clearInterval(time1);
  newValue = 100 - newValue;
  time1 = setInterval(function () {draw(); object(); smokeArray1();}, newValue);
}
