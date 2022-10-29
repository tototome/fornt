//导入模块
const fs = require('fs')
// readfile 默认是异步操作 可以从结果看出来 log是先打印出来的
fs.readFile('./a.txt', (err,data)=>{

  if (err) throw err

  console.log(data.toString())
})
console.log('读取文件')