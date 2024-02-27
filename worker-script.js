// Workerスレッド (worker-script.js)

onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);

  // アトミック操作を実行
  Atomics.add(sharedArray, 0, 1);

  // 処理完了のログを出力
  console.log("Worker 1 added 1 to the shared value.");
};
