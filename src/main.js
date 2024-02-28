console.log("Main thread starting.");

const path = "/src";

const sharedBuffer = new SharedArrayBuffer(1024);
const sharedArray = new Int32Array(sharedBuffer);

const workerWait = new Worker(
  new URL("./atomics-wait.worker.ts", import.meta.url),
);
const workerWaitAsync = new Worker(
  new URL("./atomics-wait-async.worker.ts", import.meta.url),
);
const workerSignalSender = new Worker(
  new URL("./signal-sender.worker.ts", import.meta.url),
);

workerWait.postMessage(sharedBuffer);
workerWaitAsync.postMessage(sharedBuffer);
workerSignalSender.postMessage(sharedBuffer);

workerWaitAsync.onmessage = (e) => {
  console.log(`Main thread received: ${e.data}`);
};

setTimeout(() => {
  console.log("Here are the final values: ", Atomics.load(sharedArray, 0));
}, 2000);
