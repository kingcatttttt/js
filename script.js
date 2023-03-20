
document.querySelector('button').addEventListener('click', myClick)

function myClick() {
    let a = document.querySelector('.i1').value;
    console.log(a)
    document.querySelector('.aut').innerHTML = a;
}


