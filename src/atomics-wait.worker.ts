onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);
  console.log("Worker: Waiting for the signal...");

  const index = 0;
  console.log(Atomics.load(sharedArray, index));
  Atomics.wait(sharedArray, 0, 0);

  console.log(`second: ${Atomics.load(sharedArray, index)}`);
  Atomics.add(sharedArray, index, 1000);
  console.log(`third: ${Atomics.load(sharedArray, index)}`);
  postMessage(`Final Data: ${Atomics.load(sharedArray, index)}`);
};
