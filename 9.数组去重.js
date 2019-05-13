var a = [4, 5, 6, 4 , 5]
var hashTeb = {}
for (var i = 0; i < a.length; i++) {
  if (a[i] in hashTeb) {

  } else {
    hashTeb[a[i]] = true
  }
}
var keys = Object.keys(hashTeb)
for (var i = 0; i < keys.length; i++) {
  keys[i] = Number(keys[i])
}
console.log(keys)

var a = [4, 5, 6, 4 , 5]
var b = Array.from(new Set(a))
console.log(b)
