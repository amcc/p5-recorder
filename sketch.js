// make a recorder object that can do everything
// recorder: boolean to show status
// record: array to store values..
// current: function to push object into record array
// (this automatically has access to p5 stuff if its called from draw(), setup or anytime after p5 is in the window)
// empty: function to empty the record array
// ... more to add perhaps?

const recorder = {
  recording: true,
  record: [],
  current: function (settings = {}) {
    // we will use the p5 object to automatically store info about time and the mouse
    // we will also an optional settings object for custom properties.
    this.record.push({
      frameCount: frameCount,
      milliseconds: millis(),
      mouseX: mouseX,
      mouseY: mouseY,
      settings: settings,
    });
  },
  empty: function () {
    // reset everything, this empties the record array
    this.record.length = 0;
  },
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // record actions
  if (recorder.recording) {
    background(0);

    fill(255);
    circle(mouseX, mouseY, mouseY);

    // record the current frame, there is an optional settings object we can use
    // recorder.current()
    recorder.current({ fill: "blue" });
  }
}

function drawRecord() {
  if (recorder.recording) {
    // stop the loop
    noLoop();
    // stop the recording
    recorder.recording = false;

    // loop through every recorded frame and do something
    recorder.record.forEach((frame) => {
      // below line checks for something custom in settings
      if (frame.settings.fill) fill(frame.settings.fill);
      circle(frame.mouseX, frame.mouseY, mouseY);
    });
  } else {
    // restart recording and empty the old recording
    recorder.recording = true;
    recorder.empty();
    // start the loop
    loop();
  }
}

function mouseClicked() {
  drawRecord();
}
