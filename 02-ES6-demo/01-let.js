let a
let b,c,d
let e 
let arr=[1,2,3,4,5]
//变量也是有作用域

{
    let f = '5'
}
//  f is not defined
// console.log(f)
arr.forEach((i,index)=>{
    console.log(i)
})

console.log(arr)