document.addEventListener(
    "DOMContentLoaded",
    () => {
        document.getElementById("visibility-status").innerHTML = document.hidden ? "Hidden" : "Visible";
        document.getElementById("focus-status").innerHTML = document.hasFocus ? "Focus" : "Blur";
        
        document.getElementById("visibility-status-block").style.filter = document.hidden ? "invert(100%)" : "invert(0%)";
        document.getElementById("focus-status-block").style.filter = document.hasFocus ? "invert(0%)" : "invert(100%)";
    }
)

// Chek Visibility API
document.addEventListener(
    "visibilitychange",
    (event) => {
        if (document.hidden) {
            document.getElementById("visibility-status-block").style.filter = "invert(100%)";
            document.getElementById("visibility-status").innerHTML = "Hidden";

            return ;
        }
        document.getElementById("visibility-status-block").style.filter = "invert(0%)";
        document.getElementById("visibility-status").innerHTML = "Visible";
    }
)

// Check onBlur/onFocus
document.addEventListener(
    "blur",
    (event) => {
        document.getElementById("focus-status-block").style.filter = "invert(100%)";
        document.getElementById("focus-status").innerHTML = "Blur";
    }
)

document.addEventListener(
    "focus",
    (event) => {
        document.getElementById("focus-status-block").style.filter = "invert(0%)";
        document.getElementById("focus-status").innerHTML = "Focus";
    }
)