document.querySelector(".left").addEventListener('click', articleLeft);
document.querySelector(".right").addEventListener('click', articleRitht);

let section = document.querySelector("article section");
let sectionCount = section.lenght;
let hash = 0;

if (window.location.hash) {
    hash = window.location.hash;
    hash = +hash.replace("#", "");
    showSection();

}
function articleLeft() {
    if (hash -1 >= 0) {
        hash--;
    } else {
        hash = sectionCount - 1;
    }
    showSection();
}


function articleRitht() {
    if (hash -1 >= 0) {
        hash--;
    } else {
        hash = sectionCount - 1;
    }
    window.location.hash = hash;
    showSection();
}
function showSection() {
    section.forEach(elem => {
        elem.classList.add("hide-section");

    });
    section[hash].classList.remove("hide-section")
}