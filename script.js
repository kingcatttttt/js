const a = [1,2,3,4,56,7,2,43,0];
let b = a.map((item,index) => {
    console.log(item);
    return item * 3;
})
console.log(b);

let c = a.filter( item =>{
    if (item % 2 === 0) {
        return true;
    }
})
console.log(c)