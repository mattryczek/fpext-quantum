function fixify() {
    const descIfr = document.querySelector("#descrpt_ifr");

    const descDoc = descIfr.contentDocument;
    let nodes = descDoc.body.getElementsByTagName("*");

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.fontFamily = "";
        nodes[i].style.fontSize = "";
        nodes[i].style.color = "";
        nodes[i].style.backgroundColor = "";

        nodes[i].removeAttribute("_mce_style");
        nodes[i].removeAttribute("face");
    }

    descDoc.body.style.fontFamily = "Verdana, Arial, Helvetica, sans-serif";
    descDoc.body.style.fontSize = "13px";
}

(function setupFixify() {
    let tr = document.querySelector("#IssueInformation_ecTable table.inlineDialogHeading.indented tr");
    if (!tr) {
        window.setTimeout(setupFixify, 500);
        return;
    }

    let before = tr.firstElementChild.nextElementSibling;

    let td = document.createElement("TD");
    let div = document.createElement("DIV");
    div.classList.add("btn-sm");

    let i = document.createElement("SPAN");
    i.innerText = "🔨"

    div.addEventListener("click", fixify);
    div.appendChild(i);
    div.setAttribute("title", "Fixify");

    td.appendChild(div);

    tr.insertBefore(td, before);
})();