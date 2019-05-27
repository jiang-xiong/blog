var new2 = function (func) {
  // o 继承构造函数的原型对象
    var o = Object.create(func.prototype)
    // 执行构造函数，绑定 this 为 o
    var k = func.call(o)
    // 构造函数内部返回对象则返回构造函数的对象
    if (typeof k === 'object') {
        return k
        // 否则返回我们创建的对象
    } else {
        return o
    }
}
