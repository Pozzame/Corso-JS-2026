/* function media(numeri) {
    let somma = 0;
    for (let i = 0; i < numeri.length; i++) {
        somma += numeri[i];
    }
    return somma / numeri.length;
}

let numeri = [6, 4, 1, 9, 7, 5, 99];
console.log("Media:" + media(numeri));

function isPari(num) {
    if (num % 2 === 0) return true;
    return false;
}

function farfallinatore(arr) {
    let str = "";
    for (el of arr) {
        if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
            str += "F" + el + "F";

        }
        else {
            str += el;
        }
    }
    return str;
};

array1 = ["Ciao", "Mondo", "mavvagio", "!"];
let str = "Ciao";
console.log(farfallinatore(str));


function operazioni(num1, num2, operazione) {
    return operazione(num1, num2);
}

console.log(operazioni(5, 3, (a, b) => a + b ));
console.log(operazioni(5, 3, (a, b) => a - b ));
console.log(operazioni(5, 3, (a, b) => a * b ));
console.log(operazioni(5, 3, (a, b) => a.toString() + b.toString() ));

function isPiuLunga(parola, lunghezza) {
    if (parola.length > lunghezza) return true;
    return false;
} */

//trasformare in arrowfunction la funzione isPiuLunga
/* const isPiuLungaArrow = (parola, lunghezza) => parola.length > lunghezza;

let parola = "Ciao";
let lunghezza = 3;
console.log(isPiuLungaArrow(parola, lunghezza));
console.log(((par, lung) => par.length > lung)(parola, lunghezza)); */




//definire un'arrow function che restituisca true se un numero è positivo (compreso lo 0), e false altrimenti
const isPositivo = (num) => num >= 0;

//Scrivi una arrow function che verifica se un array di numeri è in ordine crescente (ogni numero deve essere maggiore del precedente). Restituisce true se tutti i numeri sono in ordine crescente e false se almeno un numero è superiore al successivo
/* const isInOrdineCrescente = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) { 
            return false;
        }
    }
    return true;
} */

const isInOrdineCrescente = (arr) => arr.every((num, index) => index === 0 || num >= arr[index - 1]);

console.log(isInOrdineCrescente([1, 2, 3, 4, 5])); // true
console.log(isInOrdineCrescente([1, 2, 3, 5, 4]));
/* const isInOrdineCrescenteForeach = (arr) => {
    arr.forEach((num, index) => {
        if (index<arr.length-1 && num > arr[index + 1]) return false;
        return true;
    })
}; */



let array1 = [1, 2, 3, 4, 5];
array1.forEach((num, index) => {
    console.log(num + " " + index);
})





//scrivere una funzione che concatena un numero variabile di parametri e restituisce la stringa finale
const concatena = (...args) => args.join(' ');

console.log(concatena("Ciao", "Mondo", "come", "va?"));

//scrivere una funzione che dato un array di stringhe restituisce un un array con tutti gli elementi preceduti da "forse! ";
const aggiungiForse = (arr) => arr.map(str => "forse! " + str);
console.log(aggiungiForse(["Ciao", "Mondo", "come", "va?"]));

// Scrivere un funzione che verifichi se in un array di numeri tutti gli elementi sono diversi da 44 e 10
const tuttiDiversiDa44E10 = (arr) => arr.every(num => num !== 44 && num !== 10);

//https://codegrind.it/esercizi/javascript/array Svolgere gli esercizi



//creare un oggetto lampadina con i metodi accendi e spegni sia come oggetto semplice ({}) sia come costruttore

function Lampadina(marca, modello, potenza) {
    this.marca = marca;
    this.modello = modello;
    this.potenza = potenza;
    this.accesa = false;
    this.accendi = function () {
        this.accesa = true;
        console.log('accesa');
    };
    this.spegni = function () {
        this.accesa = false;
        console.log('spenta');
    }
}

let lampadina = new Lampadina('Osram', 'PD60a', 60);

let lampadina1 = new Lampadina('Osram', 'PD60a', 60);

