var a = [4, 5, 6, 4 , 5]

var hashTeb = {}
for (var i = 0; i < a.length; i++) {
  if (a[i] in hashTeb) {

  } else {
    hashTeb[a[i]] = true
  }
}
console.log(Object.keys(hashTeb))

Array.from(new Set(a))
