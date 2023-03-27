// const test = [1,2,4,634,65,2]

// if (str.includes("fg")) {
//     console.log("yes")
// }
// else {
//     console.log("no")
// }

const users = [
    {"name" :"ivanov", "age" : 44},
    {"name" :"semen", "age" : 36},
    {"name" :"andrey", "age" : 12},
    {"name" :"slava", "age" : 24},
    {"name" :"alex", "age" : 6},
]

let newUSers = users.filter( item =>  item.name.includes("n"));
console.log(newUSers);
// const str = "asdasdas";