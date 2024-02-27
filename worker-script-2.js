// 別のWorkerスレッド (worker-script-2.js)

onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);
  console.log("worker-script-2.jsが実行されています");

  // アトミック操作を実行
  Atomics.add(sharedArray, 0, 1);

  console.log(
    "worker-script-2.jsが実行されています。これはアトミック操作されるよりも早く終わりますか？？",
  );

  // 処理完了のログを出力
  console.log("Worker 2 added 1 to the shared value.");
};
