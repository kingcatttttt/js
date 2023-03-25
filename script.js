const romes = {"m": 1000,"cm":900,"d":500,"cd":400,"c":100,"xc":90,"l":50,"xl":40,"x":10,"ix":9,"v":5,"IV":4,"I":1,};

// function romanConvertOne(a) {
//     let resuslt = "";
//     decimalValue.map( (item,index) => {
//         while (item <= a) {
//             resuslt += romanValue[index];
//             a = a - item;
//             console.table({
//                 "a": a + item,
//                 "item": item,
//                 "a = a - item" : a,
//                 "result" : resuslt,
//             })
           
//         }
//         return resuslt;
//     })
// }
function romanConvertOne(a) {
    let result = "";
    for (let key in romes) {
        while (romes[key] <= a) {
            result += key;
            a = a - romes[key];
        }
    }
}
// document.querySelector("button").onclick = () => {
//     let num = +document.querySelector("input").value;
//     document.querySelector("out").innerHTML = romanConvertOne(num);
// }
console.log(romanConvertOne(a))