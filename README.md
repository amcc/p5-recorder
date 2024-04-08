## p5 recorder

very simple idea around recording information about each frame so that a drawing can be recreated using only information, rather than bitmaps

- The recorder will automatically store framecount, milliseconds and the mouseX / mouseY of while recording
- An optional settings object with anything extra can also be stored.

# how to use

- Include the object at the top of sketch.js then call **recorder.current()** when you want to record
- **recorder.current()** can include an optional settings object, e.g. **recorder.current({ fill: "blue" });**
- **recorder.recording** is a boolean you can set to true or false to start/stop the recording
- **recorder.empty()** will empty the recorder.
- **recorder.record** is the array containing a record of every recorded frame.

# code

Have a look at sketch.js for an example
