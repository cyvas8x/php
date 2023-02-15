function copy() {
    var range = document.createRange();
    range.selectNode(document.getElementById("isicode"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    swal({
        title: "Berhasil Tersalin",
        text: "KODE e WS TERSALIN, TUTUPEN WS",
        icon: "success",
        button: "Makasih Bang",
    });
}

