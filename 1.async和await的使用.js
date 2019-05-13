// 创建 promise
var hello1 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('resolve hello1')
      // reject('reject hello1')
    }, 100)
  })
}
// promise 在异步函数中使用
var main = async function () {
  console.log('before result1')
  // await 用于等待异步函数执行完成
  var result1 = await hello1()
  // 如果 Promise 状态为 rejected 则报错，无法向下执行
  console.log(result1)
  console.log('after result1')
}
main()
