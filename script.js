let a = [3,4,5]
let b = [6,7,8]

const c = [...a, ...b];
console.log(c)

const d = [...b]
console.log(d);

const i = [..."hello"]
console.log(i)


const e = [...new Set([1,2,3,4,5,6,7])]
console.log(e)

function test() {
    console.log([...arguments]);
}

test(1,2,3,4)

let p = document.querySelectorAll("p");
console.dir(p);