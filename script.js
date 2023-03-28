const a = [
    {"id":55 , "cty": "arc"},
    {"id":44 , "cty": "asd"},
    {"id":33 , "cty": "rcs"},
];

let b = a.reduce( (acum,item) => {
    acum.push(item.id);
    return acum;
})
console.log(b);
console.log(Array.isArray(b))