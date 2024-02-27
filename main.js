// メインスレッド (main.js)

// SharedArrayBufferの作成 (1つの要素を持つInt32Array)
const sharedArray = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);

// Workerを作成
const worker1 = new Worker("worker-script.js");
const worker2 = new Worker("worker-script-2.js");

// SharedArrayBufferをWorkerに渡す
worker1.postMessage(sharedArray);
worker2.postMessage(sharedArray);

// 結果を確認するためのログを出力
setTimeout(() => {
  const resultArray = new Int32Array(sharedArray);
  console.log("Final value:", resultArray[0]);
}, 1000);
