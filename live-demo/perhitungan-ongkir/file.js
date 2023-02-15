function submit(){
    var dalamNegeriChecked = document.getElementById('dalamNegeri').checked;
    var luarNegeriChecked = document.getElementById('luarNegeri').checked;
    var berat = document.getElementById('beratBarang').value;
    var hargaOngkir;

    
    if (dalamNegeriChecked == true) {
        if (berat < 10) {
            document.getElementById('ongkir').innerHTML = "gratis"
        }
        else if (berat >= 10 && berat <= 49){
            hargaOngkir = "500.000"
            document.getElementById('ongkir').innerHTML = hargaOngkir + " Rp";
        }
        else if (berat > 49){
            hargaOngkir = "1.000.000"
            document.getElementById('ongkir').innerHTML = hargaOngkir + " Rp";
        }
    }
    
    else if (luarNegeriChecked == true) {
        if (berat < 5) {
            document.getElementById('ongkir').innerHTML = "gratis"
        }
        else if (berat >= 5 && berat <= 10){
            hargaOngkir = "500.000"
            document.getElementById('ongkir').innerHTML = hargaOngkir + " Rp";
        }
        else if (berat > 10){
            hargaOngkir = "1.000.000"
            document.getElementById('ongkir').innerHTML = hargaOngkir + " Rp";
        }
    }

    else{
        alert("PILIH SALAH SATU OPSI DIATAS !!")
    }
}


