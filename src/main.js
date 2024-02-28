// Main thread code
console.log("Main thread starting.");

const path = "/src";

// SharedArrayBufferを作成
const sharedBuffer = new SharedArrayBuffer(1024);
const sharedArray = new Int32Array(sharedBuffer);

// Workerのインスタンスを作成
const workerWait = new Worker(
  new URL("./atomics-wait.worker.ts", import.meta.url),
);
const workerWaitAsync = new Worker(
  new URL("./atomics-wait-async.worker.ts", import.meta.url),
);
const workerSignalSender = new Worker(
  new URL("./signal-sender.worker.ts", import.meta.url),
);

// SharedArrayBufferをWorkerに送信
workerWait.postMessage(sharedBuffer);
// workerWaitAsync.postMessage(sharedBuffer);
workerSignalSender.postMessage(sharedBuffer);

// workerWaitAsyncからのメッセージを受け取るイベントハンドラ
workerWaitAsync.onmessage = (e) => {
  console.log(`Main thread received: ${e.data}`);
};

// 一定時間後にsharedArrayから値を読み出す
setTimeout(() => {
  console.log("Here are the final values: ", Atomics.load(sharedArray, 0));
}, 2000);
