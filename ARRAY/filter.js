const arr=[-4,-6,-9,4,6]
const a=arr.filter(num=>num>0)
// console.log(a)

//even number
let arr1=[1,5,6,8,10]
const c=arr1.filter(n=>n%2===0)
// console.log(c)

//array of string
let arr2=[1,"Alphaintern", 44, "hii", 48, "hello"]
let d=arr2.filter(item=>typeof item==="string")
// console.log(d)

//filter the item whose starting letter is a
const arr3=["apple", "hii", "ajj", "hello", "aap","alpha"]
let e=arr3.filter(word=>word.startsWith("a"))
console.log(e)