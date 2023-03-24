const images = document.querySelector("img")
let imageInterval;

imageInterval = setInterval(() => {

console.log('image 1 ' +images[0].complete);
console.log('image 2 ' +images[1].complete);
console.log('image 3 ' +images[2].complete);
if (images[0].complete && images[1].complete && images[2].complete) {
    clearInterval(imageInterval);
    }   
},50)