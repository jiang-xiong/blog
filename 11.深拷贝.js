var deepCopy = function (o) {
	var o1
	if (o instanceof Object === false) {
		return o
	} else if (o.constructor === Object) {
		o1 = {}
	} else if (o.constructor === Array) {
		o1 = []
	} else if(o.constructor === Function){
		// o1 = o.toString()
		o1 = o
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
		array: [1, 2],
  },
}

var b = deepCopy(a)
b.name = 'b'
b.obj.age = 20
b.obj.array[1] = 3
b.obj.fn = function greeting() {
	console.log('你好 b')
}
// a 与 b 指向不同的内存
console.log('a', a)
console.log('b', b)
a.obj.fn()
b.obj.fn()
