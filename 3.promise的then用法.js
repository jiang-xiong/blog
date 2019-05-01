// 创建拥有 promise 功能的函数
var resolveAfter2Seconds = function () {
  // Promise 接受一个异步函数作为参数
  // 这个异步函数接收 resolve 和 reject 两个函数作为参数
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      reject('失败')
    }, 2000)
  })
}


// successMessage 为 resolve 内的值
// failMessage 为 reject 内的值
resolveAfter2Seconds().then(function(successMessage) {
  console.log(successMessage)
}, function(failMessage) {
  console.log(failMessage)
})
