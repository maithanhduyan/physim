/**
 *
 * WELCOME TO PHYSIM !
 *
 * */
"use strict";
console.log("WELCOME TO PHYSIM !");
var width = 500,
  height = 500;

var body = document.querySelector("body");

var container = document.createElement("div");

body.appendChild(container);

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//svg.setAttribute("viewBox", "1 1 2 2");
svg.setAttribute("id", "scene");
container.appendChild(svg);

svg.setAttribute("width", width);
svg.setAttribute("height", height);

var button = document.createElementNS("http://www.w3.org/2000/svg", "circle");
button.setAttribute("onclick", "circle_click(evt)");
button.setAttribute("cx", 150);
button.setAttribute("cy", 50);
button.setAttribute("r", 10);
button.setAttribute("fill", "red");
button.setAttribute("stroke", "black");
button.setAttribute("stroke-width", 3);
svg.appendChild(button);

var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
line.setAttribute("id", "string");
line.setAttribute("x1", 150);
line.setAttribute("y1", 50);
line.setAttribute("x2", 250);
line.setAttribute("y2", 50);
line.setAttribute("stroke", "brown");
line.setAttribute("stroke-width", 4);

svg.appendChild(line);

var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("id", "ball");
circle.setAttribute("cx", 250);
circle.setAttribute("cy", 50);
circle.setAttribute("r", 20);
circle.setAttribute("fill", "black");
// circle.setAttribute("onclick", "circle_click(evt)");

svg.appendChild(circle);

var in_angle = 0;
var cx = 150,
  cy = 50;
var radius = 100; // cm
var g = 9.81; // m/s^2
var angle = 0; // radians
var vel = 0; // m/s
var dx = 0.002; // s
var acc, vel, penx, peny;
var timerFunction = null;

var stopflag = 0;

function startAnimation() {
  if (!timerFunction) timerFunction = setInterval(swing, dx * 100);
}
function stopAnimation() {
  if (timerFunction != null) {
    clearInterval(timerFunction);
    timerFunction = null;
  }
}

function setPenPos() {
  penx = cx + radius * Math.cos(angle);
  peny = cy + radius * Math.sin(angle);
  scene.getElementById("string").setAttribute("x2", penx);
  scene.getElementById("string").setAttribute("y2", peny);
  scene.getElementById("ball").setAttribute("cx", penx);
  scene.getElementById("ball").setAttribute("cy", peny);
}

function swing() {
  acc = g * Math.cos(angle);
  vel += acc * dx; //Convert m/s/s to m/s
  angle += (vel / (radius / 100)) * dx; //convert m/s into rad/s and then into rad
  setPenPos();
}

function circle_click(evt) {
  console.log(stopflag);
  if (stopflag == 1) {
    stopAnimation();
    console.log("stop");
    stopflag = 0;
  } else if (stopflag == 0) {
    startAnimation();
    console.log("start");
    stopflag = 1;
  }
}
