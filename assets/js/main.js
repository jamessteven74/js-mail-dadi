
//Mail

/*Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
*/


//Gioco dei dadi.

/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? 
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

//chiedo all'utente la sua mail tramite un propmt.
//creo una lista di utenti/nomi
//stampo messaggio.


const usermail = prompt("inserisci la tua mail")
console.log(usermail)

const names = [ "marco", "luigi", "nicola", "alex"]
console.log(names)

const messageok = ("ok abilitato")
console.log(messageok)

const messageko = ("ko non abilitato")

console.log(messageok)
    
    if(usermail === names){
        messageok
    }else (usermail != names)
            messageko