var a =10;
var time = setInterval(function(){
    var a =20;
    console.log(this.a)
    clearInterval(time)
},100)