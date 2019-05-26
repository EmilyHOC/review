var promise = new Promise(function (resolve) {
    console.log("inner Promise");
    resolve(42)
});
promise.then(function (value) {
    console.log(value)
});
console.log("outer promise");