// Scrivere un ciclo che stampi la tabellina del 7 : 7x1 = 7

let tabellina = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabellina} x ${i} = ${tabellina * i}`);
}

// Definire un array contenente 7 numeri e stamparne la media aritmetica (es la media di 6,8,10 = (6+8+10) / 3 dove 3 è il numero di elementi dell'array)

let numeri = [6, 8, 10, 12, 14, 16, 18];
let somma = 0;
for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
}
let media = somma / numeri.length;
console.log(`La media è: ${media}`);

let somma2 = 0;
for (let num of numeri) {
    somma2 += num;
}
let media2 = somma2 / numeri.length;
console.log(`La media è: ${media2}`);

//Definire un array contenente i cognomi di 20 studenti.Gli studenti il cui cognome inizia con una lettera compresa fra A e J saranno assegnati al prof Rossi, gli altri al prof.Bianchi.Utilizzare un ciclo for e popolare un array per professore contenente i cognomi degli studenti assegnatigli.
//per estrarre la prima lettera di una stringa possiamo fare stringa[0]

let studenti = ["Citro", "Coli", "Verdi", "Neri", "Gialli", "Marroni", "Blu", "Viola", "Arancioni", "Rosa", "Grigi", "Celesti", "Fucsia", "Turchesi", "Lilla", "Beige", "Oro", "Argento", "Bronzo", "Platino"];
let profRossi = [];
let profBianchi = [];

for (let studente of studenti) {
    let primaLettera = studente[0];
    if (primaLettera >= "A" && primaLettera <= "J") {
        profRossi.push(studente);
    } else {
        profBianchi.push(studente);
    }
}
console.log("Studenti del prof Rossi:", profRossi);
console.log("Studenti del prof Bianchi:", profBianchi);

// data una stringa stampa ogni carattere della stessa (la stringa è equiparabile in lettura a un array di caratteri)

let stringa = "Salutamassorreta";
for (let carattere of stringa) {
    console.log(carattere);
}

//data una stringa stamparla al contrario guida -> adiug

let stringaInvertita = "";
for (let i = stringa.length - 1; i >= 0; i--) {
    stringaInvertita += stringa[i];
}
console.log(stringaInvertita);

//dato un array di numeri stampa tutti i numeri a meno che vengano trovati i numeri 4 o 7. In questo caso stampiamo "errore" e usciamo;

let arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of arrayNumeri) {
    if (num === 4 || num === 7) {
        console.log("errore");
        break;
    }
    console.log(num);
}

//dato un array di numeri stampa tutti i numeri tranne  4 o 7.

//let arrayNumeri2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of arrayNumeri) {
    if (num === 4 || num === 7) {
        continue;
    }
    console.log(num);
}
//stampa i numeri pari compresi fra 20 e 4 dal più grande al più piccolo

let numero = 20;
while (numero >= 4) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero--;
}
// SIMULA UN GIOCO IN CUI IL COMPUTER PENSA A UN NUMERO COMPRESO FRA 0 E 6 E L'UTENTE DEVE INDOVINARLO. OGNI VOLTA CHE SBAGLIA GLI VIENE RIPROPOSTO IL PROMPT (lanciarlo da un file html)

let numeroCasuale = Math.floor(Math.random() * 7);
let tentativo;
let indovinato = false;

do {
    let input = prompt("Indovina il numero pensato dal computer (da 0 a 6):");

    console.log("Numero pensato dal computer:", numeroCasuale);
    console.log("Tentativo dell'utente:", input);
    tentativo = +input;

    if (tentativo > 0 && tentativo < 6) {
        if (tentativo == numeroCasuale) {
            alert("Complimenti! Hai indovinato il numero " + numeroCasuale + "!");
            indovinato = true;
        } else {
            alert("Sbagliato! Riprova.");
        }
    } else {
        alert("Input non valido. Gioco interrotto.");
        break;
    }
} while (!indovinato);