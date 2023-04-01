
const a1 = [33,33,44,55,66,77]
const a2 = [11,22]
const a3 = [123,123,123]
const b = a2.concat(a1,a3)
console.log(b)

let c = "hello";
let d = "hi"
let f = d.concat(c);
console.log(f)

let k = [33,44,55,66,77,88,88]
let g = k.splice(2,0,55)
console.log(g)
console.log(k)