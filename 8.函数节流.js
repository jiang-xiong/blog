// 在时间间隔内无法被触发
// 类似技能 cd
var throttle = function (callBack, interval) {
  // 一开始可执行
  var cd = true
  return function () {
    if (cd === false) {
      return
    } else {
      callBack()
      // 函数调用后修改 cd, 回调不能执行
      cd = false
      setTimeout(function () {
        // 时间间隔后修改 cd，回调可以执行
        cd = true
      }, interval)
    }
  }
}
var throttle = function (callBack, interval) {
  var cd = true
  return function () {
    if (cd === false) {
      return
    } else if (cd === true) {
      callBack()
      cd = false
      setTimeout(function () {
        cd = true
      }, interval)
    }
  }
}
document.addEventListener('scroll', throttle(function () {
  console.log('scroll')
}, 2000))
