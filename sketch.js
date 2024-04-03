let record = [];
let recording = true;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // record actions
  if (recording) {
    background(0);

    fill(255);
    console.log("bg");
    circle(mouseX, mouseY, mouseY);

    record.push(
      setRecord({
        frameCount: frameCount,
        milliseconds: millis(),
        mouseX: mouseX,
        mouseY: mouseY,
      })
    );
  }
}

function setRecord({ frameCount, milliseconds, mouseX, mouseY }) {
  return {
    frameCount: frameCount,
    milliseconds: milliseconds,
    mouseX: mouseX,
    mouseY: mouseY,
  };
}

function drawRecord(record) {
  if (recording) {
    noLoop();
    recording = false;
    console.log("stopped");
    record.forEach((frame) => {
      fill(255, 50);
      circle(frame.mouseX, frame.mouseY, mouseY);
    });
  } else {
    recording = true;
    record.length = 0;
    loop();
  }
}

function mouseClicked() {
  console.log("click");
  drawRecord(record);
}
