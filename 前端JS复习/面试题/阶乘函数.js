Number.prototype.N =function () {
    var start = 1;
    for(let i=1;i<=this;i++){
        start *=i ;
    }
    return start
}
var num =5;
console.log(num.N())