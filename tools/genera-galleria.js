// Elenca le foto presenti in images/gallery/ e le scrive in images/gallery.json.
// Netlify lo esegue a ogni pubblicazione (vedi netlify.toml): per aggiungere o
// togliere una foto dalla galleria della home basta metterla o levarla da quella
// cartella, con il nome che si vuole.
//
// L'ordine e' quello del nome, con i numeri letti come numeri (foto-9 viene prima
// di foto-10). Per decidere l'ordine conviene numerarle: 01, 02, 03...
//
// Volutamente senza librerie esterne e senza Intl: deve funzionare su qualsiasi
// versione di Node presente sull'ambiente di build.
var fs = require('fs');

var CARTELLA = 'images/gallery';
var DESTINAZIONE = 'images/gallery.json';
var IMMAGINI = /\.(jpe?g|png|webp|avif)$/i;

var file = [];
try {
  file = fs.readdirSync(CARTELLA).filter(function (f) {
    return IMMAGINI.test(f) && f.charAt(0) !== '.';
  });
} catch (errore) {
  console.warn('[galleria] cartella ' + CARTELLA + ' non trovata: elenco vuoto.');
}

// Ordinamento naturale: i gruppi di cifre vengono riempiti di zeri prima del confronto.
function chiave(nome) {
  return nome.toLowerCase().replace(/\d+/g, function (n) {
    return ('0000000000' + n).slice(-10);
  });
}
file.sort(function (a, b) {
  var ka = chiave(a), kb = chiave(b);
  return ka < kb ? -1 : ka > kb ? 1 : 0;
});

var elenco = file.map(function (f) { return CARTELLA + '/' + f; });
fs.writeFileSync(DESTINAZIONE, JSON.stringify(elenco, null, 2) + '\n');
console.log('[galleria] ' + elenco.length + ' foto elencate in ' + DESTINAZIONE);
