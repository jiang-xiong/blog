function Animal(){
    this.body = '肉体'
}
Animal.prototype.move = function(){
}
function Human(name){
    Animal.apply(this, arguments)
    this.name = name
}
// Human.prototype.__proto__ = Animal.prototype // 非法
var f = function(){}
f.prototype = Animal.prototype
Human.prototype = new f()
Human.prototype.useTools = function(){}
var frank = new Human()
console.log(frank.contrustor)

class Animal{
    constructor(){
        this.body = '肉体'
    },
    move(){}
}
class Human extends Animal{
    constructor(name){
        super()
        this.name = name
    },
    useTools(){}
}
var frank = new Human()