lampadina.accendi();
console.log(lampadina.accesa);
console.log(lampadina1.accesa);
let lampadina2 = new Lampadina('Philips', 'PD120b', 75);
lampadina2.accendi();
console.log(lampadina2.accesa);

console.log(Object.keys(lampadina2));
console.log(Object.keys(lampadina2).filter(key => typeof lampadina2[key] !== 'function').length);


//Crea un costruttore Studente che accetta nome e voto. Crea un array di almeno cinque istanze. Scrivi una funzione (separata dal costruttore) che riceve l'array e restituisce il nome dello studente con il voto più alto. Stampa il risultato in console.

function Studente(nome, voto) {
    this.nome = nome;
    this.voto = voto;
}

let classe = [
    new Studente("Mario", 8),
    new Studente("Luigi", 7),
    new Studente("Peach", 9),
    new Studente("Toad", 6),
    new Studente("Yoshi", 10)
];

function StudenteMigliore(array) {
    let studenteMigliore = array[0];
    for (let studente of array) {
        if (studente.voto > studenteMigliore.voto) {
            studenteMigliore = studente;
        }
    }
    return studenteMigliore;
}

console.log(StudenteMigliore(classe).nome);

const studenteConVotoAlto = (array) => {
    let studenteMigliore = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].voto > studenteMigliore.voto) {
            studenteMigliore = array[i];
        }
    }
    return studenteMigliore.nome;
};

console.log(studenteConVotoAlto(classe));

//Mostrare gli studenti con il voto più alto in caso di parità.

function StudentiMigliori(array) {
    let votoMassimo = Math.max(...array.map(studente => studente.voto));
    return array.filter(studente => studente.voto === votoMassimo);
}

console.log(StudentiMigliori(classe).map(studente => studente.nome));

// Crea un costruttore Temperatura che accetta un valore in gradi Celsius. Aggiungi un metodo inFahrenheit() che restituisce il valore convertito in Fahrenheit (formula: C * 9/5 + 32). Crea tre istanze con temperature diverse e stampa la conversione di ciascuna.

function Temperatura(celsius) {
    this.celsius = celsius;
    this.inFahrenheit = function () {
        return this.celsius * 9 / 5 + 32;
    };
}

let temp1 = new Temperatura(0);
let temp2 = new Temperatura(25);
let temp3 = new Temperatura(100);

console.log(temp1.inFahrenheit());
console.log(temp2.inFahrenheit());
console.log(temp3.inFahrenheit());


//Crea un array di 4 oggetti dipendente, ciascuno con nome, stipendio, reparto. Scrivi tre funzioni separate:filtraPerReparto(dipendenti, reparto) — restituisce solo i dipendenti di un dato reparto stipendioTotale(dipendenti) — somma tutti gli stipendi aumentaStipendi(dipendenti, percentuale) — restituisce un nuovo array con gli stipendi aumentati, senza modificare l'array originale (usa map e lo spread operator sull'oggetto)

function Dipendente(nome, stipendio, reparto) {
    this.nome = nome;
    this.stipendio = stipendio;
    this.reparto = reparto;
}

const dipendenti = [
    new Dipendente("Mario", 2000, "IT"),
    new Dipendente("Luigi", 2500, "HR"),
    new Dipendente("Peach", 3000, "IT"),
    new Dipendente("Toad", 1500, "Sales")
];

function filtraPerReparto(dipendenti, reparto) {
    return dipendenti.filter(dipendente => dipendente.reparto === reparto);
}

function stipendioTotale(dipendenti) {
    return dipendenti.reduce((totale, dipendente) => totale + dipendente.stipendio, 0);
}

//Scrivi un costruttore Automobile(marca, modello, km) che inizializza le tre proprietà e aggiunge un metodo percorri(kmAggiunti) che aumenta km del valore passato. Crea tre istanze diverse con new. Scrivi poi una funzione esterna trovaPiuUsata(automobili) che, dato un array di istanze, restituisce quella con più km percorsi. Verifica che ogni istanza mantenga il proprio stato indipendente (modificare i km di una non deve toccare le altre).

