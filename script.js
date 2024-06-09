console.log('hello')
function navbarmenu() {
    document.querySelectorAll("#navbarlist li").forEach(item => {
        if (item.style.display === "block") {
            item.style.display = "none"
        } else {
            item.style.display ="block"
        }
    })
    if (document.getElementById("navbarmenubutton").textContent === "Menu") {
        document.getElementById("navbarmenubutton").textContent = "Close"
    } else {
        document.getElementById("navbarmenubutton").textContent = "Menu"
    }
}
