function testi() {

let id = document.forms['lomake']['id'].value;
console.log(id);

let salasana = document.forms['lomake']['salasana'].value;
console.log(salasana);

let nimi = document.forms['lomake']['nimi'].value;
console.log(nimi);

let maa = document.forms['lomake']['maa'].value;
console.log(maa);

let sukupuoli = document.getElementById('male').value;
console.log(sukupuoli);

document.getElementById('print').innerHTML = id + salasana + maa + nimi + sukupuoli;
}
