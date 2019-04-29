// 创建拥有 promise 功能的函数
var resolveAfter2Seconds = function () {
  // Promise 接受一个异步函数作为参数
  // 这个异步函数接收 resolve 和 reject 两个函数作为参数
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve('成功')
    }, 2000)
  })
}
