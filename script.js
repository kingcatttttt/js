function a1() {
    console.log('work a1');
    f2();
}

function f2() {
    console.log('f2 working');
    console.trace();
}
a1();

const c ={
    one : 1,
    two : 2,
    three : 3,
}

let p = document.querySelector('p')
let div = document.querySelector('div');
console.log(div);
console.log(p);
console.dir(p);

console.dir(one1);
console.dir(document.myForm)
console.log(window.myForm);