// 函数防抖
// 函数在间隔时间内被触发，则重新计时
var debounce = function (callBack, interval) {
  var timer = null
  return function () {
    // 每次调用 debounce 就把计时器清除
    clearTimeout(timer)
    // 再让计时器重新计时
    // 例如本该等 2s 才能调用 fn
    // 若过了 1s 就调用，就要重新等 2s
    timer = setTimeout(function () {
      callBack()
    }, interval)
  }
}

document.addEventListener('scroll', debounce(function () {
  console.log('scroll')
}, 2000))
