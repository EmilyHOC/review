function Parent4() {
    this.name = ['super4']
}
Parent4.prototype.reName = function () {
    this.name.push('super4')
}
function Child4(){
    Parent4.call(this)
}
Child4.prototype = Object.create(Parent4.prototype)// 该方法会使用指定的原型对象及其属性去创建一个新的对象
var child41 = new Child4()
var child42 = new Child4()
child41.reName()
console.log(child41.name,child42.name) //['super4','super41'] ['super4']
console.log(child41.reName === child42.reName)//true