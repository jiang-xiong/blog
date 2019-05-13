var promise1 = Promise.resolve('promise1')
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('resolve promise2')
    // reject('reject promise2')
  }, 100)
})
// var promise3 = false

// 2个 promise 的状态都为 resolved 才满足 all
// values 为 2 个 promise 的返回值构成的数组
Promise.all([promise1, promise2]).then(function(values) {
  console.log(values)
})
