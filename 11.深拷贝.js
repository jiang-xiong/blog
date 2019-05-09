var deepCopy = function (o) {
	var o1
	if (o instanceof Object === false) {
		return o
	} else if (o instanceof Array === true) {
		o1 = []
	} else if (o instanceof Object) {
		o1 = {}
	} else if(o instanceof Function){
		object2 = eval(object.toString())
  }
	for(var k in o) {
	 o1[k] = deepCopy(o[k])
 }
	return o1
}
// 什么是深拷贝
// 深拷贝用于拷贝对象的全部属性
// 例如
var a = {
  name: 'a',
  obj: {
    age: 18,
		fn: function greeting() {
			console.log('hi a')
		},
  },

}
var b = deepCopy(a)
b.name = 'b'
b.obj.age = 20
b.obj.fn = function greeting() {
	console.log('你好 b')
}
// a 与 b 指向不同的内存
console.log(a)
console.log(b)
a.obj.fn()
b.obj.fn()
