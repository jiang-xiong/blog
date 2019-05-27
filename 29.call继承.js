var Parent = function () {
  this.parentName = 'Macy'
}
var Child = function (name) {
  // 父构造函数执行时的 this 改为 Child
  Parent.call(this)
  this.name = name
}
// 无法继承父构造函数原型对象上的方法
Parent.prototype.say = function () {
  console.log('it is parent')
}
var p =  new Parent()
var c1 = new Child('c1')
p.say()
// c1.say()
console.log('c1,', c1)
