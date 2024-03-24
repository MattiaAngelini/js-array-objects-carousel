
//Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
//Creare un carosello come nella foto allegata.

//Milestone 0:
//Creazione del markup statico:
// costruiamo il container e inseriamo l'immagine grande 
//in modo da poter stilare lo slider.

//Milestone 1:
//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
//Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

//Milestone 2:
//Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura 
//se l'utente clicca la freccia verso il basso.

const images = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// Selettore container principale
const imagesContainer = document.querySelector('.images-container');
// Selettore thumbnails
const thumbnailsContainer = document.querySelector('.thumbnails-container');
// Selettore arrow prev
const arrowPrevious = document.querySelector('.arrow.previous');
// Selettore arrow next
const arrowNext = document.querySelector('.arrow.next');

//indice immagini visualizzate,valore 0 che indica che inizialmente la prima immagine sarà visualizzata.
let currentImageIndex = 0;



//********** FUNCTIONS ***************/

// Funzione con FOR EACH per popolare dinamicamente il carosello con le immagini.

// function populateCarousel() {
//     //Per ogni immagine nell'array creo elemento div per l'immagine.
//     images.forEach((img, index) => {
//         const imageDiv = document.createElement('div');
//         imageDiv.classList.add('image');
//         if (index === currentImageIndex) {
//             imageDiv.classList.add('active');
//         }
//         //Creo elemento img da inserire nel div con all'interno immagine iterata dal ciclo.
//         const imgElement = document.createElement('img');
//         imgElement.src = img.image;
//         imageDiv.appendChild(imgElement);
//         imagesContainer.appendChild(imageDiv);
        
//         // Creiamo un elemento div per immagini in miniatura e gli assegniamo la classe 'thumbnail' (struttura miniatura nel css)
//         const thumbnailDiv = document.createElement('div');
//         thumbnailDiv.classList.add('thumbnail');
//         thumbnailDiv.innerHTML = `<img class="img-fluid" src="${img.image}">`;
//         thumbnailsContainer.appendChild(thumbnailDiv);
        
//     });
// }


