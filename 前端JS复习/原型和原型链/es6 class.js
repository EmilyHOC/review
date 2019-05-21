class Parent5 {
    constructor() {
        this.name = ['super5']
    }
    reName() {
        this.name.push('new 5')
    }
}

class Child5 extends Parent5 {
    constructor() {
        super()
    }
}

var child51 = new Child5()
var child52 = new Child5()
child51.reName()
console.log(child51.name, child52.name) // [ 'super5', 'new 5' ], 子类实例不会相互影响
console.log(child51.reName === child52.reName) //true, 共享了父类的方法