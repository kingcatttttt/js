let a = [1,2,3,4];
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
}
console.log(sum);

let b = a.reduce( (prev, item, index) => {
        return prev+item;
},0);

console.log(b);

a = [3,4,5,1,6,6];
let max = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
    }
}

console.log(max)

let d = a.reduce((prev,item) => {
    if(prev < item) {
        return item;
    } else {
        return prev;
    }
    if (item > prev[1]) {
        return [index, item];
    } else {
        return prev;
    }
})

// console.log(c);

// let d = a.reduce((prev,item, index) => {
//     if(prev < item) {
//         return item;
//     } else {
//         return prev;
//     }
//     if (item > prev[1]) {
//         return [index, item];
//     } else {
//         return prev;
//     }
// }, a[0,a[o]])

// console.log(d);

const data = [[1,2,3],[11,2,3],[5,6,7]]

const flat = data.reduce( (prev, item) => {
    return prev.concat(item);
})

console.log(flat)