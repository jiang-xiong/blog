var a = (function() {
  var _foo = 1
  return {
    get: function(){
      return _foo
    },
    set: function(v){
      _foo = v
    }
  }
})()

console.log('闭包 get', a.get())
a.set('gw')
console.log('闭包 get', a.get())
