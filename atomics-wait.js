// This worker will demonstrate Atomics.wait behavior

onmessage = function (e) {
  console.log("atomics-wait.js received message:", e.data);

  // Perform Atomics.wait operations here
  let buffer = new SharedArrayBuffer(4);
  let view = new Int32Array(buffer);
  Atomics.store(view, 0, 0);

  console.log("Atomics.wait result:", Atomics.wait(view, 0, 0));
};
