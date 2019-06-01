var Parent = function () {
  this.array = [1, 2]
  this.parent = 'Macy'
}
var Child = function (name) {
  Parent.call(this)
  this.name = name
}
// 缺点是无法分清实例的构造函数
Child.prototype = Parent.prototype
var c1 = new Child('c1')
var c2 = new Child('c2')
c1.array.push(3)
console.log('c1,', c1.array)
console.log('c2,', c2.array)
console.log(c1.constructor === Child)
