//不能再node环境执行
//.作用域的题目
var  a =5;
function test() {
    a = 0;
    console.log(a);
    console.log(this.a);
    console.log(a)
}
test(); // 0 0 0
new test()
console.log(a)