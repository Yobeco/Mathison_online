  var lecteurAudio = document.getElementById('lecteurAudio');

  function stopAudio() {
    lecteurAudio.pause(); // Arrête la lecture
    lecteurAudio.currentTime = 0; // Rembobine au début
    // Changer la source de l'image
    document.getElementById('picture').src = 'Medias/LogoMathison.png';
  }

function moveFocusToDiv() {
    // Obtenez la référence de votre division
    var divFocus = document.getElementById('picture');
    // Envoyez le focus vers la division
    divFocus.focus();
}

  document.addEventListener('keydown', function(event) {

	moveFocusToDiv(); // Déplace le focus vers la division avant de traiter les touches

    // Vérifiez quelle touche a été enfoncée (par exemple, touche 'a' pour cet exemple)
    if (event.key === 'ArrowUp') {
        // Changer la source de l'image
        document.getElementById('picture').src = 'Medias/Up-Y.png';
    }

    if (event.key === 'ArrowDown') {
        // Changer la source de l'image
        document.getElementById('picture').src = 'Medias/Down-Y.png';
    }

    if (event.key === 'ArrowLeft') {
        // Changer la source de l'image
        document.getElementById('picture').src = 'Medias/Left-Y.png';
    }

    if (event.key === 'ArrowRight') {
        // Changer la source de l'image
        document.getElementById('picture').src = 'Medias/Right-Y.png';
    }

});