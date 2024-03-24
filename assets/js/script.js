

const cardsArray = [
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
let imagesContainer = document.querySelector('.images-container');
// Selettore thumbnails
let thumbnailsContainer = document.querySelector('.thumbnails-container');

populateCarousel(cardsArray);

//Milestone 1:
//Rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali 
//per popolare dinamicamente il carosello.
//Al click dell'utente sulle frecce verso alto o basso, 
//l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Funzione con FOR EACH per popolare dinamicamente il carosello con le immagini.
function populateCarousel(cardsArray) {
    cardsArray.forEach(function(card) {
        const mainCard = `
            <div class="image">
                <img src="${card.image}">
                <div class="content">
                    <h2>${card.title}</h2>
                    <p>${card.text}</p>
                </div>
            </div>`;
        imagesContainer.innerHTML += mainCard;

        const thumbnails = `   
            <div class="thumbnail">
                <img src="${card.image}">
            </div>`;
        thumbnailsContainer.innerHTML += thumbnails;
    });
}

    let currentImageActive = 0;
    //seleziono tutte le immagini adesso con class .image
    const allImages = document.querySelectorAll('.image')
    //alla lista di array nodi delle immagini, seleziono la prima e aggiungo la classe
    //con display block per attivarla
    allImages[currentImageActive].classList.add('active');

    //stessa cosa fatta per card principale ripeto per thumbnails
    const allThumbnails = document.querySelectorAll('.thumbnail')
    allThumbnails[currentImageActive].classList.add('active');


    //Milestone 2:
    //Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'
    //utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa 
    //per l'ultima miniatura se l'utente clicca la freccia verso il basso.


  // Selettore arrow prev
  const arrowPrevious = document.querySelector('.arrow.previous');
  arrowPrevious.addEventListener('click', function() {
      let imageActive = document.querySelector('.image.active');
      imageActive.classList.remove('active');
      //cambio immagine corrente al click (-1)
      currentImageActive -= 1;
      //e aggiungo condizione in cui ogni volta che l'immagine corrente è -1 
      // viene riportata all'ultima immagine nell'array, creando effetto di loop nel carosello.
      if (currentImageActive < 0) {
          currentImageActive = allImages.length - 1; 
      }
      allImages[currentImageActive].classList.add('active');
  });

  // Selettore arrow next - ripeto stesse operazioni del tasto previous (ma al contrario)
const arrowNext = document.querySelector('.arrow.next');
arrowNext.addEventListener('click', function() {
    let imageActive = document.querySelector('.image.active');
    imageActive.classList.remove('active');
    currentImageActive += 1;
    if (currentImageActive >= allImages.length) {
        currentImageActive = 0; 
    }
    allImages[currentImageActive].classList.add('active');
});


