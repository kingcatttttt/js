let a = [1,2,3,[6],[8]];
// let b = a;
// let b = [...a]

// for (let i = 0; i <a.length; i++ ) {
//     b[i] = a[i];
// }
// let b = JSON.parse(JSON.stringify(a));
// let b = a.concat([]);
let b = Array.from(a);



a[3].push(999);
a.push("test")

console.log("array a")
console.log(a)

console.log("array b")
console.log(b)
