// Main thread code
console.log("Main thread starting.");

const path = "/src";

const sharedBuffer = new SharedArrayBuffer(1024);
const sharedArray = new Int32Array(sharedBuffer);

// 待機中のワーカー
const workerWait = new Worker(`${path}/atomics-wait.js`);
const workerWaitAsync = new Worker(`${path}/atomics-wait-async.js`);

// シグナルを送るワーカー
const workerSignalSender = new Worker(`${path}/signal-sender.js`);

// ワーカーに SharedArrayBuffer を投稿
workerWait.postMessage(sharedArray.buffer);
workerWaitAsync.postMessage(sharedArray.buffer);
workerSignalSender.postMessage(sharedArray.buffer);

workerWaitAsync.onmessage = function (e) {
  console.log(`Main thread received: ${e.data}`);
};

setTimeout(() => {
  console.log("Here are the final values: ", Atomics.load(sharedArray, 0));
}, 2000);
