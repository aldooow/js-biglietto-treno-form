var buttonGenera = document.getElementById('button-genera');
var buttonAnnulla = document.getElementById('button-annulla');

// Dati del Form - Da compilare dal Utente!!!!
var formNomeCognome = document.getElementById('form-nome-cognome');
var formKilometri = document.getElementById('form-kilometri');
var formFasciaEta = document.getElementById('form-fascia-eta');


// Dati del Biglietto Compilato!!!
var biglNomeCognome = document.getElementById('bigl-nome-cognome');
var biglCostoBiglietto = document.getElementById('bigl-costo-biglietto');
var biglOfferta = document.getElementById('bigl-offerta');
var biglCarrozza = document.getElementById('bigl-carrozza');
var biglCodiceCp = document.getElementById('bigl-codice-cp');

var finestraVisible = document.getElementById('biglietto');



// Click-Genera!!!
buttonGenera.addEventListener('click',
  function () {
    // Far apparire il Biglietto quando si fa click in "Genera"!!!!
    finestraVisible.className = 'visible';
    // Nome stampato sul Biglietto!!!
    biglNomeCognome.innerHTML = formNomeCognome.value;
    // Offerta stampata sul Biglietto!!!
    biglOfferta.innerHTML = 'Prezzo Intero';
    // Numero di Carrozza stampata sul Biglietto!!!!
    biglCarrozza.innerHTML = ((Math.random()) * 100).toFixed(0);
    // Codice CP (6 cifre) stampato sul Biglietto!!!
    biglCodiceCp.innerHTML = ((Math.random()) * 1000000).toFixed(0);
    // Costo stampato sul Biglietto!!!
    biglCostoBiglietto.innerHTML = '€' + (0.21 * formKilometri.value).toFixed(2);

    if (formFasciaEta.value == 'Minorenne') {
      // Sconto Minorenne!!
      biglCostoBiglietto.innerHTML = '€' + (0.21 * formKilometri.value * 80 / 100).toFixed(2);
      biglOfferta.innerHTML = 'Prezzo Ridotto Minorenne';
    } else if (formFasciaEta.value == 'Over 65'){
      // Sconto Over65!!
      biglCostoBiglietto.innerHTML = '€' + (0.21 * formKilometri.value * 60 / 100).toFixed(2);
      biglOfferta.innerHTML = 'Prezzo Ridotto Over 65'
    }
  }
);

// Click-Annulla!!!
buttonAnnulla.addEventListener('click',
  function () {

    // Far Nascondere il Biglietto quando si fa click in "Annulla"!!!!
    finestraVisible.className = 'hidden';

    formNomeCognome.value = '';
    formKilometri.value = '';
    formFasciaEta.value = 'Maggiorenne';

    biglNomeCognome.innerHTML = '';
    biglOfferta.innerHTML = '';
    biglCarrozza.innerHTML = '';
    biglCodiceCp.innerHTML = '';
    biglCostoBiglietto.innerHTML = '';
  }
)
