var log = console.log.bind(console)

var ensureEqual = function (expected, actual, errorMessage) {
  var type1 = expected.constructor
  var type2 = actual.constructor
  // 用于测试 split
  if (type1 === Array && type2 === Array ) {
    if(String(expected) !== String(actual)) {
      console.log(expected, actual, errorMessage)
    } else {
      return
    }
  }
  if(expected !== actual) {
    console.log(expected, actual, errorMessage)
  }
}

var join = function(delimiter, array) {
    var s = array[0]
    for (var i = 1; i < array.length; i++) {
        var a = array[i]
        s += (delimiter + a)
    }
    return s
}

var split = function(s, delimiter) {
    var l = []
    var space = delimiter.length
    var start = 0
    for(var i = 0; i < s.length; i++) {
        if(s.slice(i, i+space) === delimiter) {
            l.push(s.slice(start, i))
            start = i + space
        }
    }
    l.push(s.slice(start))
    return l
}

var replaceAll = function(s, old, newString) {
    var s1 = split(s, old)
    var s2 = join(newString, s1)
    return s2
}

log(ensureEqual('hello, tao', replaceAll('hello, world', 'world', 'tao'), 'replaceAll error'))
