const a = [ 
    {name: "semen", age: 23},
    {name: "van", age: 11},
    {name: "billy", age: 435},
    {name: "danie", age: 123},
]

let b = a.find(item => {
   if( item.age <= 18) {
    return true;
   }
})

console.log(b)

// const c = [22,33,44,55];

// let e = d.find(item => {
//    if(item === "e") {
//     return true
//    }
//     }
//  )
 
//  console.log(e)
const d = 'heelo'

let f = d.lastIndexOf("l")
console.log(f)