const { TIMEOUT } = require("dns")

let resolvedPromise = () => new Promise((resolve,reject)=>{
    setTimeout(resolve({message: "delayed success"}),500)
})

let rejectPromise = () => new Promise((resolve,reject)=>{
    setTimeout(reject({message: "delayed exception"}),500)
})
 
resolvedPromise().then((msg=>console.log(msg)))
rejectPromise().catch((msg=>console.log(msg)))