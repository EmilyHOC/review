function  load() {
    return Promise.resolve('sangfor')
        .then(result => {
            throw result
        })
        .catch(result => 'error')
        .then(console.log(3))
}
async function fn() {
    console.log(await load())
}
fn()