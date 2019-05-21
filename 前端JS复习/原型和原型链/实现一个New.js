function _new(fun){
    return function () {
        let obj ={
            __proto__:fun.prototype
        }
        fun.apply(obj,arguments)
        return obj
    }

}

function person(name,age) {
    this.name = name;
    this.age = age
}
let obj = _new(person)('LL',100)
console.log(obj)