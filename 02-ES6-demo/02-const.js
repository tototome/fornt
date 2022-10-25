const a = 'aaa'

const b=['tom','jack','cliy']
// 对常量进行修改不能改变它的地址 所以在数组后面添加一个值不会报错
b.push('jerry')

console.log(b)