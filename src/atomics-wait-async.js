onmessage = async function (e) {
  const sharedArray = new Int32Array(e.data);
  console.log("Worker: Waiting asynchronously for the signal...");

  try {
    const index = 0;
    const expectedValue = 0;
    const waitResult = Atomics.waitAsync(sharedArray, index, expectedValue);
    const res = await waitResult.value;
    console.log(`Worker: waitAsync resolved with value: ${res}`);
    Atomics.add(sharedArray, index, 500);
    const updatedValue = Atomics.load(sharedArray, index);
    postMessage(`Updated value is ${updatedValue}`);
  } catch (err) {
    console.error(`Worker: An error occurred with waitAsync: ${err.message}`);
  }
};
