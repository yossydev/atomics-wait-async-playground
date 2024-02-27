// This worker will demonstrate SharedArrayBuffer behavior

onmessage = function (e) {
  console.log("shared-array-buffer.js received message:", e.data);

  // Perform SharedArrayBuffer operations here
  let buffer = new SharedArrayBuffer(8);
  let view = new Int32Array(buffer);
  view[0] = 42;

  console.log("Value in SharedArrayBuffer:", view[0]);
};
