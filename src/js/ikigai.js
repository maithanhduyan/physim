/**
 *
 * WELCOME TO PHYSIM !
 *
 * */
"use strict";

console.log("WELCOME TO PHYSIM !");
var width = 800,
  height = 800,
  center = { x: width / 2, y: height / 2 },
  radius = 200,
  cross = radius - 50,
  opacity = 0.5;

var body = document.querySelector("body");

var container = document.createElement("div");
container.setAttribute("align", "center");
body.appendChild(container);

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//svg.setAttribute("viewBox", "1 1 2 2");
svg.setAttribute("id", "scene");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);
svg.setAttribute("style", "border:1px solid #0c0c0c");
container.appendChild(svg);

// 好きなこと --
var circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var circle1points = { x: center.x, y: center.y - cross };
circle1.setAttribute("id", "ball");
circle1.setAttribute("cx", circle1points.x);
circle1.setAttribute("cy", circle1points.y);
circle1.setAttribute("r", radius);
circle1.setAttribute("fill", "#F38686");
circle1.setAttribute("opacity", opacity);
//circle.setAttribute("stroke", "black");
circle1.setAttribute("stroke-width", 2);
svg.appendChild(circle1);

// thing of interest
var sukinakoto = document.createElementNS("http://www.w3.org/2000/svg", "text");
sukinakoto.setAttribute("x", circle1points.x);
sukinakoto.setAttribute("y", circle1points.y - 150);
sukinakoto.setAttribute("text-anchor", "middle");
sukinakoto.innerHTML = "好きなこと";
svg.appendChild(sukinakoto);

// 得意なこと --
var circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle2.setAttribute("cx", center.x - cross);
circle2.setAttribute("cy", center.y);
circle2.setAttribute("r", radius);
circle2.setAttribute("fill", "#FCD0AA");
circle2.setAttribute("opacity", opacity);
//circle.setAttribute("stroke", "black");
circle2.setAttribute("stroke-width", 2);
svg.appendChild(circle2);

// Special skill
var tokuinakoto = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "text"
);
tokuinakoto.setAttribute("x", 100);
tokuinakoto.setAttribute("y", center.y);
tokuinakoto.setAttribute("text-anchor", "middle");
tokuinakoto.innerHTML = "得意なこと";
svg.appendChild(tokuinakoto);

// 世界が求めるもの
var circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle3.setAttribute("cx", center.x);
circle3.setAttribute("cy", center.y + cross);
circle3.setAttribute("r", radius);
circle3.setAttribute("fill", "#F1F9AD");
circle3.setAttribute("opacity", opacity);
circle3.setAttribute("stroke", "transparent");
circle3.setAttribute("stroke-width", 1);
svg.appendChild(circle3);

// What the world wants
// sekai ga motomeru mono
var sekaigamotomerumono = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "text"
);
sekaigamotomerumono.setAttribute("x", center.x);
sekaigamotomerumono.setAttribute("y", center.y + 300);
sekaigamotomerumono.setAttribute("text-anchor", "middle");
sekaigamotomerumono.innerHTML = "世界が求めるもの";
svg.appendChild(sekaigamotomerumono);

// お金になること
var circle4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle4.setAttribute("cx", center.x + cross);
circle4.setAttribute("cy", center.y);
circle4.setAttribute("r", radius);
circle4.setAttribute("fill", "#99DEFF");
circle4.setAttribute("opacity", opacity);
circle4.setAttribute("stroke", "transparent");
circle4.setAttribute("stroke-width", 1);
svg.appendChild(circle4);

// To be money
// okane ni naru koto
var okaneninarukoto = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "text"
);
okaneninarukoto.setAttribute("x", center.x + 280);
okaneninarukoto.setAttribute("y", center.y);
okaneninarukoto.setAttribute("text-anchor", "middle");
okaneninarukoto.innerHTML = "お金になること";
svg.appendChild(okaneninarukoto);

// 生き甲斐
var ikigai = document.createElementNS("http://www.w3.org/2000/svg", "text");
ikigai.setAttribute("x", center.x);
ikigai.setAttribute("y", center.y);
ikigai.setAttribute("font-weight", "bold");
ikigai.setAttribute("font-size", "22px");
ikigai.setAttribute("stroke", "transparent");
ikigai.setAttribute("text-anchor", "middle");
ikigai.innerHTML = "生き甲斐";
svg.appendChild(ikigai);
// 生き甲斐の図
var ikigainozu = document.createElementNS("http://www.w3.org/2000/svg", "text");
ikigainozu.setAttribute("x", center.x);
ikigainozu.setAttribute("y", 30);
ikigainozu.setAttribute("font-weight", "bold");
ikigainozu.setAttribute("font-size", "22px");
ikigainozu.setAttribute("stroke", "transparent");
ikigainozu.setAttribute("text-anchor", "middle");
ikigainozu.innerHTML = "生き甲斐の図";
svg.appendChild(ikigainozu);

