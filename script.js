// document.querySelector(".btn-2").addEventListener("click", check);
// document.querySelector(".btn-2").addEventListener("click", toggleScreen);

// function check() {
//     console.log("full screen")
//     console.log(document.fullscreenEnabled);

//     console.log("fullscreenelemnt")
//     console.dir(document.fullscreenElement);
// }

// function toggleScreen() {
//     if (!document.fullscreenElement) {
//         document.documentElement.requestFullscreen();
//     } else {
//         if (document.fullscreenEnabled) {
//             document.exitFullscreen();
//         }
//     }
// }

const img = document.querySelector(".img-1");

img.addEventListener("click", toggleScreen);

function toggleScreen() {
    if (!document.fullscreenElement) {
        img.requestFullscreen();
    } 
    else {
        if (document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    }

}

document.documentElement.addEventListener("fullscreenchanger", function() {
   console.log("test")
})