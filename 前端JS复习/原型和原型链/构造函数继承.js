function Parent1(){
    this.name = ['super1']
    this.reName = function () {
        this.name.push('super111')
    }
}
function Child2() {
    Parent1.call(this)
}
var child21 = new Child2()
var child22 = new Child2()

child21.reName()
console.log(child21.name,child22.name)
console.log(child21.reName === child22.reName)