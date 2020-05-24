// Variabili dei Buttons!!!
var buttonGenera = document.getElementById('js_button-genera');
var buttonAnnulla = document.getElementById('js_button-annulla');
// Variabili del form!!!
var formNome = document.getElementById('js_form-nome');
var formKilometri = document.getElementById('js_form-kilometri');
var formEta = document.getElementById('js_form-eta');
//Variabili del ticket stampato!!!
var ticketNome = document.getElementById('js_ticket-nome');
var ticketOfferta = document.getElementById('js_ticket-offerta');
var ticketCosto = document.getElementById('js_ticket-costo');
var ticketCarrozza = document.getElementById('js_ticket-carrozza');
var ticketCodice = document.getElementById('js_ticket-codice');
// Variante per nascondere il Ticket!!!
var hiddenTicket = document.getElementById('js_hidden-ticket');
var hiddenError = document.getElementById('js_hidden-error');

// Eventi dopo il "Click" sul bottone "GENERA"!!!!
buttonGenera.addEventListener('click',
 function() {
  // Validazione Nome e KM inseriti (QUANDO NON INSERISCONO IL NOME O I KILOMETRI CHE DEVONO PERCORRER, VIENE VISSUALIZZATO UN MESSAGGIO DI ERROR)!!!!
  if ((formNome.value == '') || (formNome.value == 'undefined')) {
    alert("Il campo Nome è obbligatorio.");
    hiddenTicket.className = 'hidden';
    hiddenError.className = 'error-wrapper';
  } else if (formKilometri.value == 0) {
    alert("Il campo non puo essere 0.");
    hiddenTicket.className = 'hidden';
    hiddenError.className = 'error-wrapper';
  } else {

    //FAR APPARIRE IL TICKET!!
    hiddenTicket.className = 'ticket-printed';

    // Stampare il nome sul ticket!!
    ticketNome.innerHTML = formNome.value;
    // Stampare numero di Carrozza!!
    ticketCarrozza.innerHTML = '<b>A</b>' + (((Math.random()) * 10) + 1).toFixed(0);
    ticketCodice.innerHTML = '<b>CP</b>' + (((Math.random()) * 1000) + 1).toFixed(0);
    // Stampare il costo del Biglietto e il tipo di Offerta (Tenendo in conto gli sconti)!!!
    ticketCosto.innerHTML = (formKilometri.value * 0.21).toFixed(2) + '<b>Eur</b>';
    ticketOfferta.innerHTML = 'Prezzo Intero';
      // Offerta Minorenne del 20% di sconto e Over65 del 40% di sconto!!
    if (formEta.value == 'minorenne') {
      ticketCosto.innerHTML = ((formKilometri.value * 0.21) * 80 / 100).toFixed(2) + '<b>Eur</b>';
      ticketOfferta.innerHTML = 'Prezzo Minorenne';
    } else if (formEta.value == 'over65') {
      ticketCosto.innerHTML = ((formKilometri.value * 0.21) * 60 / 100).toFixed(2) + '<b>Eur</b>';
      ticketOfferta.innerHTML = 'Prezzo Over65';
    }

  };

 }
);

// Eventi dopo il "Click" sul bottone "ANNULLA"!!!!
buttonAnnulla.addEventListener('click',
 function () {
   // Nascondere Ticket!!!
  hiddenTicket.className = 'ticket-printed hidden';
  hiddenError.className = 'error-wrapper hidden';
  // Reset del form!!!
  formNome.value = '';
  formKilometri.value = '';
  formEta.value = 'maggiorenne';
  // Reset del Ticket!!!
  ticketCarrozza.innerHTML = '';
  ticketCodice.innerHTML = '';
  ticketNome.innerHTML = '';
  ticketCosto.innerHTML = '';
  ticketOfferta.innerHTML = '';
 }
);
