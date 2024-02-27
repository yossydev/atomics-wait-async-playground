// メインスレッドから受け取る SharedArrayBuffer
let sharedArray;

// ワーカーのセットアップ
onmessage = function (e) {
  sharedArray = new Int32Array(e.data);

  // データの変更と他のワーカーへの通知を行う
  setTimeout(() => {
    Atomics.store(sharedArray, 0, 123); // インデックス 0 の値を変更
    Atomics.notify(sharedArray, 0, Infinity); // すべての待機中のワーカーを起こす
    console.log("Signal sender: Data updated and workers notified.");
  }, 1000); // 1秒後に通知を送る
};
