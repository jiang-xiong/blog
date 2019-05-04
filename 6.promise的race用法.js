var p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "five")
})
var p6 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "six")
})

// 只返回执行更快的 promise 实例
Promise.race([p5, p6]).then(function(value) {
  console.log('value', value)
}, function(reason) {
  console.log('reason', reason)
})
