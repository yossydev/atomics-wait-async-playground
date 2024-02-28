onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);

  const num = 1;
  Atomics.add(sharedArray, 0, num);
  console.log("Signal sender: add data");
  Atomics.notify(sharedArray, 0, num);
  console.log("Signal sender: Data updated and workers notified.");
};
