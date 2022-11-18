// Promise.timeout = (miliSecond) => {
//     return new Promise((resolve) => {
//         console.log('da vo')
//         setTimeout(() => {
//             resolve()
//         }, miliSecond)
//     })
// }

// const promiseObj = Promise.timeout(1000)
// promiseObj.then(() => {
//     console.log('data')
// })


function Observable(def) {
    this.subscribe = def
}
Observable.timeout = function(milisecond) {
    function timeoutWaitToRun() {
        setTimeout(() => {
    
        }, milisecond)
    }
    return new Observable(timeoutWaitToRun)
}

Observable.prototype.subscribe = () =>{

}


const observable = Observable.timeout(1000)
console.log(observable)