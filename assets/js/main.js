
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
// verifico se è presente nelle lista il nominativo.
//se è presente fornisco messaggio ok.
// se non è presente fornisco messaggio di ko
//aggiungere variabile sentinella
//stampo messaggio.


const usermail = prompt("inserisci la tua mail")
console.log(usermail)

const names = [ "marco", "luigi", "nicola", "alex"]

const message_ok = "ok abilitato"
console.log(message_ok)

const message_ko = "ko non abilitato"
console.log(message_ko)

for(let i = 0; i < names.length; ++i){
    console.log(names[i])
    const name = names[i]

    if(name == usermail){
        message_ok
    }   
}
        
    

    


