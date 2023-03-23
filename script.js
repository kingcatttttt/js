const obj = [
    {
        "name":"a",
        "level":"hacker"
    },
    {
        "name":"a2",
        "level":"doomer"
    },
    {
        "name":"a4",
        "level":"hacker"
    }
]

let res = obj.some( item => {
    return item.level === "doomer";

})
console.log(res)

let res2 = obj.every( item => {
    return item.level === "doomer";

})
console.log(res2)

let flag = false;
obj.forEach(item => {
    if (item.level === "doomer") {
        flag = true;
    }
})
console.log(flag)

let res3 = obj.find( item => {
    return item.level === "doomer";

})
let res4 = obj.find( item => {
    return item.level === "doomer2";

})

console.log(res3)
console.log(res4)