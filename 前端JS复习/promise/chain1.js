function taskA() {
    console.log("Task A ")
    throw new Error('throw Error @TaskA')
}
function taskB() {
    console.log("Task B")
}
function onRejected(error){
    console.log('catch error:A or B',error)
}
function finalTak(){
    console.log("final Task")
}
var promise = Promise.resolve();
promise.then(taskA)
.then(taskB)
.catch(onRejected)
.then(finalTak)