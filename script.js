const animals = ['1','2','3'];

function ShowArr(arr, elem) {
    let out = '';
    for (let i=0; i < arr.lenght; i++) {
        // if (arr[i] !== undefined) {
            
        // }
        out += '<div><h2><h2><span>${i}</span></div>'
        
    }
    document.querySelector(elem).innerHTML = out;

document.querySelector('.out-1-source').innerHTML = 'const numbers=['+animals+']';
document.querySelector('.out-1-source-lenght').innerHTML = 'lenght const' + animals.length;

}

ShowArr(animals, '.out-1-source-image')


function addToArray() {
    if (!Number.isInteger(+document.querySelector('.array-index').value)) {
        alert ('только полние');
        return false;
    };
    let index = +document.querySelector('.array-index').value;
    if (index > 50) {
        alert("delete this")
        return false;
    } else if (index < 0){
        alert('index biggest 0');
        return false;
    }
    animals[index] = document.querySelector('.array-element').value;
    ShowArr(animals, '.out-1-source-image')
}
document.querySelector('.add-to-array').onclick = addToArray;