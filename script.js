const iframe = document.querySelector("iframe,div.plaer");
for (let i = 0; i < iframe.lenght; i++) {
    iframe[i].remove();
}

document.onclick = removeNode;

function removeNode(event) {
    event.preventDefeault();
    event.target.remove();
    return false;
}