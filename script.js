
function frameLoaded() {
    const fwl = document.querySelector("iframe").contentWindow.length; // frame window length.
    if (fwl === 0) {
        alert("Please Login!");
        window.location = "https://accounts.google.com";
    }
};