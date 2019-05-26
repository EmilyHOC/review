//对同一个promise对象同时调用then方法
var aPromise = new Promise(function(resolve){
    resolve(100);
});
aPromise.then(function (value) {
    return value*2;
});
aPromise.then(function (value) {
    return value*2
});
aPromise.then(function (value) {
    console.log(value)
});

//vs
//对then进行promise chain方式进行调用
var bPromise = new Promise(function (resolve){
    resolve(100);
});
bPromise.then(function(value){
    return value*2
}).then(function(value){
    return value*2
}).then(function(value){
    console.log(value)
})