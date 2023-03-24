// // // let dwayne = {};
// // // let daniel = {
// // //     firstName: "Dianiel"
// // // }

// // // let jason = {
// // //     key: "jason"
// // // }
// // // document.querySelector(".our").innerHTML = daniel;
// // // dwayne[daniel] = 123;
// // // dwayne[jason] = 456;

// // // dwayne[daniel];

// // const func = (function (a) {
// //     delete a;
// //     return a;
// // })(5);
// // function func2 (A) {
// //     return A;
// // }
// // let b = func2(5)
// // console.log(b)
// // console.log(func)

// console.log({a : 1} == {a: 1});
// console.log({a : 1} === {a: 1});

const jamesBoand = {
    firstName: "Daniel",
    lastName: "craig",
    getFullName: function() {
        return '${this.firtsName} ${this.lastName}'.
    }

};

console.log(jamesBoand.getFullName())