function f(message) {
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve(message);
        }, 500);
    });
}
f('Hello').then(result => {
    console.log(result);
    null.abc;
    return f('Hello world');
}, (err) => {
    console.log(err);
}).then(result => {
    console.log("1111");
    console.log(result);
}).catch(err=>{
    console.log('catch');
    console.log(err);
})