// 情熱 - passion
var passion = document.createElementNS("http://www.w3.org/2000/svg", "text");
passion.setAttribute("x", center.x - 100);
passion.setAttribute("y", center.y - 100);
passion.setAttribute("text-anchor", "middle");
passion.innerHTML = "情熱";
svg.appendChild(passion);

// 使命 - mission
var mission = document.createElementNS("http://www.w3.org/2000/svg", "text");
mission.setAttribute("x", center.x + 100);
mission.setAttribute("y", center.y - 100);
mission.setAttribute("text-anchor", "middle");
mission.innerHTML = "使命";
svg.appendChild(mission);

// 専門性 - expertise
var expertise = document.createElementNS("http://www.w3.org/2000/svg", "text");
expertise.setAttribute("x", center.x - 100);
expertise.setAttribute("y", center.y + 100);
expertise.setAttribute("text-anchor", "middle");
expertise.innerHTML = "専門性";
svg.appendChild(expertise);

// 天職 - vocation
var vocation = document.createElementNS("http://www.w3.org/2000/svg", "text");
vocation.setAttribute("x", center.x + 100);
vocation.setAttribute("y", center.y + 100);
vocation.setAttribute("text-anchor", "middle");
vocation.innerHTML = "天職";
svg.appendChild(vocation);

var mpoint1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
mpoint1.setAttribute("cx", center.x);
mpoint1.setAttribute("cy", center.y - 80);
mpoint1.setAttribute("r", 5);
mpoint1.setAttribute("fill", "#000");
svg.appendChild(mpoint1);

var mpoint2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
mpoint2.setAttribute("cx", center.x - 80);
mpoint2.setAttribute("cy", center.y);
mpoint2.setAttribute("r", 5);
mpoint2.setAttribute("fill", "#000");
svg.appendChild(mpoint2);

var mpoint3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
mpoint3.setAttribute("cx", center.x);
mpoint3.setAttribute("cy", center.y + 80);
mpoint3.setAttribute("r", 5);
mpoint3.setAttribute("fill", "#000");
svg.appendChild(mpoint3);

var mpoint4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
mpoint4.setAttribute("cx", center.x + 80);
mpoint4.setAttribute("cy", center.y);
mpoint4.setAttribute("r", 5);
mpoint4.setAttribute("fill", "#000");
svg.appendChild(mpoint4);

//<path d="M 10 10 C 20 20, 40 40, 50 100" stroke="black" fill="transparent"></path>
var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path1.setAttribute("d", "M 400 320  S 100,320 100,150 ");
path1.setAttribute("stroke", "black");
path1.setAttribute("fill", "transparent");
svg.appendChild(path1);

var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path2.setAttribute("d", "M 320 400  S 420,640 100,700 ");
path2.setAttribute("stroke", "black");
path2.setAttribute("fill", "transparent");
svg.appendChild(path2);

var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path3.setAttribute("d", "M 400 480  S 680,420 700,700 ");
path3.setAttribute("stroke", "black");
path3.setAttribute("fill", "transparent");
svg.appendChild(path3);

var path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path4.setAttribute("d", "M 480 400  S 420,160 660,120 ");
path4.setAttribute("stroke", "black");
path4.setAttribute("fill", "transparent");
svg.appendChild(path4);

// 不満は無く満足だがどこか無益な感じ - I'm satisfied with no complaints, but it feels useless
var text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
text1.setAttribute("x", 120);
text1.setAttribute("y", 140);
text1.setAttribute("text-anchor", "middle");
text1.setAttribute("font-size", "12px");
text1.innerHTML = "不満は無く満足だがどこか無益な感じ";
svg.appendChild(text1);

// 心地良いが空虚 - Comfortable but empty
var text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
text2.setAttribute("x", 100);
text2.setAttribute("y", 720);
text2.setAttribute("text-anchor", "middle");
text2.setAttribute("font-size", "12px");
text2.innerHTML = "心地良いが空虚";
svg.appendChild(text2);

// 高揚と豊かな満足感これで良いのか？
// 疑心暗鬼な部分もあり
var text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
text3.setAttribute("x", 680);
text3.setAttribute("y", 720);
text3.setAttribute("text-anchor", "middle");
text3.setAttribute("font-size", "12px");
text3.innerHTML = "高揚と豊かな満足感これで良いのか？";
svg.appendChild(text3);
var text4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
text4.setAttribute("x", 680);
text4.setAttribute("y", 740);
text4.setAttribute("text-anchor", "middle");
text4.setAttribute("font-size", "12px");
text4.innerHTML = "疑心暗鬼な部分もあり";
svg.appendChild(text4);

// 喜びと充実はあるが経済的に豊かとは言えない;
var text5 = document.createElementNS("http://www.w3.org/2000/svg", "text");
text5.setAttribute("x", 670);
text5.setAttribute("y", 100);
text5.setAttribute("text-anchor", "middle");
text5.setAttribute("font-size", "12px");
text5.innerHTML = "喜びと充実はあるが経済的に豊かとは言えない";
svg.appendChild(text5);
