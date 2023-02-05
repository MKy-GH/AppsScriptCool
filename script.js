
function frameLoaded() {
    const fwl = document.querySelector("iframe").contentWindow.length; // frame window length.
    if (fwl === 0) {

        function fillBody(text, color) {
            const body = document.getElementsByTagName("body")[0];
            const para = document.createElement('p');
            para.style = 'font-size:3.5vw; line-height:2; margin:5%';
            para.style.color = color;
            body.innerHTML = "";
            para.innerHTML = text;
            body.appendChild(para);
        }

        let text =
            "FR - Veuillez autoriser la lecture de votre calendrier. <br>" +
            "EN - Please authorize access to your calendar. <br>" +
            "DE - Bitte erlauben Sie das Lesen Ihres Kalenders.";
        fillBody(text, 'green');

        const timeout = 2 /*sec*/ * 1000;
        setTimeout(() => {
            const myUrl = document.URL;
            const scriptPage = "https://script.google.com/macros/s/AKfycbwMk1cPOHr3ipJKyBTFEB65ifhdWmRjALIDIWbEr0JcwP8gf02e309aukXVd770TKE7Xw/exec" +
                "?auth=true&redirect=" + encodeURIComponent(myUrl);
            const newWin = window.open(scriptPage, '_blank');  // use '_self' to replace the current window

            let text =
                "FR - Utiliser la touche F5 pour recharger la page. <br>" +
                "EN - Press the F5 key to reload this page. <br>" +
                "DE - Drücken Sie die F5-Taste, um diese Seite neu zu laden.";
            fillBody(text, 'brown');

        }, timeout);
    }
};