function Automobile(marca, modello, km) {
    this.marca = marca;
    this.modello = modello;
    this.km = km;
    this.percorri = function (kmAggiunti) {
        this.km += kmAggiunti;
    }
}

let auto1 = new Automobile("Fiat", "Punto", 10000);
let auto2 = new Automobile("Ford", "Focus", 20000);
let auto3 = new Automobile("Toyota", "Corolla", 15000);

function trovaPiuUsata(automobili) {
    let autoPiuUsata = automobili[0];
    for (let auto of automobili) {
        if (auto.km > autoPiuUsata.km) {
            autoPiuUsata = auto;
        }
    }
    return autoPiuUsata;
}

let automobili = [auto1, auto2, auto3];
let autoPiuUsata = trovaPiuUsata(automobili);
console.log("Auto più usata è: " + autoPiuUsata.marca + " " + autoPiuUsata.modello + " con " + autoPiuUsata.km + " km.");

//automobili[0].percorri(5000);
for (let auto of automobili) {
    console.log(auto.marca + " " + auto.modello + " " + auto.km);
}
//Scrivi un costruttore Magazzino(nome) che inizializza nome e una proprietà prodotti come oggetto vuoto (non array). Aggiungi un metodo aggiungiProdotto(nomeProdotto, quantita) che inserisce una nuova chiave in prodotti. Aggiungi un metodo quantitaTotale() per sommare tutte le quantità e restituire il totale. Crea un'istanza, aggiungi almeno 4 prodotti diversi, e verifica che quantitaTotale() restituisca il numero corretto.

function Magazzino(nome) {
    this.nome = nome;
    this.prodotti = {};
}

Magazzino.prototype.aggiungiProdotto = function (nomeProdotto, quantita) {
    this.prodotti[nomeProdotto] = quantita;
};

Magazzino.prototype.quantitaTotale = function () {
    let totale = 0;
    for (let quantita of Object.values(this.prodotti)) {
        totale += quantita;
    }
    return totale;
    //return Object.values(this.prodotti).reduce((totale, quantita) => totale + quantita, 0);
};

let coop = new Magazzino("Coop");
coop.aggiungiProdotto("pane", 10);
coop.aggiungiProdotto("latte", 5);
coop.aggiungiProdotto("uova", 12);
coop.aggiungiProdotto("pasta", 8);

console.log(coop);
console.log("Quantità totale: " + coop.quantitaTotale());

//Scrivi un costruttore Pagella(nomeStudente) che inizializza nomeStudente e una proprietà materie come oggetto vuoto, dove ogni chiave sarà il nome di una materia e il valore il voto (es. { matematica: 8 }). Aggiungi un metodo aggiungiMateria(nome, voto). Aggiungi un metodo stampaPagella()  per stampare a console ogni riga nel formato materia: voto. Aggiungi un metodo materieInsufficienti()  per restituire un array con i soli nomi delle materie dove il voto è inferiore a 6.

function Materia(nome, voto) {
    this.nome = nome;
    this.voto = voto;
}

function Pagella(nomeStudente) {
    this.nomeStudente = nomeStudente;
    this.materie = [];
    this.aggiungiMateria = function (nome, voto) {
        this.materie.push(new Materia(nome, voto));
    };
}

Pagella.prototype.stampaPagella = function () {
    for (let [materia, voto] of Object.entries(this.materie)) {
        console.log(materia + ": " + voto);
    }
};

Pagella.prototype.materieInsufficienti = function () {
    let insufficienti = [];
    for (let materia of this.materie) {
        if (materia.voto < 6) {
            insufficienti.push(materia);
        }
    }
    return insufficienti;
};


let pagella = new Pagella("Mario Rossi");
pagella.aggiungiMateria("Matematica", 8);
pagella.aggiungiMateria("Italiano", 5);
pagella.aggiungiMateria("Storia", 7);
pagella.aggiungiMateria("Inglese", 4);
console.log(pagella);
console.log(pagella.materie);
console.log("Materie insufficienti: " + pagella.materieInsufficienti().join(", "));