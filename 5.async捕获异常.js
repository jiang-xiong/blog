// 创建拥有 promise 功能的函数
var rejectAfter2Seconds = function () {
  // Promise 接受一个异步函数
  // 这个异步函数接收 resolve 和 reject 两个函数作为参数
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      // resolve('成功')
      reject('失败')
    }, 2000)
  })
}

var asyncCall = async function() {
  try {
    var result = await rejectAfter2Seconds()
    console.log('result', result)
  } catch (e) {
    console.log('error occurs', e)
  }
}

asyncCall()
