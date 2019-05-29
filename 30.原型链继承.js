var Parent = function () {
  this.parentName = 'Macy'
  this.array = [1, 2]
}
Parent.prototype.say = function () {
  console.log('it is parent')
}
var Child = function (name) {
  this.name = name
}
// 缺点是 Chlid 实例共用数据
Child.prototype = new Parent()
var p =  new Parent()
var c1 = new Child('c1')
p.say()
c1.say()
var c2 = new Child('c2')
c1.array.push(3)
console.log('c1,', c1.array)
console.log('c2,', c2.array)
