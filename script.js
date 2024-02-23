var container2 = document.getElementById('IdContainer2');
var SuperBouton = document.getElementById('IdSuperBouton');

// Définissez l'état initial
var isDarkMode = false;

// Fonction pour basculer entre les modes
function bascule() {
    container2.classList.toggle('hidden');
    document.body.style.backgroundColor = isDarkMode ? '#fff' : '#333';
    isDarkMode = !isDarkMode;
}

SuperBouton.addEventListener('click', bascule);







      // Fonction pour définir un cookie sans date d'expiration
      function setCookie(name, value) {
        document.cookie = name + "=" + value + "; path=/";
    }

    // Fonction pour obtenir la valeur d'un cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];

            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1, cookie.length);
            }

            if (cookie.indexOf(nameEQ) == 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }

        return null;
    }

    var container2 = document.getElementById('IdContainer2');
    var SuperBouton = document.getElementById('IdSuperBouton');

    // Obtenez l'état initial à partir du cookie
    var isDarkMode = getCookie("isDarkMode") === "true";

    // Appliquez l'état initial
    container2.classList.toggle('hidden', isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';

    // Fonction pour basculer entre les modes
    function bascule() {
        isDarkMode = !isDarkMode;

        // Appliquez l'état actuel au cookie sans date d'expiration
        setCookie("isDarkMode", isDarkMode.toString());

        // Appliquez l'état actuel aux styles
        container2.classList.toggle('hidden', isDarkMode);
        document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
    }

    SuperBouton.addEventListener('click', bascule);






    // Fonction pour définir un cookie sans date d'expiration
function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

// Exemple pour créer un cookie "modeSombre" avec la valeur "activé"
setCookie("modeSombre", "activé");
