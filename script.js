const a = [
    {name: "ivan", age: 32},
    {name: "semen", age: 26},
    {name: "andrey", age: 24},
    {name: "sneip", age: 23},
    {name: "q", age: 12},
]
const c = [22,33,44,55,66,77];
const d = ["hell"]

let b = c.findIndex(item => {
    if (item > 42) {
        return true;
    } else {
        return false;
    }
})
let f = d.lastIndexOf(77);
console.log(f)