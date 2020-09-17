/*
    TurboDrawing
    By Harshil Parikh
    This is a Doodle drawing software
    It is known for its turbo speed
    It uses many shortcut keys 
    list of shortcut keys are printed in the printing box
    You can use them for a making a Turbo speed drawing
    NOTE THIS IS CASE SENSITIVE which means letter 'r' can     not be replaced by 'R' 
    Use only lower case
    Keep your caps lock off
    This code is of  172 lines
*/


//DECLARIATION OF VARIABLES FOR COLOR OF PEN
var r = 255;
var g = 255;
var b = 255;

//SIZE OF THE PEN
var y = 3;

//COLOR OF THE BACKGROUND
var q = 0;


function setup() {
  //CREATION OF PAGE
  createCanvas(1400, 700);
  background(q);

}



//TURBO DRAWINGMATION
function draw() {
  //draws painting
  if (mouseIsPressed) {
    TurboLine();
  }

  //THIS DOESNOT LET THE SIZE GO IN NEGATIVE
  if (y < 1) {
    y = 1;
  }

  //THIS DOESNOT LET THE SIZE GO ABOVE 60 pixels
  if (y > 100) {
    y = 100;
  }


}



//ALL THE SHORTCUTS FOR TurboDrawing
function keyPressed() {

  //color
  if (key == 'r') {
    r = 255;
    b = 0;
    g = 0;
  }
  if (key == 'g') {
    r = 0;
    b = 0;
    g = 255;
  }
  if (key == 'b') {
    r = 0;
    b = 255;
    g = 0;
  }
  if (key == 'o') {
    r = 255;
    b = 255;
    g = 255;
  }
  if (key == 'x') {
    r = 0;
    b = 0;
    g = 0;
  }

  //size
  if (key == 'a') {
    y--;
  }
  if (key == 'z') {
    y++;
  }

  //delete the whole drawing
  if (key == 'c') {
    TurboClearence();
  }

}

//THIS FUNCTION ACTS FOR CLEARING THE WHOLE BACKGROUND

function TurboClearence() {
  background(q);
  textSize(30);
  text(s, 10, 30);
}



//THIS DRAWS A LINE ACTS AS THE PEN

function TurboLine() {
  stroke(r, g, b);
  strokeWeight(y);
  line(pmouseX, pmouseY, mouseX, mouseY);
}