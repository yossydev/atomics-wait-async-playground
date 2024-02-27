// This worker will demonstrate Atomics.waitAsync behavior

onmessage = function (e) {
  console.log("atomics-wait-async.js received message:", e.data);

  // Perform Atomics.waitAsync operations here
  let buffer = new SharedArrayBuffer(4);
  let view = new Int32Array(buffer);
  Atomics.store(view, 0, 0);

  const result = Atomics.waitAsync(view, 0, 0);
  if (result.async) {
    result.value.then(({ value, status }) => {
      console.log(`Atomics.waitAsync result: ${status} with value: ${value}`);
    });
  }
};
