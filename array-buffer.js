// This worker will demonstrate ArrayBuffer behavior

onmessage = function (e) {
  console.log("array-buffer.js received message:", e.data);

  // Perform ArrayBuffer operations here
  let buffer = new ArrayBuffer(8);
  let view = new Int32Array(buffer);
  view[0] = 42;

  console.log("Value in ArrayBuffer:", view[0]);
};
