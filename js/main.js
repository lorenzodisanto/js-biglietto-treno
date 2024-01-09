const resultPrice = document.getElementById("price");
console.log(resultPrice);

// chiedo all'utente il numero dei chilometri che vuole percorrere
const userDistance = parseInt(
  prompt("Inserisci i chilometri che vuoi percorrere")
);
console.log(userDistance);

if (isNaN(userDistance)) {
  alert("I dati inseriti non sono corretti");
}

// chiedo all'utente la sua età
const userAge = parseInt(prompt("Inserisci la tua età"));
console.log(userAge);
if (isNaN(userAge)) {
  alert("I dati inseriti non sono corretti");
}

// definisco prezzo base del biglietto e sconti
const ticketPrice = userDistance * 0.21;
console.log(ticketPrice);
const youngSale = ticketPrice * 0.2;
const seniorSale = ticketPrice * 0.4;

if (userAge < 18) {
  const youngPrice = ticketPrice - youngSale;
  const youngPricePrint = youngPrice.toFixed(2);
  console.log(youngPrice);
  resultPrice.innerText = "Prezzo finale: " + youngPricePrint + " €";
} else if (userAge > 65) {
  const seniorPrice = ticketPrice - seniorSale;
  const seniorPricePrint = seniorPrice.toFixed(2);
  console.log(seniorPrice);
  resultPrice.innerText = "Prezzo finale: " + seniorPricePrint + " €";
} else {
  const ticketPricePrint = ticketPrice.toFixed(2);
  console.log(ticketPrice);
  resultPrice.innerText = "Prezzo finale: " + ticketPricePrint + " €";
}
