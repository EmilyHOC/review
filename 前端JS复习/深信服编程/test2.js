function a(num){
    let result = [];
    result = num.split("")
    let length = result.length;
    let all = '';
    if(length<4){
        all = num.concat(" bps");
        console.log(all)
    }else if(length>=4&&length<6){
        result.splice(result.length-3-1,0,".")
        let count = result.indexOf(".");
        if(result[count+3]>5){
            result[count+2] = String(Number(result[count+2])+1)
            result.pop(result[count+3])
            all = result.join("").concat(" Kbps")
            console.log(all)
        }else {
            result.splice(count+3,result.length-4)
            all = result.join("").concat(" Kbps")
            console.log(all)
        }
    }else if(length>=6&&length<9){
        result.splice(result.length-6,0,".")
        let count = result.indexOf(".");
        if(result[count+3]>5){
            result[count+2] = String(Number(result[count+2])+1)
            result.splice(count+3,result.length-4)
            all = result.join("").concat(" Mbps")
            console.log(all)
        }else {
            result.splice(count+3,result.length-4)
            all = result.join("").concat(" Mbps")
            console.log(all)
        }
    }else if(length>=9&&length<11){
        result.splice(result.length-8,0,".")
        console.log(result)
        let count = result.indexOf(".");
        if(result[count+3]>=5){
            result[count+2] = String(Number(result[count+2])+1)
            result.splice(count+3,result.length-4)
            all = result.join("").concat(" Gbps")
            console.log(all)
        }else {
            result.splice(count+3,result.length-4)
            all = result.join("").concat(" Gbps")
            console.log(all)
        }

    }else if(length>=11&&length<13){
        result.splice(result.length-9,0,".")
    }
    console.log(result)
}

a('123533456')