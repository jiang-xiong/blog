var promise1 = Promise.resolve(3)
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo')
})

// 三个 promise 的状态都为 resolved 才满足 all
// values 为三个 promise 的返回值构成的数组
Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values)
})
