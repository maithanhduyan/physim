var biendo_slider = document.getElementById("biendo");
var output1 = document.getElementById("display1");
var tocdo_slider = document.getElementById("tocdo");
var output2 = document.getElementById("display2");
// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Bodies = Matter.Bodies,
  Body = Matter.Body,
  Events = Matter.Events,
  Composite = Matter.Composite,
  Constraint = Matter.Constraint,
  Bodies = Matter.Bodies,
  Vector = Matter.Vector;
Composites = Matter.Composites;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
    showAngleIndicator: true,
    showVelocity: true,
    //showAxes: true,
    showCollisions: true,
    //showConvexHulls: true,
  },
});

// create  a ground
var truc = Bodies.circle(400, 300, 10, { isStatic: true });
var ground = Bodies.rectangle(400, 600, 800, 10, {
  isStatic: true,
  density: 0.14,
  frictionAir: 0.005,
});

// add all of the bodies to the world
Composite.add(engine.world, [truc, ground]);

var ball = Bodies.circle(401, 450, 30, { density: 0.14, frictionAir: 0.005 });
var constraint = Constraint.create({
  bodyA: truc,
  //pointA: { x: 400, y: 300 },
  bodyB: ball,
  //pointB: { x: -500, y: -400 },
});

Composite.add(engine.world, ball);
Composite.add(engine.world, constraint);

// add bodies
var size = 40,
  counter = -1;

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: true,
      },
    },
  });

var biendo = 50;
var tocdo = 0.04;
Events.on(engine, "beforeUpdate", function (event) {
  counter += tocdo; // Velocity

  if (counter < 0) {
    return;
  }

  var px = 400 + biendo * Math.sin(counter);

  // body is static so must manually update velocity for friction to work
  Body.setVelocity(truc, { x: px - truc.position.x, y: 0 });
  Body.setPosition(truc, { x: px, y: truc.position.y });

  //
  //Body.setAngularVelocity(ball, 20);
  Body.rotate(ball, 20);
  //console.log(ball.position.x, ball.position.y);
});

Composite.add(engine.world, mouseConstraint);
// keep the mouse in sync with rendering
render.mouse = mouse;

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
// Events
biendo = biendo_slider.value;

biendo_slider.oninput = function () {
  biendo = this.value;
  output1.innerHTML = biendo;
};

//tocdo = tocdo_slider.value;
tocdo_slider.oninput = function () {
  tocdo = this.value / 100;
  output2.innerHTML = tocdo;
};

var trail = [];
Events.on(render, "afterRender", function () {
  trail.unshift({
    position: Vector.clone(ball.position),
    speed: ball.speed,
  });

  Render.startViewTransform(render);
  render.context.globalAlpha = 0.7;

  for (var i = 0; i < trail.length; i += 1) {
    var point = trail[i].position,
      speed = trail[i].speed;

    var hue = 250 + Math.round((1 - Math.min(1, speed / 10)) * 170);
    render.context.fillStyle = "hsl(" + hue + ", 100%, 55%)";
    render.context.fillRect(point.x, point.y, 2, 2);
  }

  render.context.globalAlpha = 1;
  Render.endViewTransform(render);

  if (trail.length > 200) {
    trail.pop();
  }
});

Events.on(runner, "afterTick", function (event) {
  //console.log("tick");
});
