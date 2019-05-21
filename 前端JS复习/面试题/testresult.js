function f1() {
    var temp =1;
    this.x =3;
    console.log(temp)
    console.log(this.x)
}
 var obj = new f1();
 console.log(obj.x)
console.log(f1())


//function f(){
//     let a =5;
//     console.log(a)
// }
// console.log(f())

function changeObjectProperty(o) {
    o.siteUrl="http://www.csser.com/";
    o = new Object();
    o.siteUrl = "http://www.popcg.com/"
}
var CSSer = new Object();
 changeObjectProperty(CSSer)
console.log(CSSer.siteUrl)

function f(j){
      j=5;
     console.log(j)
}
f(6)