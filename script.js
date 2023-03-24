console.log("hello")
console.log("%c hello" , "color: orange; background: red; font-weight:bold; text-transform: uppercase; padding: 10px; margin: 50px; width: 300px; border: 2px solid black;")
console.group("text");
console.groupEnd();

function one() {
    console.time()
    let a = 5;
    a++;
    two();
    console.timeLog();
    console.timeEnd();

}

function two() {
    let b = 5;
    b++;
    console.trace("function 2");
}
one();


let obj = {
    one : 4,
    two : 5,
    hello : "hi"
}
console.log(obj)
console.table(obj)

function four() {
    console.count("hi")
}

four();
four();
four();

console.assert()

let container = document.querySelector("container")
console.dir(container)
console.dir(obj)