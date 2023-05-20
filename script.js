let our = document.querySelector(".our")
let arr = []
const i1 = document.querySelector(".i1").addEventListener("change", () => {
    let value = document.querySelector(".i1").value;
    arr.push(value)
    console.log(arr)
    let result = arr.reduce((a,b) => (+a +  +b) / arr.length )
    console.log(result)
    document.querySelector(".i1").value = "";
    our.innerHTML = `${arr} = ${result}`
})

const b1 = document.querySelector(".b1").addEventListener("click", () => {
    arr.shift()
    console.log(arr)
    let result = arr.reduce((a,b) => (+a +  +b) / arr.length )
    console.log(result)
    document.querySelector(".i1").value = "";
    our.innerHTML = `${arr} = ${result} `
})
const b2 = document.querySelector(".b2").addEventListener("click", () => {
    arr = []
    our.innerHTML = arr;
})