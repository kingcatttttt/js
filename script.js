// // // function one() {
// // //     console.log("t");
// // //     console.log("t");
// // //     console.log("t");
// // // }
// // // let two = () => 1;

// // // // one();
// // // cosnt t2 = () => {
// // //     console.log("t");

// // // let count = 0;
// // // document.querySelector('#test').addEventListener('click', () => {
// // //     setTimeout(() => {
// // //             count++;
// // //         console.log(count)
            
// // //     },100)
// // // }) 


// // const increment = () => {
// //     debugger;
// //     count++;
// //     console.log(count)
// // }
// // const timeFunction = () => {
// //     setTimeout(increment, 1000)
// // }

// // let count = 0;

// // document.querySelector("#test").addEventListener("click", timeFunction);

// const a = [1,2,3,4];
// let b = a.map( item => item * 3);

// console.log(b)

// function z(n) {
//     if ( n >= 0) return n;
//     else return 0;
// }

// console.log(z(-3))
// console.log(z(4))


const z2 = n =>  n >= 0 ? n : 0

 console.log(z2(-3))
 console.log(z2(4))

 const b  = [2,3,4,5]

 let c = b.map(item => ({"number" : item}))

 console.log(c)

//  document.querySelector("#test").addEventListener("click" , () => {
//     fetch.("file.json")
//     .then( res => res.json())
//     .then( file => {
//         file.forEach(item => {
//             console.log(item.name)
//         })
//     })
//  })

const clickHadle = () => {
    fetch("file.json")
    .then(res => res.json())
    .then(readJson);
}
 const readJson = file => {
    file.forEach(item => {
        console.log(item.name)
    })
 }