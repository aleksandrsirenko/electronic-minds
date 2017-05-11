function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "icon-bar") {
        x.className += " responsive";
    }
    else {
        x.className = "icon-bar";
    }
}
