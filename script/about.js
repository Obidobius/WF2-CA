// More info
function extraInfo() {
    var x = document.getElementById("moreInfoContent");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

document.getElementById("moreInfoTrigger").addEventListener("click", function name(params) {
    extraInfo();
})

//second
