let numLinks = 3;
let lengths = [100, 80, 60];
let angles = [];
let joints = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < numLinks; i++) angles.push(PI / 4);
  calculateJoints();
}

function draw() {
  background(250);
  let target = createVector(mouseX, mouseY);
  inverseKinematics(target);
  calculateJoints();

  stroke(0);
  strokeWeight(10);
  for (let i = 0; i < joints.length - 1; i++) {
    line(joints[i].x, joints[i].y, joints[i + 1].x, joints[i + 1].y);
  }

  fill(0);
  noStroke();
  for (let j of joints) circle(j.x, j.y, 12);

  fill(255, 0, 0);
  circle(target.x, target.y, 10);
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

// function inverseKinematics(target) {
//   const threshold = 1.0;
//   const maxTries = 10;
//   for (let iter = 0; iter < maxTries; iter++) {
//     for (let i = numLinks - 1; i >= 0; i--) {
//       calculateJoints();
//       let end = joints[joints.length - 1];
//       let base = joints[i];
//       let toEnd = p5.Vector.sub(end, base);
//       let toTarget = p5.Vector.sub(target, base);
//       let angleBetween = toEnd.angleBetween(toTarget);
//       let cross = toEnd.cross(toTarget).z;
//       angles[i] += cross < 0 ? -angleBetween : angleBetween;
//     }
//     calculateJoints();
//     if (p5.Vector.dist(joints[joints.length - 1], target) < threshold) break;
//   }
// }

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

