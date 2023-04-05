/* Chiedere numero di km che si vuole percorrere e l'età.
Calcolare il prezzo totale del viaggio:
prezzo biglietto (0,21€ al km) {0,21 * n/km}
SE età < 18 sconto del 20%
SE età >= 18  &&  età < 65 no sconto
SE età >= 65 sconto del 40%
Output con due decimali. */




// VARIABILI
const km = parseInt(prompt(`Inserisi il numero di KM che devi percorrere:`));
const age = parseInt(prompt(`Inserisci la tua Età:`));

console.log(km);
console.log(age);
document.getElementById(`n_Km`).innerHTML = (` ` + km + ` ` + `km`);
document.getElementById(`n_Age`).innerHTML = (` ` + age + ` ` + `anni`);


// CALCOLO BIGLIETTO
// calcolo prezzo per KM
let ticket = 0.21 * km;
console.log(ticket);
document.getElementById(`Ticket`).innerHTML = (` ` + ticket.toFixed(2) + `€`);

// controllo sconto
if (age < 18) {
    console.log(`minorenne`);
    const totale = (ticket - (ticket * 20 / 100));
    console.log(totale);
    document.writeln(`<h1>` + `Prezzo scontato:` + ` ` + totale.toFixed(2) + `€` + `</h1>`);
} else if (age >= 18 && age < 65) {
    console.log(`adulto`);
} else {
    console.log(`anziano`);
    const totale = (ticket - (ticket * 40 / 100));
    console.log(totale);
    document.writeln(`<h1>` + `Prezzo scontato:` + ` ` + totale.toFixed(2) + `€` + `</h1>`);
}