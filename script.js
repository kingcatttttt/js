let fontSize = 16;
if (localStorage.getItem("font-size")) {
    fontSize = localStorage.getItem("font-size")
}

document.querySelector(".font-zoom_item").textContent = fontSize;
document.body.style.fontSize = fontSize + "px";

document.querySelector(".font-zoom_plus").onclick = () => {
    fontSize++;
    localStorage.setItem(".font-size", fontSize)
    document.querySelector(".font-zoom_item").textContent = fontSize;
    document.body.style.fontSize = fontSize + "px";
}
document.querySelector(".font-zoom_minus").onclick = () => {
    fontSize--;
    localStorage.setItem(".font-size", fontSize)
    document.querySelector(".font-zoom_item").textContent = fontSize;
    document.body.style.fontSize = fontSize + "px";
}

