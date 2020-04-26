var qrcode = new QRCode("qrcode");

function makeCode() {
    var input_text = document.getElementById("text-url");

    if (!input_text.value) {
        $(".error").text("Enter Some text or Url to make QR Code");

        input_text.focus();
        return;
    } else {
        qrcode.makeCode(input_text.value);
    }
}

makeCode();

$("#text-url").on("blur", function () {
    makeCode();
}).on("keydown", function (e) {

    if (e.keyCode == 13) {  // KeyCode 13 = Enter key when we press enter key the code will be generat 
        makeCode();
    }

});