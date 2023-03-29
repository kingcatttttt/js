const a = [4,5,6,7,8];
const c = [
    {name: "ivan", age: 17},
    {name: "sergey", age: 41},
    {name: "semen", age: 34},
    {name: "slum", age: 23},
]
let e = [];

let b = e.every(item => {
    if (item.age < 16) {
        return true;
    }
})

console.log(b);