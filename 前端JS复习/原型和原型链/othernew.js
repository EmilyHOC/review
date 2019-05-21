function new2(fun){
    return function () {
        //创建一个对象,obj.__proto__ =fun.prototype
        let obj = Object.create(fun.prototype)
        //this指向
        fun.apply(obj,arguments)
        return obj
    }
}

function person(name,age) {
    this.name = name;
    this.age = age
}
var obj = new2(person)('YY',23)
console.log(obj)