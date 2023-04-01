let a = [
    {"id":1 ,"ciry": "a"}
    {"id":3 ,"ciry": "b"}
    {"id":2 ,"ciry": "c"}
]

let b = a.reduce((acum, item ) => {
acum.push(item.id)
  return acum;
},[])

console.log(b)

let res = [];
console.log(Array.isArray(B));