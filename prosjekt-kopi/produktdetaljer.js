

let detaljer = document.querySelector("#detaljer")
let bilde = document.querySelector("#bilde")


var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);


let db = firebase.database();
let beskrivelseBukse = db.ref("varer/bukser/" + id);
let beskrivelseJakke = db.ref("varer/jakker/" + id);
let beskrivelseKjole = db.ref("varer/kjoler/" + id);
let beskrivelseSko = db.ref("varer/sko/" + id);
let beskrivelseTilbehør = db.ref("varer/tilbehør/" + id);


function visVare (snapshot){
  let vare = snapshot.val()

  bilde.innerHTML = `
  <img id="produktbilde" src="bilder/${vare.bilde}"  alt="">`;

  detaljer.innerHTML = `
  <div class="tilbakeknapp"> <a href="nettside.html">TILBAKE</a></div>
  <h2>${vare.navn}</h2>
  <h3>${vare.merke}</h3>
  <p>${vare.beskrivelse}</p>
  `;
}


if (id.charAt(0) === "b"){
  beskrivelseBukse.on("value", visVare);
}
if (id.charAt(0) === "j"){
  beskrivelseJakke.on("value", visVare);
}
if (id.charAt(0) === "k"){
  beskrivelseKjole.on("value", visVare);
}
if (id.charAt(0) === "s"){
  beskrivelseSko.on("value", visVare);
}
if (id.charAt(0) === "t"){
  beskrivelseTilbehør.on("value", visVare);
}
