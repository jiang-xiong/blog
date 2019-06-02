var Parent = function () {
  this.array = [1, 2]
  this.parent = 'Macy'
}
var Child = function (name) {
  Parent.call(this)
  this.name = name
}
// 隔离 child 和 parent 的原型对象
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
var c1 = new Child('c1')
var c2 = new Child('c2')
c1.array.push(3)
console.log('c1,', c1.array)
console.log('c2,', c2.array)
console.log(c1.constructor === Child)
console.log(c1.constructor === Parent)
