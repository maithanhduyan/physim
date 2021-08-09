/**
 *
 * WELCOME TO PHYSIM !
 *
 * */

console.log("WELCOME TO PHYSIM !");
var width = 300,
  height = 300;

const hour_hand_length = 0.45; // ratio to radius of clock
const minute_hand_length = 0.7; // ratio to radius of clock
const sec_hand_length = 0.9; // ratio to radius of clock

var body = document.querySelector("body");

var container = document.createElement("div");
container.setAttribute("style","width:999px; margin:0 auto;");

body.appendChild(container);

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("viewBox", "-1 -1 2 2");
container.appendChild(svg);

svg.setAttribute("width", width);
svg.setAttribute("height", height);

const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", 0);
circle.setAttribute("cy", 0);
circle.setAttribute("r",.97);
circle.setAttribute("style", "fill:none; stroke:black; stroke-width:2%");

svg.appendChild(circle);

// draw second marks
for (let ii = 0;ii < 60; ii++) {
  const jj = 2 * Math.PI / 60 *ii;
  const sec_pos = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  sec_pos.setAttribute("cx", (Math.cos(jj)*.9) .toString ());
  sec_pos.setAttribute("cy", (Math.sin(jj)*.9) .toString ());
  sec_pos.setAttribute("r", "0.8%");
  sec_pos.setAttribute("style", "fill:grey;stroke:none;");
  svg.appendChild(sec_pos);
};

// draw hour marks
for (let ii = 0;ii < 12; ii++) {
  const jj = 2 * Math.PI / 12 *ii;
  const hour_pos = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  hour_pos.setAttribute("cx", (Math.cos(jj)*.9) .toString ());
  hour_pos.setAttribute("cy", (Math.sin(jj)*.9) .toString ());
  hour_pos.setAttribute("r", "3%");
  hour_pos.setAttribute("style", "fill:black;stroke:none;");
  svg.appendChild(hour_pos);
};

// hour hand
const hour_hand = document.createElementNS("http://www.w3.org/2000/svg", "line");
hour_hand.setAttribute("x1", "0");
hour_hand.setAttribute("y1", "0");
hour_hand.setAttribute("x2", "0");
hour_hand.setAttribute("y2", (-1 * hour_hand_length) .toString ());
hour_hand.setAttribute("style", "stroke:blue; stroke-width:5%;stroke-linecap:round");
hour_hand.setAttribute("transform", "rotate(" + (((new Date()).getHours() % 12) * 30 + (new Date()).getMinutes() /2) +  ")");
svg.appendChild(hour_hand);

// minute hand
const minute_hand = document.createElementNS("http://www.w3.org/2000/svg", "line");
minute_hand.setAttribute("x1", "0");
minute_hand.setAttribute("y1", "0");
minute_hand.setAttribute("x2", "0");
minute_hand.setAttribute("y2", (-1 * minute_hand_length) .toString ());
minute_hand.setAttribute("style", "stroke:red; stroke-width:3%;stroke-linecap:round");
minute_hand.setAttribute("transform", "rotate(" + ((new Date()).getMinutes()*6) +  ")");
svg.appendChild(minute_hand);

// second hand
const sec_hand = document.createElementNS("http://www.w3.org/2000/svg", "line");
sec_hand.setAttribute("x1", "0");
sec_hand.setAttribute("y1", "0");
sec_hand.setAttribute("x2", "0");
sec_hand.setAttribute("y2", (-1 * sec_hand_length) .toString ());
sec_hand.setAttribute("style", "stroke:black; stroke-width:1%;stroke-linecap:round");
sec_hand.setAttribute("transform", "rotate(" + ((new Date()).getSeconds()*6) +  ")");
svg.appendChild(sec_hand);

const f_update_clock = (() => {
  const dd = new Date();
  sec_hand.setAttribute("transform", "rotate(" + (dd.getSeconds()*6) +  ")");
  minute_hand.setAttribute("transform", "rotate(" + (dd.getMinutes()*6) +  ")");
  hour_hand.setAttribute("transform", "rotate(" + ((dd.getHours() % 12) * 30 + dd.getMinutes() /2) +  ")");
});

setInterval( f_update_clock , 1000);