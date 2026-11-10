// 04 · Make a Tone
// p5.sound. No recording at all. An oscillator makes the sound as you listen.
// Hold a finger down and it sounds. Left and right is the pitch. Let go and it fades.
// The shape of the wave is the colour of the tone. Try each waveType below.

// phones only start sound inside a tap. p5-phone's tap message starts p5.sound right there,
// then calls userSetupComplete() once everything is on.
let unlocked = false; // has the tap turned the sound on?
function userSetupComplete() {
  unlocked = true;
}




// the feel of the piece. change these before you change anything else.
let waveType = 'triangle'; // 'sine', 'triangle', 'sawtooth' or 'square'
let lowest = 110;      // hertz at the left edge
let highest = 880;     // hertz at the right edge. three octaves up
let volume = 0.4;      // from 0 to 1
let fadeTime = 0;    // seconds to fade in and out. 0 clicks


let osc;               // the oscillator
let started = false;
let pitch = 220;       // hertz





let orientationX = 0;  // Current rotation around X axis (front/back tilt)
let orientationY = 0;  // Current rotation around Y axis (left/right tilt)
let orientationZ = 0;  // Current rotation around Z axis (device rotation)

// Variables to store rotational velocity
let velocityX = 0;     // Change in X rotation per frame
let velocityY = 0;     // Change in Y rotation per frame
let velocityZ = 0;     // Change in Z rotation per frame

function setup() {
  createCanvas(windowWidth, windowHeight);
  lockGestures();

  // on a laptop, show a QR code of this page so you can open it on your phone
  if (location.protocol === 'https:' && window.self === window.top) {
    showDesktopQr();
  }

  

  enableSoundTap('Tap to turn on sound');
      enableGyroTap('Tap screen to enable motion sensors');

  // it runs all the time, silent, and a finger turns the volume up
  osc = new p5.Oscillator(pitch, waveType);
  osc.amp(0);
}


// https://www.wikiloops.com/embed/126876/126876.mp3

function draw() {
  background(20);

  // start it once the sound is on
  if (unlocked && !started) {
    osc.start();
    started = true;
  }

       orientationX = rotationX;
        orientationY = rotationY;
        orientationZ = rotationZ;
        
        // Calculate rotational velocity (change from previous frame)
        // p5.js provides pRotationX, pRotationY, pRotationZ for previous frame values
        velocityX = orientationX - pRotationX;
        velocityY = orientationY - pRotationY;
        velocityZ = orientationZ - pRotationZ;

          fill(50, 50, 50);  // Dark text
        textAlign(CENTER, CENTER);
        
        // Show current orientation title
        textSize(24);
        text("Device Rotational Velocity", width/2, height/2 - 140);
        
        // Show current rotation values
        textSize(18);
        fill(80, 80, 80);
        text("Current Rotation:", width/2, height/2 - 100);
        
        textSize(16);
        text("X: " + orientationX.toFixed(1) + "°", width/2, height/2 - 80);
        text("Y: " + orientationY.toFixed(1) + "°", width/2, height/2 - 60);
        text("Z: " + orientationZ.toFixed(1) + "°", width/2, height/2 - 40);
        
        // Show velocity values (change per frame)
        textSize(18);
        fill(150, 50, 50);  // Red text for velocity
        text("Rotational Velocity (°/frame):", width/2, height/2);
        
        textSize(16);
        text("X Velocity: " + velocityX.toFixed(2) + "°/frame", width/2, height/2 + 20);
        text("Y Velocity: " + velocityY.toFixed(2) + "°/frame", width/2, height/2 + 40);
        text("Z Velocity: " + velocityZ.toFixed(2) + "°/frame", width/2, height/2 + 60);
        
        // Show velocity magnitude (total rotational speed)
        let totalVelocity = sqrt(velocityX * velocityX + velocityY * velocityY + velocityZ * velocityZ);
        textSize(18);
        fill(50, 100, 150);  // Blue text for total
        text("Total Velocity: " + totalVelocity.toFixed(2) + "°/frame", width/2, height/2 + 90);

  // 1. read the finger. 2. map it onto a pitch. 3. use it.
  let sounding = unlocked && mouseIsPressed;
  if (sounding) {
    pitch = map(rotationZ, 0, rotationX, lowest, highest, true);
    osc.freq(pitch, 0.05);
  }

  // the wave: one line, its shape from waveType, its width from the pitch
  let cy = 70 + (height - 160) / 2;
  let waves = map(pitch, lowest, highest, 2, 16);
  let h = 0;
  if (sounding) {
    h = min(width, height) * 0.2;
  }
  stroke(255, 200, 0);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let x = 0; x <= width; x += 2) {
    let phase = (x / width * waves) % 1;
    vertex(x, cy - h * waveShape(phase));
  }
  endShape();
  strokeWeight(1);

  // the labels sit in the top 70 pixels
  noStroke();
  fill(255);
  textSize(16);
  text('p5.Oscillator · ' + waveType + '   ' + round(pitch) + ' hertz', 20, 30);
  if (!unlocked) {
    text('tap to turn on sound', 20, 52);
  } else {
    text('hold a finger down: left is low, right is high', 20, 52);
  }
  fill(160);
  textSize(13);
  text('Nothing was recorded. Change waveType and listen again.', 20, height - 12);
}

// the height of the wave at a point in its cycle, from -1 to 1. only for the drawing.
function waveShape(phase) {
  if (waveType === 'square') {
    if (phase < 0.5) {
      return 1;
    }
    return -1;
  } else if (waveType === 'sawtooth') {
    return 1 - 2 * phase;
  } else if (waveType === 'triangle') {
    return 1 - 4 * abs(phase - 0.5);
  }
  return sin(phase * TWO_PI);
}

function mousePressed() {
  if (unlocked) {
    osc.amp(volume, fadeTime); // fade in
  }
  return false;
}

function mouseReleased() {
  osc.amp(0, fadeTime); // fade out
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




