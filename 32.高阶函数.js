var process = function (array, processor) {
  var l = []
  for (var i = 0; i < array.length; i++) {
    var a = array[i]
    var element = processor(a)
    l.push(element)
  }
  return l
}
var square = function (x) {
  return x * x
}
var array = [1, 2, 3]
var result = process(array, square)
console.log(result)
