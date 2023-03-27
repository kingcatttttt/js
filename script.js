const temp = [1,2,4,334,123,6454,234,234,234,8564,34]

const z = [

];

let tF = temp.map(item => {
    console.log(item);
    return 10+item*1.8;
})

console.log(tF);

let a = [33,44,66];
a[10] = 90;

let b = a.map((item, index, array) => {
    if (index ==  1) {
        array[ index + 1 ] = 77;
    }
    return item;
})

console.log(b);

const zBsck = z.map(item => {
    item.name = item.name.trim().toLocalLowerCase();
    return item;
})

console.log(zBsck);