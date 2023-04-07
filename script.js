document.querySelector(".add").addEventListener("click", add)
function add() {
    let a = document.querySelector(".add1").value;
    
    if (a == 2) {
        document.querySelector(".ao").classList.add("aboba")
    this.disabled = true;
    document.querySelector(".score").innerHTML = score++ || score--;
       alert("правільно")
    } else {
        alert("ти даун?")

        this.disabled = true;
    }
}


document.querySelector(".f").addEventListener("click", ad)
function ad() {
    let b = document.querySelector(".add2").value;
    document.querySelector(".score").innerHTML = result++;
    if (b == 6) {
       alert("правільно")
       document.querySelector(".ao1").classList.add("aboba")
    } else {
        alert("ти даун?")
    }
}
let score = 0;
document.querySelector(".score").innerHTML = score++ ;
let result = score;

