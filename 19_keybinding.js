let div = document.querySelector("#square");

div.setAttribute("style", "background: black; width:50px; height:50px; position: absolute;");

document.addEventListener("keyup", () => {
    if (event.code === "ArrowUp") {
        div.style.transform = "translateY(-10px)";
    } else if (event.code === "ArrowDown") {
        div.style.transform = "translateY(10px)"
    } else if (event.code === "ArrowRight") {
        div.style.transform = "translateX(10px)";
    } else if (event.code === "ArrowLeft") {
        div.style.transform = "translateX(-10px)";
    };
})
