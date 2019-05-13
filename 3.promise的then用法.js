// 创建 promise
var hello1 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('resolve hello1')
    }, 100)
  })
}
// successMessage 为 resolve 内的值
// failMessage 为 reject 内的值
hello1().then(function (successMessage) {
  console.log(successMessage)
  var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('resolve p1')
      // reject('reject hello1')
    }, 100)
  })
  return p1
}, function (failMessage) {
  console.log(failMessage)
}).then(function (successMessage) {
  // 输出上一个 then 的 promise resolve 的值
  console.log(successMessage)
}, function (failMessage) {
  console.log(failMessage)
})
