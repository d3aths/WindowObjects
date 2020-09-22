function createWindow() {
    let url = "http://www.neopets.com";
    let win = window.open(url, "My new window", "width=300, height=200");
    document.getElementById("result").innerHTML =
        win.name + " - " + win.opener.location;
}

let h = window.outerHeight
let w = window.outerWidth
window.document.write("Height and width of the window are: " + h + " and " + w)

