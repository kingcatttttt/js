const browser = [

]

let a = [99,88]
console.log(a)

a[0] = 55;
console.log(a)
a[a.length] = 55;
console.log(a)
a.push(44);
console.log(a)
console.log(a.push(8))
console.log(a)

function hello() {
 a.push(b);
}

a.pop();
console.log(a)
console.log(a.pop())
console.log(a)
const b = [3]
console.log(b)
console.log(b.pop())

const cars = [];
document.querySelector(".puhs").onclick = () => {
    let id = document.querySelector(".goods").value;
    if (!cars.includes(id)) {
        cars.push(id)
    }
    console.log(cars)
}