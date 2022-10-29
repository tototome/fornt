
const fs = require('fs')

const p =new Promise((res,rej)=>{
    fs.readFile('../01-hello-demo/a.txt',(err,data)=>{
        if(err) rej(err)
        res(data)
    })
})

p.then(response=>{
    console.log("成功")
    console.log(response.toString())
}).catch(error=>{
    console.log("失败")
    console.log(error)
})