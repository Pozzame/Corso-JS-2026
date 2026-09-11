const statTotale = document.getElementById('stat-totale');
/* const diminuisciTotaliButton = document.getElementById('diminuisci-totali'); */
const diminuisciTotaliButton = document.querySelector('#lista-spesa .item-spesa');
diminuisciTotaliButton.addEventListener("click", ()=> {diminuisci(statTotale);});
const aumentaTotaliButton = document.getElementById('aumenta-totali');
aumentaTotaliButton.addEventListener("click", ()=> {aumenta(statTotale);});
function diminuisci(sel) {
    console.log("in diminuisci");
    let num = sel.innerText;
    num--;
    sel.innerText = num
}
function aumenta(sel) { 
    console.log("in aumenta");
    let num = sel.innerText;
    num++;
    sel.innerText = num
}

const statLetti = document.getElementById('stat-letti');
const diminuisciLettiButton = document.getElementById('diminuisci-letti');
diminuisciLettiButton.addEventListener("click", diminuisciLetti);
const aumentaLettiButton = document.getElementById('aumenta-letti');
aumentaLettiButton.addEventListener("click", aumentaLetti);
function diminuisciLetti() {
    let num = statLetti.innerText;
    num--;
    statLetti.innerText = num
}
function aumentaLetti() { 
    let num = statLetti.innerText;
    num++;
    statLetti.innerText = num

 }
 
const statInLettura = document.getElementById('stat-in-lettura');
const diminuisciInLetturaButton = document.getElementById('diminuisci-in-lettura');
diminuisciInLetturaButton.addEventListener("click", diminuisciInLettura);
const aumentaInLetturaButton = document.getElementById('aumenta-in-lettura');
aumentaInLetturaButton.addEventListener("click", aumentaInLettura);
function diminuisciInLettura() {
    let num = statInLettura.innerText;
    num--;
    statInLettura.innerText = num
}
function aumentaInLettura() { 
    let num = statInLettura.innerText;
    num++;
    statInLettura.innerText = num

 }
const statDaLeggere = document.getElementById('stat-da-leggere');
const diminuisciDaLeggereButton = document.getElementById('diminuisci-da-leggere');
diminuisciDaLeggereButton.addEventListener("click", diminuisciDaLeggere);
const aumentaDaLeggereButton = document.getElementById('aumenta-da-leggere');
aumentaDaLeggereButton.addEventListener("click", aumentaDaLeggere);
function diminuisciDaLeggere() {
    let num = statDaLeggere.innerText;
    num--;
    statDaLeggere.innerText = num
}
function aumentaDaLeggere() { 
    let num = statDaLeggere.innerText;
    num++;
    statDaLeggere.innerText = num

 }
