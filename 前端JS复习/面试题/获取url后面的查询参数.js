function getQueryString(name){
    var calue ='';
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    var isQuery = decodeURI(window.location.search).substring(1).match(reg);
    console.log(isQuery);
    if(isQuery!=null){
        value = isQuery[2];
    }
    return value
}
var name="?wd=%E8%AF%B7%E5%B0%86%E4%B8%80%E4%B8%AAurl%E7%9A%84search%E9%83%A8%E5%88%86&rsv_spt=1&rsv_iqid=0xbda0050c0003318f&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=38&rsv_sug1=27&rsv_sug7=101&rsv_t=87acxWsn1kn6WpivK2A9rqtlo0MH0QNNSphLLykbm6FfrVRg1S983LP8h1a0IeDTJFIM"
console.log(getQueryString(name))