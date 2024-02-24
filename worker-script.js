onmessage = function (e) {
  const sharedBuffer = e.data;
  const sharedArray = new Int32Array(sharedBuffer);

  // 共有バッファの先頭の値を1増やす
  Atomics.add(sharedArray, 0, 1); // インデックス0の値を安全に1増やす

  // メインスクリプトに完了のメッセージを送る
  postMessage("バッファ更新完了");
};
