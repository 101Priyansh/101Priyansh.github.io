// 2D inverse-kinematics manipulator — themed to match the portfolio.
let numLinks = 3;
let lengths = [100, 80, 60];
let angles = [];
let joints = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < numLinks; i++) angles.push(PI / 4);
  calculateJoints();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(15, 22, 32); // matches site --bg-2

  // faint grid
  stroke(120, 140, 170, 18);
  strokeWeight(1);
  for (let x = 0; x < width; x += 36) line(x, 0, x, height);
  for (let y = 0; y < height; y += 36) line(0, y, width, y);

  // target follows mouse, idles at centre
  let tx = mouseX > 0 ? mouseX : width / 2;
  let ty = mouseY > 0 ? mouseY : height / 2;
  let target = createVector(tx, ty);
  inverseKinematics(target);
  calculateJoints();

  // links (cyan, tapering)
  strokeCap(ROUND);
  for (let i = 0; i < joints.length - 1; i++) {
    let t = i / (joints.length - 1);
    stroke(56, 189, 248, 140 + t * 100);
    strokeWeight(11 - i * 2);
    line(joints[i].x, joints[i].y, joints[i + 1].x, joints[i + 1].y);
  }

  // joints
  for (let i = 0; i < joints.length; i++) {
    let j = joints[i];
    fill(15, 22, 32);
    stroke(56, 189, 248);
    strokeWeight(2.5);
    circle(j.x, j.y, i === 0 ? 18 : 11);
  }

  // end-effector + target reticle
  let ee = joints[joints.length - 1];
  noStroke();
  fill(129, 140, 248);
  circle(ee.x, ee.y, 8);
  noFill();
  stroke(129, 140, 248, 160);
  strokeWeight(1.5);
  circle(target.x, target.y, 26);
  line(target.x - 16, target.y, target.x + 16, target.y);
  line(target.x, target.y - 16, target.x, target.y + 16);
}

function calculateJoints() {
  joints = [createVector(width / 2, height / 2)];
  for (let i = 0; i < numLinks; i++) {
    let prev = joints[i];
    let angle = angles.slice(0, i + 1).reduce((a, b) => a + b, 0);
    joints.push(createVector(
      prev.x + lengths[i] * cos(angle),
      prev.y + lengths[i] * sin(angle)
    ));
  }
}

function inverseKinematics(target) {
  const threshold = 1.0;
  const maxTries = 10;
  const learningRate = 0.5; // Smoothness factor (between 0 and 1)
  for (let iter = 0; iter < maxTries; iter++) {
    for (let i = numLinks - 1; i >= 0; i--) {
      calculateJoints();
      let end = joints[joints.length - 1];
      let base = joints[i];
      let toEnd = p5.Vector.sub(end, base);
      let toTarget = p5.Vector.sub(target, base);
      let angleBetween = toEnd.angleBetween(toTarget);
      let cross = toEnd.cross(toTarget).z;

      let delta = (cross < 0 ? -angleBetween : angleBetween) * learningRate;
      angles[i] += delta;
    }
    calculateJoints();
    if (p5.Vector.dist(joints[joints.length - 1], target) < threshold) break;
  }
}
