/*判断一个字符串中出现次数最多的字符，痛就这个次数*/

var str = 'asdfsasasasasa';
var json ={};
for(let i =0;i<str.length;i++){
    var key =str[i]
    if(json[key]){
        json[key]++;
    }else {
        json[key] =1;
    }
}
console.log(json)
let iMax =0;
let s =''
for(let i in json){
    if(json[key]>iMax){
        iMax = json[key];
        s = key
    }
}
console.log(`出现次数最多的是${s},出现次数是${iMax}`)