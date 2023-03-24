// // // // // // // // // let n1 = 44.56;
// // // // // // // // // console.log(Math.floor(n1))

// // // // // // // // let n2 = 3;
// // // // // // // // console.log(Math.pow(n2,2));
// // // // // // // // console.log(n2**3);

// // // // // // // let n3 = "3";
// // // // // // // console.log(parseInt(n3))
// // // // // // // console.log(+n3)

// // // // // // let n4 = true 
// // // // // // if (n4 === true) {
// // // // // //     console.log("4")
// // // // // // }

// // // // // // n4 && console.log("4")

// // // // // let n5 = 3;
// // // // // console.log(n5.toString());
// // // // // console.log(+n5);

// // // // function f6_1() {
// // // //     console.log("6_1")
// // // // }
// // // // function f6_2() {
// // // //     console.log("6_2")
// // // // }

// // // // let n6 = 7;
// // // // if (n6 === 7) {
// // // //     f6_1()
// // // // }
// // // // else {
// // // //     f6_2()
// // // // }

// // // // (n6 === 7 ? f6_1 : f6_2)()

// // // function f7(param) {
// // //     if (param === undefined) {
// // //         throw new Error("problem")
// // //     }
// // //     return param;
// // // }

// // // console.log(f7(4));

// // // let checkParam = () => {
// // //     throw new Error("problem")
// // // }

// // // let f7_1 = (param = checkParam()) => {
// // //     return param;
// // // }
// // // console.log(f7_1(444));

// // let n8 = "sample string";
// // console.log(n8.charAt(4))
// // console.log(n8[4]);

// let n9 = "hello 
// h1
// mahai
// test";
// console.log(n9);

let n10 = 34;
let result = n10 || false
console.log(result);