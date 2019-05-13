var p5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('resolve p5')
  }, 500)
})
var p5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('reject p6')
  }, 100)
})

// 只返回执行更快的 promise
Promise.race([p5, p6]).then(function(value) {
  console.log('value', value)
}, function(reason) {
  // 状态为 rejected 则进入这里
  console.log('reason', reason)
})
