// callback: là 1 function đc truyền function vào 

// ex: 
function B() {
    console.log("123");
}

function A(c) {
    c()
} 
A(B)


// callback kill: 

setTimeout(() => {
    console.log("xong");
}, 0)

// Chuyyển đổi thành promise
var test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("xong")
    }, 0)
})
test.then(data => {
    console.log(data + "----");
})
.catch(err => {
    console.log("====" + err);
})


// ex thực tế 
var fs = require('fs')
fs.readFile('./data.txt', (err, data) =>{
    if(err){
        reje
    }
})
console.log(3);
//  chuyển về promise
 result = new Promise((resolve, reject) => {
    fs.readFile('./data1.txt', (err, data) => {
        if(err) {
            reject(err)
        }else{
            resolve(data.toString())
        }
    })
 })
 result.then((data) => {
    console.log(data.toString());
 }).catch((err) => {
    console.log(err)
 })


//  
test = new Promise((resolve) => {
    setTimeout(() => {
        resolve("test")
    }, 100);
})

test.then((data) => {
    console.log(data);
})