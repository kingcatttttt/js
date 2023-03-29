Selection.addEventListener("change", ChangeUrllaunge)
const alllang = ["em","ua"];
function ChangeUrllaunge() {
    let lang = selecete.value;
    location.href = window.location.pathname + "#"+lang;
    location.reload();
}

function Changelaunge() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!alllang.includes(hash)){
        location.href = window.location.pathname = "#en"
        location.reload();
    }
    selecete.value = hash;
    document.querySelector("title").innerHTML = langArr['unit']['hash'];
    document.querySelector(".lng-chip").innerHTML = langArr['unit']['hash'];
    for (let key in langArr){
        let elem = document.querySelector(".lng-" + key) {
            if (elem) {
                innerHTML = langArr[key][string];
            }
        }
        document.querySelector(".lng" + key).innerHTML = langArrp["key"]["hash"];
    }
}