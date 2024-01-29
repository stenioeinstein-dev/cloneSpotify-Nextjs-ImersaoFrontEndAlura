document.addEventListener("keydown", function () {
    if (event.key === "/") {
        document.getElementById("input").style.display = "flex";
    }
});


document.addEventListener("keydown", e => {
    if (event.key === "Escape") {
        document.getElementById("input").style.display = "none";
    }
});