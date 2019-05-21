function Parent3(){
    this.name = ['super3']
}
Parent3.prototype.reName = function () {
    this.name.push('super31')
}
function Child3() {
    Parent3.call(this)//生成子类的实例属性（但是不包括父对象的方法）
}
Child3.prototype = new  Parent3()//继承父类的属性和方法
var child31 = new Child3()
var child32 = new Child3()
child31.reName()
console.log(child31.name, child32.name) // [ 'super3', 'super31' ] [ 'super3' ], 子类实例不会相互影响
console.log(child31.reName === child32.reName) //true, 共享了父类的方法