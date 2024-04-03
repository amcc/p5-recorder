// make a recorder object that can do everything
// recorder: boolean to show status
// record: array to store values..
// current: setter to push object into record array
// empty: function to empty the record array
// ... more to add

const recorder = {
  recording: true,
  record: [],
  set current({ frameCount, milliseconds, mouseX, mouseY }) {
    this.record.push({
      frameCount: frameCount,
      milliseconds: milliseconds,
      mouseX: mouseX,
      mouseY: mouseY,
    });
  },
  empty: function () {
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
    console.log("bg");
    circle(mouseX, mouseY, mouseY);

    recorder.current = {
      frameCount: frameCount,
      milliseconds: millis(),
      mouseX: mouseX,
      mouseY: mouseY,
    };
  }
}

function drawRecord(record) {
  if (recorder.recording) {
    noLoop();
    recorder.recording = false;
    console.log("stopped");
    recorder.record.forEach((frame) => {
      fill(255, 50);
      circle(frame.mouseX, frame.mouseY, mouseY);
    });
  } else {
    recorder.recording = true;
    recorder.empty();
    loop();
  }
}

function mouseClicked() {
  console.log("click");
  drawRecord(recorder.record);
}
