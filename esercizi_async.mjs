// Scrivi una funzione verificaEta(eta) che restituisce una Promise. Dentro un setTimeout di 1500ms: se eta >= 18 risolvi con la stringa "Accesso consentito", altrimenti rifiuta con "Accesso negato: età insufficiente". Poi consumala due volte, una con un'età maggiorenne e una con un'età minorenne, gestendo entrambi i casi con .then(), .catch() e .finally().

function verificaEta(eta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eta >= 18) {
                resolve("Accesso consentito");
            } else {
                reject("Accesso negato: età insufficiente");
            }
        }, 1500);
    });
}

/* console.log(verificaEta(20).then(() => )); */
// Scrivi tre funzioni indipendenti — caricaMeteo(), caricaTraffico(), caricaNotizie() — che restituiscono ciascuna una Promise risolta dopo un tempo diverso (rispettivamente 1000ms, 2000ms, 1500ms) con un valore testuale a tua scelta. Usa Promise.all() per aspettarle tutte e stampare i tre risultati insieme, poi modifica una delle tre funzioni perché fallisca a volte e osserva cosa succede al .catch() finale.

function caricaMeteo() {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve("Meteo caricato");
        }, 1000);
    });

}

function caricaTraffico() {
    return new Promise((resolve, reject) => {
        if (0.6 < 0.5) {
            reject("Errore nel caricamento del traffico");
        }
        setTimeout(() => {
            resolve("Traffico caricato");
        }, 2000);
    });
}

function caricaNotizie() {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve("Notizie caricate");
        }, 1500);
    });
}

Promise.all([caricaMeteo(), caricaTraffico(), caricaNotizie()])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error(error);
    });

// Riscrivi la funzione verificaEta dell'esercizio 1 usando async/await con try/catch/finally al posto di .then()/.catch()/.finally(). Il comportamento finale deve essere identico.
function verificaEta1(eta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eta >= 18) {
                resolve("Accesso consentito");
            } else {
                reject("Accesso negato: età insufficiente");
            }
        }, 1500);
    });
}

async function verificaEtaAsync(eta) {
    setTimeout(() => {
        try {
            if (eta >= 18) {
                console.log("Accesso consentito");
            } else {
                throw "Accesso negato: età insufficiente";
            }
        }
        catch (err) {
            console.log(err);
        }
    }, 1500);
}
verificaEtaAsync(2);

async function verificaEtaAsync1(eta) {
    /*     setTimeout(() => { */
    try {
        if (eta >= 18) {
            return "Accesso consentito";
        } else {
            throw "Accesso negato: età insufficiente";
        }
    }
    catch (err) {
        return err;
    }
    /*     }, 1500); */
}
console.log(await verificaEtaAsync1(2));

/* setTimeout(() => {
            if (eta >= 18) {
                resolve("Accesso consentito");
            } else {
                reject("Accesso negato: età insufficiente");
            }
        }, 1500); */

/* const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (eta >= 18) {
                    resolve("Accesso consentito");
                } else {
                    reject("Accesso negato: età insufficiente");
                }
            }, 1500);
        }); */

// Scrivi una funzione async elaboraOrdine() che, in sequenza, con await: carica un utente (puoi riusare caricaUtente), carica i suoi ordini (caricaOrdini), e calcola e stampa il totale sommando il campo prezzo di ogni ordine (dovrai prima aggiungere un campo prezzo a ciascun ordine restituito da caricaOrdini). Gestisci eventuali errori con un unico try/catch.

// Prendi le tre funzioni indipendenti dell'esercizio 2 (caricaMeteo, caricaTraffico, caricaNotizie) e scrivi una funzione async caricaHomepage() che le richiama tutte e tre in parallelo con await Promise.all(). Poi scrivi una seconda versione, caricaHomepageLenta(), che le richiama una dopo l'altra con tre await in sequenza. Misura e confronta i due tempi di esecuzione con console.time/console.timeEnd.

// Scrivi una funzione contoAllaRovesciaConTimeout(secondi) che stampa i secondi rimanenti uno alla volta usando solo setTimeout annidati (nessun setInterval), fino ad arrivare a 0, poi stampa "Partenza!".

// Scrivi un piccolo simulatore di notifica: dopo 3 secondi da quando viene chiamata, la funzione mostraNotifica(messaggio) deve stampare il messaggio. Deve però essere possibile annullare la notifica prima che compaia, chiamando una seconda funzione annullaNotifica() — usa l'identificatore restituito da setTimeout e clearTimeout.

// Scrivi una funzione barraDiCaricamento() che, ogni 500ms, stampa una percentuale che aumenta di 20 punti alla volta (0%, 20%, 40%...), fino ad arrivare a 100%, momento in cui deve fermarsi da sola e stampare "Caricamento completato".

// Scrivi una funzione monitoraTemperatura() che ogni secondo genera un numero casuale tra 15 e 35 (temperatura simulata) e lo stampa. Se il valore generato supera 30, deve stampare anche un avviso "Attenzione: temperatura elevata". La funzione deve fermarsi automaticamente dopo 10 esecuzioni.

// Scrivi un cronometro (avviaCronometro() e fermaCronometro()) che, una volta avviato, stampa ogni secondo i secondi trascorsi da quando è partito (1, 2, 3...), e continua a farlo finché non viene chiamata esplicitamente fermaCronometro() da un'altra parte del codice — non deve fermarsi da solo.
