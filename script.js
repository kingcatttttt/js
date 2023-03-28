const a = [3,4,5,6,7];
const b = ["c","d","a"];

const c = [...a, ...b];
console.log(c);

const d = [...b];
console.log(d);

const e = [..."hello"];
console.log(e);

const f = [...new Set([1,3,4,53])];
console.log(f)

function test() {
    console.log([...arguments]);
}

test();

let p = document.querySelector("p");
console.dir(p);
console.log([...p]);