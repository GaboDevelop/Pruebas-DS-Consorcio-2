
function makeIt() {
    let inp = document.getElementById("text-url")

    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: inp.value,
        logo: './assets/ucab_logo.png',
        // darkColor: 'rgb(2,0,36)'
    });
}

makeIt()

$("#text-url").on("blur", function () {
    makeIt();
}).on("keydown", function (e) {

    if (e.keyCode == 13) {  // KeyCode 13 = Enter key when we press enter key the code will be generat 
        makeIt();
    }

});

