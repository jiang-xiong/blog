// 创建拥有 promise 功能的函数
var resolveAfter2Seconds = function () {
  // Promise 接受一个异步函数
  // 这个异步函数接收 resolve 和 reject 两个函数作为参数
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve('成功')
    }, 2000)
  })
}

var asyncCall = async function() {
  console.log('before resolveAfter2Seconds')
  var result = await resolveAfter2Seconds()
  // result 为 resolve 内的值
  console.log(result)
  // result 得出后才往下执行
  console.log('after result resolveAfter2Seconds')
}

asyncCall()
