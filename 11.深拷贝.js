var deepCopy = function (o) {
	var o1
	if (o instanceof Object === false) {
		return o
	} else if (o instanceof Array === true) {
		o1 = []
	} else if (o instanceof Object) {
		o1 = {}
	}
	for(var k in o) {
	 o1[k] = deepCopy(o[k])
 }
	return o1
}

var o = {
  a: 1,
  arr: [2, [3]],
}
var deepO = deepCopy(o)
deepO.a = 2
deepO.arr[1][0] = 4
console.log(o)
console.log(deepO)
