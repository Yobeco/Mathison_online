//      Mathison 0.2
//  Objectifs de cette version : 
//  Ajouter du pavet numérique et de la barre espace


// Ne lancer le script que quand toute la page est chargée
document.addEventListener('DOMContentLoaded', function() {

    const lecteurAudio = document.getElementById('lecteurAudio');
    const lecteurSon = document.getElementById('lecteurSon');
    const boutonStop = document.getElementById('stopButton');

    // Ajouter une fonction qui sera lancée quand on clique sur le bouton "stopButton"
    boutonStop.onclick = function() {
      stopAudio();
    };

    // Fonction qui arrête la musique et affiche l'image d'accueil
    function stopAudio() {
        lecteurAudio.pause(); // Arrête la lecture
        lecteurAudio.currentTime = 0; // Rembobine au début
        // Changer la source de l'image
        document.getElementById('picture').src = 'Medias/LogoMathison.png';
        document.getElementById('pictureContainer').focus();
    }

    // Mettre le focus ailleur que sur le lecteur, sinon, appuyer sur les flèches affectent la lecture
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


    /**
    Codes pour les touches du pavé numérique :
        NumLock : 144
        / (Division) : 111
        * (Multiplication) : 106
        - (Soustraction) : 109
        + (Addition) : 107
        Enter (Entrée du pavé numérique) : 108 ou 13 (varie selon les navigateurs)
        . (Point décimal) : 110
        0 à 9 : 96 à 105

        Site donnant tous les codes pour la méthode "event.keyCode"
        https://www.toptal.com/developers/keycode
    **/

    //////////////////////////////////////////////////////////
    //   Définition des fonctions lancées par les touches   //
    //////////////////////////////////////////////////////////

    // À étudier pour simplifier le code :
    // let dictKey = {
    //   "ArrowUp" : [104,"Up-Y","Up-B"],
    //   "ArrowDown" : [98,"Down-Y","Down-B"]
    // };

    function ArrowUpFunc(){
        lecteurSon.play();     // Jouer un charleston

        // Changer la source de l'image selon la variable "color"
        if (color == true){
            document.getElementById('picture').src = 'Medias/Up-Y.png';
        }
        else {
            document.getElementById('picture').src = 'Medias/Up-B.png';
        }

        color = !color
    }

    function ArrowDownFunc(){
        lecteurSon.play();

        if (color == true){
            document.getElementById('picture').src = 'Medias/Down-Y.png';
        }
        else {
            document.getElementById('picture').src = 'Medias/Down-B.png';
        }

        color = !color
    }

    function ArrowLeftFunc(){
        lecteurSon.play();

        if (color == true){
            document.getElementById('picture').src = 'Medias/Left-Y.png';
        }
        else {
            document.getElementById('picture').src = 'Medias/Left-B.png';
        }
        color = !color
    }

    function ArrowRightFunc(){
            lecteurSon.play();

            if (color == true){
                document.getElementById('picture').src = 'Medias/Right-Y.png';
            }
            else {
                document.getElementById('picture').src = 'Medias/Right-B.png';
            }
            color = !color
    }



    document.addEventListener('keydown', function(event) {


        if (event.key === 'ArrowUp' || event.keyCode === 104) {      // Flèche du haut / 8 du pavet numérique
            ArrowUpFunc();
        }

        if (event.key === 'ArrowDown' || event.keyCode === 98) {      // Flèche du bas / 2 du pavet numérique
            ArrowDownFunc();
        }

        if (event.key === 'ArrowLeft' || event.keyCode === 102) {      // Flèche de gauche / 4 du pavet numérique
            ArrowLeftFunc();
        }

        if (event.key === 'ArrowRight' || event.keyCode === 100) {      // Flèche de droite / 6 du pavet numérique
            ArrowRightFunc();
        }


        if (event.code === 'Space' || event.keyCode === 32) {      // Touche espace pour jouer / mettre en pause

            if (lecteurAudio.paused) {
              lecteurAudio.play(); // Arrête la lecture
            } else if (lecteurAudio.play) {
              lecteurAudio.pause(); // Arrête la lecture
            }

        }


    });

    // Mise en place des "écouteurs" sur les flèches du pavet virtuel pour écran tactil
    // Lague énormément...  À améliorer ou à enlenver...

    const KeyPadUp = document.getElementById('keyPadUp')

    KeyPadUp.addEventListener('click', function() {
        ArrowUpFunc();
    });

    const KeyPadDown = document.getElementById('keyPadDown')

    KeyPadDown.addEventListener('click', function() {
        ArrowDownFunc();
    });

    const KeyPadLeft = document.getElementById('keyPadLeft')

    KeyPadLeft.addEventListener('click', function() {
        ArrowLeftFunc();
    });

    const KeyPadRight = document.getElementById('keyPadRight')

    KeyPadRight.addEventListener('click', function() {
        ArrowRightFunc();
    });

});