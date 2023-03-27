// const browser = [

// ]
// let a = [99,88];
// console.log(a);
// a[0] = 66;
// console.log(a);
// a[a.length] = 55;
// console.log(a);
// a.push(88,33,22);
// console.log(a);

// console.log(a.push(111));

// function hello() {
//     // return document.querySelector(".one").innerHTML = 6
//     return a.push(b);
// }

// a.pop();
// console.log(a);
// console.log(a.pop());
// console.log(a);
// const b = [3];
// console.log(b)
// console.log(b.pop());
// console.log(b);

let car = [];
document.querySelector(".add").onclick = () => {
    let id = document.querySelector("#goods").value;
    if (!car.includes(id)) {
        car.push(id);
    }
    console.log(car);
}

document.querySelector(".pop").onclick = () => {
    let id = document.querySelector("#goods").value;
    let goods = car.pop();
    console.log("id" + goods + "delete");
    console.log(car);
}