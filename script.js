const a = [2,3,4,6,7];

let b = a.map(index => {
    console.log(index);
    return 1;
})

console.log(b);

// const e = [];
// a[0] = 5;
// a[4] = 6;


let c  = a.filter( item => {
    if (item > 6) {
        return item*2;
    }
})

console.log(c);