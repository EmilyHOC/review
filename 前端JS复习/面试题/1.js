
//把字符串变成驼峰
let foo ="get-element-by-id";
function changeToUpper(foo){
//把字符串切成数组
    let result= []
    result=foo.split("-")
    for(let i=1;i<result.length;i++){
       result[i] = result[i].charAt(0).toUpperCase()+ result[i].substr(1,result[i].length-1)
    }
    return result.join("")

}
console.log(changeToUpper(foo))
