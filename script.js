const clients = [
    {"iin": "123" ,"user" :"ivan", "debt": 3},
    {"iin": "1235" ,"user" :"semen", "debt": 5},
    {"iin": "4321" ,"user" :"bob", "debt": 3},
    {"iin": "1234" ,"user" :"ricard", "debt": 2},
];

const a = [2,-1,-2,25,-2,52,652,67,234,76,2,6,2,];
let b = a.filter((item,index,array)=> {
    if(item > -1 ) return array;
});
console.log(a);
console.log(b);

let debs = clients.filter(item => {
    if (item.debt >= 2).sort((a,b)=> (b.debt - a.debt))
})
console.log(debs)