var ensureEqual = function (expected, actual, errorMessage) {
  if(expected != actual) {
    console.log(a, b, errorMessage)
  }
}

var add = function (a, b) {
  return a + b
}

ensureEqual(2, add(1, 2), 'add 错误')
