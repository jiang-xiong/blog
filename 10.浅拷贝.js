var shallowCopy = function(o) {
  var hash = {}
  for (var prop in o) {
    if (o.hasOwnProperty(prop)) {
      hash[prop] = o[prop]
    }
  }
  return hash
}

var o = {
  a: 1,
  arr: [2],
}
var shallowO = shallowCopy(o)
shallowO.a = 2
shallowO.arr[0] = 3
// 浅拷贝只能复制第一层简单数据类型
console.log(o)
console.log(shallowO)
