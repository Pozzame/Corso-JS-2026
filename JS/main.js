//1.Dichiarare una variabile chiamata "numero" e assegnarle il valore 5. Stampare il valore della variabile sulla console.

//2.Dichiarare una variabile chiamata "nome" e assegnarle il valore "Marco". Successivamente, modificare il valore della variabile in "Luca". Stampare il nuovo valore sulla console.

//3.Dichiarare tre variabili di tipo stringa e valorizzarle con tre nomi femminili.
//usando il templateLiteral stampare "le mie sorelle si chiamano ... seguite dai tre nomi separati da una virgola"

//4. stampare il risultato della seguente espressione 10-6+ variabileIncrementataDi1 -4 +8 dopo aver dichiarato e inizializzato la variabile. L'operazione deve utilizzare la variabile già incrementata

//5. Cambiare il segno a una variabile numerica (cambiando effettivamente la variabile)

//6. Trasformare la variabile numero = "505" (di tipo stringa) in una variabile numerica di pari valore.

//7. data la variabile simpatico=true utilizzarla per rispondere alla domanda "E' antipatico?"

let numero = 5;
console.log(numero);

let nomem = "Marco";
nomem = "Luca";
console.log(nomem);  

let sorella1 = "Anna",
 sorella2 = "Giulia",
 sorella3 = "Francesca";
console.log(`Le mie sorelle si chiamano ${sorella1}, ${sorella2}, ${sorella3}`);

let variabileIncrementataDi1 = 1;
let risultato = 10 - 6 + ++variabileIncrementataDi1 - 4 + 8;
console.log(risultato);

let numeroNegativo = -10;
numeroNegativo = -numeroNegativo;
console.log(numeroNegativo);

let numeroStringa = "505";
let numeroStringa2 = "505";
let numeroNumerico = Number(numeroStringa);
let numeroNumerico2 = +numeroStringa2;
console.log(numeroNumerico);
console.log(numeroNumerico2);

let simpatico = false;
if (!simpatico) {
    console.log("No, non è antipatico.");
}

let nome = "pippo";
let nome2 = "Claudio";
// testa e stampa se nome e nome2 sono uguali per valore e tipo e se sono entrambi diversi da "Giovanni"
console.log(nome === nome2 && (nome != "Giovanni" && nome2 != "Giovanni"));

let num1 = 5;
let num2 = 10;
//testa e stampa se num maggiore di num2 e se num compreso fra 4 e 20
console.log(num1 > num2 && (num1 >= 4 && num1 <= 20));

typeof num1 === "number" ? console.log("num1 è un numero") : console.log("num1 non è un numero");

//verifica se un numero è pari e stampa pari o dispari a seconda del caso.

//testa se una variabile è undefined e in quel caso stampa "variabile non inizializzata" altrimenti stampa il valore della variabile


//dato un numero num e due variabili da a che definiscono un intervallo numerico testare se il numero è compreso nell'intervallo o no. Stampare "compreso" o "escluso" a seconda dei casi

let num = 50;
num%2 === 0 ? console.log("pari") : console.log("dispari");

let variabile;
variabile === undefined ? console.log("variabile non inizializzata") : console.log(variabile);

let a = 1;
let b = 10;
num >= a && num <= b ? console.log("compreso") : console.log("escluso");
// console.log(a <= num <= b ? "Compreso" : "Escluso");