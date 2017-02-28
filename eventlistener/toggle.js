var btn = document.querySelector("button");
var bln = false;
btn.addEventListener("click", function() {
    // var bd = document.querySelector("body");
    // if (bd.style.background === "purple") {
    //     bd.style.background = "orange";
    // } else {
    //     bd.style.background = "purple";
    // }



    if (bln) {
        document.body.style.background = "orange";
        bln = false;
    } else {
        document.body.style.background = "purple";
        bln = true;
    }

    // bln != bln;
});