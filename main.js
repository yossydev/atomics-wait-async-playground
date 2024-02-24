// SharedArrayBufferを作成
const sharedBuffer = new SharedArrayBuffer(1024); // 1KBの共有メモリ
const sharedArray = new Int32Array(sharedBuffer); // Int32Arrayを介してアクセス

// ワーカースクリプトを起動
const worker = new Worker("worker-script.js");

// SharedArrayBufferをワーカーに送信
worker.postMessage(sharedBuffer);

// ワーカーからのメッセージを受け取る
worker.onmessage = function (e) {
  console.log("メインスクリプト受信:", e.data);
  // バッファの内容を確認（例えば、先頭の要素をログに出力）
  console.log("SharedArrayの先頭の値:", sharedArray[0]);
};
