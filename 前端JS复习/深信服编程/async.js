function *gen(n) {
    let value = yield n*2 +1;
    console.log(value)
}
let f  = gen(20)
f.next(1)
f.next(2)