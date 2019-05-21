var t =true ;
setTimeout(function () {
    console.log(123)
    t =false
},1000)
while (t){}
console.log('end')