# Calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

## SVOLGIMENTO

- chiedo all'utente il numero dei chilometri che vuole percorrere;

  - SE non inserisce un numero: ERRORE;

- chiedo all'utente la sua età;

  - SE non inserisce un numero: ERRORE;

- definisco il prezzo base del biglietto

- SE (età utente minore di 18)
  applico sconto del 20%

  - ALTRIMENTI SE (età utente maggiore di 65)
    applico sconto del 40%

  - ALTRIMENTI
    applico prezzo base

- stampo prezzo finale con massimo 2 decimali
