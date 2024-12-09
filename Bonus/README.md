### ESERCIZZI Bonus:

// ESERCIZIO 1
// Scrivi una funzione filterByLength che accetta un array di stringhe e un numero minimo di caratteri. Restituisci un nuovo array contenente solo le stringhe con una lunghezza maggiore o uguale al numero dato.
// 
// Esempio di invocazione della funzione: 
const words = ["apple", "cat", "banana", "dog"]
filterByLength(words, 4); 


// ESERCIZIO 2
// Calcola la somma e la media dei primi 10 numeri.

// ESERCIZIO 3
// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una lista di cognomi, 
//Gatsby vuole generare una falsa lista di 3 invitati.

// ESERCIZIO 4
// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

// ESERCIZIO 5
// Scrivi una funzione getNames che accetta un array di oggetti con proprietà name e age, e restituisce un array contenente solo i nomi delle persone maggiorenni (età ≥ 18).

### Dati

ESERCIZIO 1:
Array di stringhe e n (numero minimo di caratteri )

ESERCIZIO 2:
I primi 10 numeri

ESERCIZIO 3:
Array di nomi (names) e Array di cognomi (surnames)

ESERCIZIO 4:
Array di numeri interi

### Esecuzione logica

ESERCIZIO 1: 
-Definizione della funzione filterByLength const filterByLength = (Array[string], n) =>{.....}
-Creiamo un array vuoto result
-Iteriamo attraverso l'array words utilizzando un ciclo for.
-Verifichiamo se la lunghezza della stringa corrente (words[i].length) è maggiore o uguale a minLength.
-Se la condizione è soddisfatta, aggiungiamo la stringa corrente all'array result utilizzando result.push(strings[i]).
-Alla fine del ciclo, restituiamo l'array result che contiene solo le stringhe che soddisfano la condizione di lunghezza.

ESERCIZIO 2:
-Definizione delle funzioni SUM e AVG che hanno in ingresso number un array di numeri.(in questo caso da 1 a 10 )
-definiamo una costante result
-Iteriamo attraverso l'array number utilizzando un ciclo for.
-ad ogni elemento facciamo la somma e la salviamo su result(nel caso di SUM) o facciamo la somma e divido per la lunghezza di number e l salviamo su result (AVG)
-restituiamo result.

ESERCIZIO 3:
-Definizione della funzione getRandomElement che prende un Array come input e ritorna un elemento casuale dell'Array
=> utilizzo Math.random() e Math.floor().

-Definizione della funzione generateGuestList che prende tre argomenti cioe' lista di nomi , lista di cognomi e numero di invitati da generare.
=> utilizzo ciclo for per generare il numero specificato di invitati.
=> combino casualmente nomi e cognomi utilizzando getRandomElement e li aggiungo alla lista invitati

ESERCIZIO 4:
-Definisco la funzione sumOddPositions che somma le posizioni dipari:  => 
-definiamo una variabile result, 
-Iteriamo attraverso l'array di interi "numbers"  utilizzando un ciclo for, con i =1 , i<numbers.length , i+=2 ;
-ad ogni elemento facciamo la somma e la salviamo su result;
-restituiamo result.

ESERCIZIO 5:
-Definisco la funzione getNames che  da una un array di People in ingresso avremo in uscita i nomi di quelli maggiorenni =>
-definiamo array (dove salveremo i nomi dei maggiorenni);
-Iteriamo attraverso l'array di perone "people";
-Se l'iesima persona ha age>=18 allora puscio il suo nome  dentro adult.
-fuori dal ciclo for restiruisco l'array adult.   


### Output

ESERCIZIO 1:
output prevista: ["apple", "banana",]

ESERCIZIO 2:
output prevista: (sum)55 , (avg)5,5

ESERCIZIO 3:
output (3 invitati casuali):
[ 'Luigi Neri', 'Luigi Rossi', 'Mario Bianchi' ]

ESERCIZIO 4:
output prevista: (sumOddPositions) 30;

ESERCIZIO 5:
Output prevista: ["Bob", "David"]