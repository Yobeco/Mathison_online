const lecteurAudio = document.getElementById('lecteurAudio');
const lecteurSon = document.getElementById('lecteurSon');


function stopAudio() {
    lecteurAudio.pause(); // Arrête la lecture
    lecteurAudio.currentTime = 0; // Rembobine au début
    // Changer la source de l'image
    document.getElementById('picture').src = 'Medias/LogoMathison.png';
}


function leaveFocus(){
    // Empêcher l'événement par défaut (le focus du lecteur audio)
    event.preventDefault();
    // Déplacez le focus vers le conteneur d'images
    document.getElementById('pictureContainer').focus();
    lecteurAudio.blur();
    console.log("Focus vers image");
}

// Dès que le lecteur prend le focus, il perd le focus : la priorité est que l'image est le focus
lecteurAudio.addEventListener('focus', function() {
    leaveFocus();
});

// Variable "flag" pour le changement de la couleur des flèches
let color = true


document.addEventListener('keydown', function(event) {

    // Vérifiez quelle touche a été enfoncée (par exemple, touche 'a' pour cet exemple)
    if (event.key === 'ArrowUp') {
        lecteurSon.play();

        // Changer la source de l'image
        if (color == true){
            document.getElementById('picture').src = 'Medias/Up-Y.png';
        }
        else {
            document.getElementById('picture').src = 'Medias/Up-B.png';
        }

        color = !color
    }

    if (event.key === 'ArrowDown') {
        lecteurSon.play();

        // Changer la source de l'image
        if (color == true){
            document.getElementById('picture').src = 'Medias/Down-Y.png';
        }
        else {
            document.getElementById('picture').src = 'Medias/Down-B.png';
        }

        color = !color
    }

    if (event.key === 'ArrowLeft') {
        lecteurSon.play();

        // Changer la source de l'image
        if (color == true){
            document.getElementById('picture').src = 'Medias/Left-Y.png';
        }
        else {
            document.getElementById('picture').src = 'Medias/Left-B.png';
        }
        color = !color
    }

    if (event.key === 'ArrowRight') {
        lecteurSon.play();

        // Changer la source de l'image
        if (color == true){
            document.getElementById('picture').src = 'Medias/Right-Y.png';
        }
        else {
            document.getElementById('picture').src = 'Medias/Right-B.png';
        }
        color = !color
    }

});