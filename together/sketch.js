// 1 Who's Here
// Share Basics. Join a room and see who else is in it.
// Each phone sends a name and a colour. Every phone shows everyone.
//
// Your room: change ROOM to the room you were given. Phones with the same ROOM meet.
// Your name: put it in MY_NAME. Leave it empty and the phone picks an animal.
//
// Key data: me (what this phone sends), guests (what everyone else sends),
// shareJoined() and shareLeft() (someone came or went)

const SHARE_HOST = 'https://p5-phone-share.npuckett.workers.dev';   // the class server
const ROOM = 'Quinn';    // your room
const MY_NAME = '';      // your name

const ANIMALS = ['otter', 'heron', 'moth', 'fox', 'newt', 'crow', 'hare', 'wren', 'seal', 'lynx'];
let news = '';           // the last person who came or went
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
  textFont('system-ui');

  // me is what this phone sends. Here it is set once: a name and a colour.
  shareSetup({
    host: SHARE_HOST,
    room: ROOM,
    app: 'whos-here',
    me: { name: MY_NAME || random(ANIMALS), hue: floor(random(360)) }
  });
  enablePermissionsTap(['share'], 'Tap to join');   // the tap joins the room
  showDesktopQr();   // on a laptop: a QR code, so a phone can join
    enableSoundTap('Tap to turn on sound');
      enableGyroTap('Tap screen to enable motion sensors');

  // it runs all the time, silent, and a finger turns the volume up
  osc = new p5.Oscillator(pitch, waveType);
  osc.amp(0);
}

function draw() {
  const k = min(width / 390, height / 700);   // one size unit for this screen
  background(20);
  noStroke();
  colorMode(HSB);

  // everyone in the room: me first, then the guests that have a name
  const everyone = [me].concat(guestsWith('name'));

  textAlign(LEFT, CENTER);
  for (let i = 0; i < everyone.length; i++) {
    const person = everyone[i];
    const y = 120 * k + i * 56 * k;
    fill(person.hue, 70, 100);
    circle(50 * k, y, 36 * k);
    fill(0, 0, 100);
    textSize(24 * k);
    text(person.name + (person === me ? '  (you)' : ''), 84 * k, y);
  }

  textAlign(CENTER, CENTER);
  fill(0, 0, 100);
  textSize(28 * k);
  text(everyone.length + ' here', width / 2, 50 * k);
  fill(0, 0, 60);
  textSize(16 * k);
  text(news, width / 2, height - 92 * k);
  text(shareStatusText(), width / 2, height - 66 * k);
  text('you send ' + JSON.stringify(me), 10 * k, height - 50 * k, width - 20 * k, 44 * k);   // a box, so a long line wraps
  
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


// someone joined after you. data is what they send
function shareJoined(id, data) {
  if (data.name) news = data.name + ' joined';   // a page with no name, like the Room Inspector, is skipped
}

// someone left. data is the last thing they sent
function shareLeft(id, data) {
  if (data.name) news = data.name + ' left';
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
