// Määritellään funktio, joka käynnistyy lähetä-painikkeesta
function testi() {

let teksti = "";

// Määritellään validin ID:n ehdot
let id = document.forms['lomake']['id'].value;
if(id.length > 5) {
    teksti += "ID: OK" +"<br>"
} else {
    teksti += "ID pitää olla vähintään 6 merkkiä pitkä." +"<br>";
}

// Määritellään validin salasanan ehdot
let salasana = document.forms['lomake']['salasana'].value;
if (salasana.length > 5 && salasana.match(/[a-z]/) && salasana.match(/[A-Z]/) && salasana.match(/\d/) && salasana.match(/[^a-zA-Z\d]/)) {
    teksti += "Salasana: OK" +"<br>"
} else {
    teksti += "Salasanan pitää olla vähintään 6 merkkiä pitkä, sisältää vähintään yksi numero ja joku erikoismerkki." +"<br>";
}

// Määritellään validin nimen ehdot
let nimi = document.forms['lomake']['nimi'].value;
if (nimi.length < 0) {
    teksti += "Nimitieto pakollinen." + "<br>"
} else {
    teksti += "Nimi: OK" + "<br>"
}

// Määritellään validin osoitteen ehdot
let osoite = document.forms['lomake']['osoite'].value;
if (osoite.length < 0) {
    teksti += "Osoitetieto pakollinen."+"<br>"
} else {
    teksti += "Osoite: OK" + "<br>"
}

// Määritellään validin maan ehdot (maa tulee olla valittuna)
let maa = document.forms['lomake']['maa'].value;
if (maa !== "tyhja") {
    teksti += "Maa: OK" + "<br>"
} else {
    teksti += "Maatieto pakollinen." +"<br>"
}

// Määritellään validin postinumeron ehdot
let postinumero = document.forms['lomake']['postinro'].value;
if (postinumero.length === 5 && postinumero.match(/\d/)) {
    teksti += "Postinumero: OK"+"<br>"
} else {
    teksti += "Postinumerossa pitää olla 5 numeroa." +"<br>";
}

// Määritellään validin sähköpostin ehdot
let email = document.forms['lomake']['email'].value;
atpos = email.indexOf("@");
dotpos = email.lastIndexOf(".");

if (atpos < 1 || ( dotpos - atpos < 2 )) {
    teksti += "Syötä oikea sähköposti." +"<br>"
} else {
    teksti += "Sähköposti: OK" + "<br>";
}

// Määritellään validin sukupuolen ehdot (sukupuoli tulee olla valittuna)
let sukupuoli = "";
if(document.getElementById('male').checked == true) {
    teksti += "Sukupuoli: OK"+"<br>"
} else if(document.getElementById('female').checked == true) {
    teksti += 'Sukupuoli: OK' +"<br>"
} else {
    teksti += "Sukupuoli tulee olla valittuna." +"<br>";
}

// Määritellään validin kielen ehdot (kieli tulee olla valittuna)
let kieli = "";
if(document.getElementById('suomi').checked == true) {
    teksti += "Kieli: OK" +"<br>"
} else if(document.getElementById('muukieli').checked == true) {
    teksti += 'Kieli: OK' +"<br>"
} else {
    teksti += "Kieli tulee olla valittuna." +"<br>";
}

// Tulostetaan huomiot lomakkeen täytöstä
document.getElementById('print').innerHTML = teksti;
}
