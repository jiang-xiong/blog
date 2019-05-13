// 在函数内创建 promise
var hello1 = function () {
  // promise 接收一个异步函数
  // 这个异步函数接收 resolve 和 reject 两个参数
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // 成功选择调用 resolve
      // 失败选择调用 reject
      resolve('resolve hello1')
      // reject('hello1')
    }, 1000)
  })
}
