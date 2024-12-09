// ESERCIZIO 1
// Scrivi una funzione filterByLength che accetta un array di stringhe e un numero minimo di caratteri. Restituisci un nuovo array contenente solo le stringhe con una lunghezza maggiore o uguale al numero dato.

function filterByLength(words, minLength) {
    //si poteva usare filter cosi' return strings.filter(str => str.length >= minLength);
    //Words e' un array di stringhe
    //n  e' numero che indica numero minimo di caratteri
    const result = []
    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];
        if (currentWord.length >= minLength) {
            result.push(currentWord);
        }
    }
    return result;
}

// ESERCIZIO 2
// Calcolo la somma dei primi 10 numeri.
function sum(number) {
    //number e' un array di numeri
    let result = 0;
    for (let i = 0; i<number.length; i++){
        result += number[i] 
    }
    return result;
}
// Calcolo la media dei primi 10 numeri.
function avg(number) {
    //number e' un array di numeri
    let result = 0;
    let sum = 0;
    for (let i = 0; i<number.length; i++){
        sum += number[i] 
        result = sum/number.length
    }
    return result;
}


// ESERCIZIO 3
// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una  lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

//Math.random(): genera un numero casuale compreso tra 0 (inclusivo) e 1 (esclusivo).

//Math.random() * array.length: Moltiplica il numero casuale generato per la lunghezza dell'array. Questo risultato sarà un numero decimale compreso tra 0 e la lunghezza dell'array (esclusa).

//array[Math.floor(Math.random() * array.length)]: Utilizza l'indice ottenuto per accedere a un elemento dell'array. Poiché l'indice è un numero intero, viene selezionato un elemento valido dell'array in modo casuale.

function getRandomElement(array) {
    const randomNumber = Math.random();
    return array[Math.floor(randomNumber * array.length)];
}

function generateGuestList(names, surnames, numberOfGuests){
    const guestList = [];
    for(let i =0; i<numberOfGuests; i++){
        const name = getRandomElement(names);
        const surname = getRandomElement(surnames);
        guestList.push(`${name} ${surname}`);
    }
    return guestList;
}


// ESERCIZIO 4
// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

    // i+=2 e i=1 perche' il primo indice dispari e' 1 e quelli successivi si hanno ogni 2 posiszioni.
function sumOddPositions(numbers){
   //si puo scrivere sumOddPositions += numbers[i];
    let result = 0;
    for(let i=1; i<numbers.length; i+=2){
        result +=numbers[i]
    }
    return result;
} 


// ESERCIZIO 5
// Scrivi una funzione getNames che accetta un array di oggetti con proprietà name e age, e restituisce un array contenente solo i nomi delle persone maggiorenni (età ≥ 18).

function getNames(people){
    const adult = [];
    for(let i = 0; i<people.length; i++) {
        if(people[i].age >=18 ){
            adult.push(people[i].name)
        }
    }
    return adult;
}

//Output

//ESERCIZIO 1:
const words = ["apple", "cat", "banana", "dog"]
const minLength = 4;
const result = filterByLength(words, minLength)
console.log("Il risultato del primo esercizio e':",result);

//ESERCIZIO 2:
const number = [1,2,3,4,5,6,7,8,9,10];
const somma =  sum(number);
const media = avg(number);
console.log("Il risultato della somma e media sono:",somma,media);

//ESERCIZIO 3:
const names = ["Mario", "Luigi", "Giulia", "Sofia", "Francesco"]; 
const surnames = ["Rossi", "Verdi", "Bianchi", "Neri", "Gialli"];
const numberOfGuests =3;// definito dall'esercizio 3 invitati
const guestList = generateGuestList(names, surnames, numberOfGuests);
console.log("La lista di invitati casuali e':",guestList);

//ESERCIZIO 4:
const numbers =[1,2,3,4,5,6,7,8,9,10];
const sommaDispari = sumOddPositions(numbers);
console.log("La somma degli indici dispari e':",sommaDispari);

//ESERCIZIO 5:
const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 15 },
    { name: "David", age: 21 }
  ];

  const adulti = getNames(people);
  console.log("Le persone maggiorenni sono:",adulti);