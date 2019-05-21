var User ={
    count :1,
    getCount :function () {
        return this.count
    }
}
console.log(User.getCount());
var func =User.getCount;
console.log(func())

var obj = {
    proto:{
        a:1,
        b:2
    }
};
function F() {

}
F.prototype = obj.proto;
var f = new F();
obj.proto.c = 3;
obj.proto ={
    a:-1,
    b:-2
}
console.log(f.a)
console.log(f.c);
delete F.prototype['a'];
console.log(f.a)
console.log(obj.proto.a);
console.log('=================')
var foo=1;
function bar(){
    foo=10;
    return ;
    function foo(){}
    console.log(foo)
}
bar()
console.log(foo)
console.log('========')
console.log(a);
var a = 3;
function a(){};
console.log(a)
console.log('===========')
console.log(b);
var b;
function b(){};
console.log(b)
console.log('===============')
function foo1(a){
    arguments[0] = 2;
    console.log(a)
}
foo1(1)
console.log('========================')
bar();
var foo = function bar(name){
    console.log("hello" +name);
    console.log(bar)
};
console.log(typeof bar)
foo("world");
console.log(bar);
console.log(foo.toString());
bar();