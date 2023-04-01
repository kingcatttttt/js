// const test = [21,2,352,33]

// if (str.includes("asd")) {
//     console.log("yes")
// } else {
//     console.log("no")
// }
const users = [
    {"name":"ivan", "age":14},
    {"name":"bob", "age":32},
    {"name":"alex", "age":42},
    {"name":"samen", "age":12},
]

let newUsers = users.filter(item => {
    return item.name.includes("i")
})

const str = "asdasdasd"
console.log(newUsers)