/**
 *
 * WELCOME TO PHYSIM !
 *
 * */
"use strict";

console.log("WELCOME TO PHYSIM !");
var width = 500,
  height = 500;

// ---------------------------
var in_angle = 0;
var cx = width / 2,
  cy = 150;
var penleng = 100;
var radius = penleng; // cm
var g = 9.81; // m/s^2
var angle = 136; // radians
var vel = 0; // m/s
var dx = 0.002; // s
var acc, vel, penx, peny;
var timerFunction = null;

var hanger = { x: 250, y: 150 };

var stopflag = 0; // stop

var body = document.querySelector("body");

var container = document.createElement("div");
container.setAttribute("align", "center");
body.appendChild(container);

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//svg.setAttribute("viewBox", "1 1 2 2");
svg.setAttribute("id", "scene");
container.appendChild(svg);

svg.setAttribute("width", width);
svg.setAttribute("height", height);
svg.setAttribute("style", "border:1px solid #0c0c0c");

var button = document.createElementNS("http://www.w3.org/2000/svg", "circle");
button.setAttribute("onclick", "circle_click(evt)");
button.setAttribute("cx", width / 2);
button.setAttribute("cy", hanger.y);
button.setAttribute("r", 10);
button.setAttribute("fill", "red");
button.setAttribute("stroke", "black");
button.setAttribute("stroke-width", 3);
svg.appendChild(button);

var graph = document.createElementNS("http://www.w3.org/2000/svg", "g");
graph.setAttribute("font-size", "15");
graph.setAttribute("font-family", "sans-serif");
graph.setAttribute("fill", "black");
graph.setAttribute("stroke", "none");
svg.appendChild(graph);

var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
text.setAttribute("x", width / 2);
text.setAttribute("y", 30);
text.setAttribute("dx", -30);
text.innerHTML = "start";
text.setAttribute("onclick", "circle_click(evt)");
graph.appendChild(text);

var speedText = document.createElementNS("http://www.w3.org/2000/svg", "text");
speedText.setAttribute("x",  10);
speedText.setAttribute("y", 30);
speedText.setAttribute("dx", "1");
speedText.innerHTML = "Speed : ";
graph.appendChild(speedText);

// line
var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
line.setAttribute("id", "string");
line.setAttribute("x1", width / 2);
line.setAttribute("y1", hanger.y);
line.setAttribute("x2", width / 2 + penleng);
line.setAttribute("y2", hanger.y);
line.setAttribute("stroke", "brown");
line.setAttribute("stroke-width", 4);

svg.appendChild(line);

// circle
var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("id", "ball");
circle.setAttribute("cx", width / 2 + penleng);
circle.setAttribute("cy", hanger.y);
circle.setAttribute("r", 22);
circle.setAttribute("fill", "white");
circle.setAttribute("stroke", "black");
circle.setAttribute("stroke-width", 2);
circle.setAttribute("onclick", "circle_click(evt)");
svg.appendChild(circle);

function startAnimation() {
  if (!timerFunction) timerFunction = setInterval(swing, dx * 100);
}
function stopAnimation() {
  if (timerFunction != null) {
    clearInterval(timerFunction);
    timerFunction = null;
  }
}

setPenPos();
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

  speedText.innerHTML = "Speed : " + vel;
}

function circle_click(evt) {
  console.log(stopflag);
  if (stopflag == 1) {
    stopAnimation();
    console.log("stop");
    text.innerHTML = "stop";
    stopflag = 0;
  } else if (stopflag == 0) {
    startAnimation();
    text.innerHTML = "start";
    console.log("start");
    stopflag = 1;
  }
}
