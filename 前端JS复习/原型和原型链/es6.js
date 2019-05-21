class Parent {
    constructor(a){
        this.filed1 = a;
    }
    // filed2 = 2;
    // func1 = function(){}
}

class Child extends Parent {
    constructor(a,b) {
        super(a);
        this.filed3 = b;
    }

    // filed4 = 1;
    // func2 = function(){}
}
let a= new Child(2,3)
console.log(a instanceof Parent)
console.log(a)
