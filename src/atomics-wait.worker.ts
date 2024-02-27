onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);
  console.log("Worker: Waiting for the signal...");

  const index = 0;
  const expectedValue = 0;
  Atomics.wait(sharedArray, index, expectedValue);

  Atomics.add(sharedArray, index, 377);
  const updatedValue = Atomics.load(sharedArray, index);
  console.log(
    `Worker: Received the signal with updated value: ${updatedValue}`,
  );
  postMessage(`Updated value is ${updatedValue}`);
};
