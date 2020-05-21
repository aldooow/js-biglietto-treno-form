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

// Click-Genera!!!
buttonGenera.addEventListener('click',
  function () {
    biglNomeCognome.innerHTML = formNomeCognome.value;
    biglOfferta.innerHTML = 'Prezzo Intero'
    biglCarrozza.innerHTML = ((Math.random()) * 100).toFixed(0);
    biglCodiceCp.innerHTML = ((Math.random()) * 1000000).toFixed(0);
    biglCostoBiglietto.innerHTML = 0.21 * formKilometri.value;
    if (formFasciaEta.value == 'Minorenne') {
      biglCostoBiglietto.innerHTML = 0.21 * formKilometri.value * 80 / 100;
      biglOfferta.innerHTML = 'Prezzo Ridotto Minorenne';
    } else if (formFasciaEta.value == 'Over 65'){
      biglCostoBiglietto.innerHTML = 0.21 * formKilometri.value * 60 / 100;
      biglOfferta.innerHTML = 'Prezzo Ridotto Over 65'
    }


  }
);

// Click-Annulla!!!
buttonAnnulla.addEventListener('click',
  function () {
    biglNomeCognome.innerHTML = '';
    formNomeCognome.value = '';

    biglCostoBiglietto.innerHTML = '';
    formKilometri.value = '';

    formFasciaEta.value = 'Maggiorenne';



  }
)
