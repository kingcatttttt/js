const arr = [1,2,4,56,7,3,6,3,6,2,6,765,8,9]
console.log(arr)

//1

// let a1 =[... new Set(arr)];
// console.log(a1)

//1.1

// let a1 = Array.from(new Set(arr));
// console.log(a1)

//1.2

// let a2 = arr.filter( (item, index) => {
//     return arr.indexOf(item) === index;

// })
// console.log(a2);

//1.3
// let a2 = arr.filter( (item, index) => {
//     return arr.indexOf(item) !== index;

// })
// console.log(a2);

//1.4 
let a3 =arr.reduce((result, item) => {
    return result.includes(item) ? result : [...result, item];

}, [])
console.log(a3)