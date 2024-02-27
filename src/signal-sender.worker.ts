onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);

  setTimeout(() => {
    Atomics.store(sharedArray, 0, 123);
    Atomics.notify(sharedArray, 0, Infinity);
    console.log("Signal sender: Data updated and workers notified.");
  }, 1000);
};
