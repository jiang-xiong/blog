// 坑
// 这条原型链上的构造函数都是该实例的构造函数
//
// 例如
var a = []
a instanceof Object
// a instanceof Array
// true
// 判断过程
console.log(a.__proto__ === Array.prototype)
console.log(Array.prototype.__proto__ === Object.prototype)

// 判断实例由谁构造使用
a.constructor === Array
// true
