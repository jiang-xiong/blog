var shallowCopy = function(o) {
  var hash = {}
  for (var prop in o) {
    if (o.hasOwnProperty(prop)) {
      hash[prop] = o[prop]
    }
  }
  return hash
}
// 什么是浅拷贝
// 浅拷贝用于拷贝对象的第一层属性
// 无法拷贝对象中子对象的属性
// 例如
var a = {
  name: 'a',
  obj: {
    age: 18,
  },
}
var b = shallowCopy(a)
b.name = 'b'
b.obj.age = 20
// b 和 a 的 age 指向的是同一块内存
// 他们会一起改变
console.log(a)
console.log(b)

// 什么是赋值
// 赋值得到的新变量和原变量指向同一块内存
// 例如
var a = {
  name: 'a',
}
var b = a
b.name = 'b'
// b 与 a 的值会随一方的改变而改变
console.log(a)
console.log(b)
