
// console.log(Array.apply(null, {length: 10}).map(Number.call, Number).filter(item => {if (item % 3 === 0) return true}).length);

// let count = 0;
// for (let i = 0; i <= 100; i++) {
//     if ( i % 3 === 0) count++;
// }
// console.log(count);


function t9() {
    let out = "";
    let inputT1 = +document.querySelector(".i-91").value
    let inputT2 = +document.querySelector(".i-92").value
    if (inputT1 > inputT2) {
        inputT1 = + document.querySelector('.i-92').value
        inputT2 = + document.querySelector('.i-91').value
    }
    for (; inputT1 <= inputT2; inputT1++) {
        out += inputT1 + '';
    }
    document.querySelector('.out-9').innerHTML = out;
}

function t9() {
    let out = "";
    let a = +document.querySelector(".i-91").value
    let b = +document.querySelector(".i-92").value
    if (a > b) {
       let t = a;
       a = b;
       b = a;
       b = [a,a=b[0]];
       console.log('b' +b)
       console.log('a' +a)
       [a,b] = [b,a];
    }
    for (let i = a; i < b; i++) {
        out += inputT1 + '';
    }
    document.querySelector('.out-9').innerHTML = out;
}
document.querySelector('.b-9').innerHTML = t9;