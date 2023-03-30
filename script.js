const a = [9,7,54,21,14]

console.log(a.indexOf(9))
const b = ["hi","hello"];

if(b.indexOf("hello") != -1) {
    console.log("yes")
} else {
    console.log("no")
}
function indexOfEmul(ar,item, from = 0) {
    for (let i = from; i < ar.lenght; i++) {
        if (ar[i] === item) {
            return i;
        }
    }
}
let result = -1;

return result;
console.log(indexOfEmul(a,8));