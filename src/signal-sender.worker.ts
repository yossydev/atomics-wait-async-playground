onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);

  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += i;
  }
  console.log("first");
  Atomics.add(sharedArray, 0, sum);
  Atomics.notify(sharedArray, 0, 1);
  console.log("notified");
};
