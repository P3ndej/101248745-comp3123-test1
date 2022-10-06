let lowerCaseWords = (arr) => new Promise((resolve, reject)=>{
    if(!arr || arr.length===0 || !Array.isArray(arr)) reject("Invalid Array");
    resolve(arr.filter((item) => isNaN(item)).map((word)=>word.toLowerCase()));
})

lowerCaseWords(['PIZZA',10,true,25,false,'Wings'])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
