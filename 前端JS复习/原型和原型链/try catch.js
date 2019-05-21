function test(){
    try {
        let i = 9;
        let result = i /0;
        console.log('nomal exec')
        return 'Hello try'
    }catch (e){
        console.log('catch exec')
        throw new Error('set exception')
        return 'Hello catch'
    }finally {
        console.log('finally exec')
    }

}
let result =test()