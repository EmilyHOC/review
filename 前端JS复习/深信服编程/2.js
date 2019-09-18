let obj = {
    sangfor: 100,
    log() {
        sangfor = 200;
        console.log(this.sangfor)
    }
};
obj.log()
let {log} = obj;
log()