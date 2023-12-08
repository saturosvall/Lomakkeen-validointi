function testi() {

let teksti = "";
let id = document.forms['lomake']['id'].value;
if(id.length < 6) {
    teksti += "liian lyhyt id"
}

let salasana = document.forms['lomake']['salasana'].value;
if (salasana.length > 5 && salasana.match(/[a-z]/) && salasana.match(/[A-Z]/) && salasana.match(/\d/) && salasana.match(/[^a-zA-Z\d]/)) {
    teksti += "HYVÄJOO!!"
} else {
    teksti += "salasanassa pitää olla isoja ja pieniä kirjaimia";
}

let nimi = document.forms['lomake']['nimi'].value;
console.log(nimi);

let osoite = document.forms['lomake']['osoite'].value;
console.log(osoite);

let maa = document.forms['lomake']['maa'].value;
console.log(maa);

let postinumero = document.forms['lomake']['postinro'].value;
if (postinumero.length === 5 && postinumero.match(/\d/)) {
    teksti += "HYVÄJOO!!"
} else {
    teksti += "Postinumerossa pitää olla 5 numeroa";
}
let email = document.forms['lomake']['email'].value;
atpos = email.indexOf("@");
dotpos = email.lastIndexOf(".");

if (atpos < 1 || ( dotpos - atpos < 2 )) {
    teksti += "Syötä oikea sposti";
}

let sukupuoli = "";
if(document.getElementById('male').checked == true) {
    sukupuoli = "Mies";
} else if(document.getElementById('female').checked == true) {
    sukupuoli = 'Nainen';
} else {
    teksti += "Ole hyvä ja valitse sukupuoli";
}

let sukupuoliMies = document.getElementById('male').value;
console.log(sukupuoliMies);

let sukupuoliNainen = document.getElementById('female').value;
console.log(sukupuoliNainen);

let kieliSuomi = document.getElementById('suomi').value;
console.log(kieliSuomi);

let kieliMuu = document.getElementById('muukieli').value;
console.log(kieliMuu);


document.getElementById('print').innerHTML = teksti;

}
