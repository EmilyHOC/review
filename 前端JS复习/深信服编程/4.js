let C = function () {

}
C.prototype = Object.create({
    option: {
        name: 'c'
    }
})
let c1 = new C();
let c2 = new C();
c1.option.name = 'new_c';
console.log(c2.option.name);
c1.option = null;
console.log(c2.option.name)