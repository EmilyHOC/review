// var a =6;
// setTimeout(function () {
//    console.log(a)
//     var a = 66;
// },1000);
// a=666;
// console.log(a)


function foo(){
    // foo.a = function () {
    //     console.log(1)
    // }
    this.a=function () {
        console.log(2)
    }
    a = function () {
        console.log(3)
    }
    var a = function () {
        console.log(4)
    }
}
foo.prototype.a = function () {
    console.log(5)
}
foo.a = function () {
    console.log(6)
}
foo.a();
var obj = new foo();
obj.a();
foo.a();