// Cacher les éléments qui vont apparaitre plus tard 

window.onload = function() {
    //Cacher la section du QRcode
    document.querySelector('.qrBox').style.display = 'none';

    // Cacher le bouton gris de la file d'attente
    document.querySelector('.bfa2').style.display = 'none';
};






function openmenu() {
    alert("Ouverture du menu en construction");
    
}

function seemore() {
    alert("Nous sommes ravi de vous présenter notre nouveau projet visant à permettre aux lycéens et aux équipes de l'établissement Louis Lachenal de gagner du temps et de profiter pleinement de la pause déjeuner. Grâce à ce site, vous pourrez attendre votre tour de passage du self directement sur votre smartphone au lieu de faire la queue devant l'entrée. Il est donc possible de faire autre chose ailleurs au lycée pendant que vous attendez avant de manger. Il suffira de montrer le QR code créé spécifiquement pour vous à l'entrée du self pour valider le fait que vous avez fait la queue. N'est-ce pas génial ?");

}

function joinqueue() {
    //Afficher la section du QRcode
    document.querySelector('.qrBox').style.display = 'flex';

    // Cacher le bouton vert de la file d'attente
    document.querySelector('.bfa1').style.display = 'none';

    // Afficher le bouton gris de la file d'attente
    document.querySelector('.bfa2').style.display = 'flex';

    // Changer le texte des personnes en attente
    document.getElementById('numPeopleWaiting').innerHTML = 'personnes devant';

     // Changer le texte des personnes en attente
     document.getElementById('numWaitingTime').innerHTML = 'Temps restant en minute';
}

function openqr() {
    alert("Vous ne pouvez pas encore l'ouvrir");
}

function ratemenu() {
    alert("Vous ne pouvez pas encore donner votre avis");
}