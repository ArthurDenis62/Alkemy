let popUpNotesPlus = document.getElementById('popUpNotesPlus');
let popUpNotes = document.getElementById('popUpNotes');
let closeNotes = document.getElementById('closeNotes');

popUpNotesPlus.addEventListener('click', function(event) {
  event.preventDefault();
  popUpNotes.style.display = 'block';
});

closeNotes.addEventListener('click', function() {
    popUpNotes.style.display = 'none';
});

const nomInput = document.getElementById("nom");
const messageTextarea = document.getElementById("message");
const validerBtn = document.getElementById("valider");
const tableau = document.getElementById("tableau").getElementsByTagName('tbody')[0];

// Récupérer les données du localStorage et les ajouter dans le tableau au chargement de la page
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key.startsWith("nom_")) {
    const nom = localStorage.getItem(key);
    const message = localStorage.getItem(`message_${key.substring(4)}`);
    ajouterLigne(nom, message);
  }
}

validerBtn.addEventListener("click", () => {
  const nom = nomInput.value;
  const message = messageTextarea.value;

  // Ajouter une nouvelle ligne au tableau et stocker les données dans le localStorage
  ajouterLigne(nom, message);
  localStorage.setItem(`nom_${Date.now()}`, nom);
  localStorage.setItem(`message_${Date.now()}`, message);

  // Effacer les champs du formulaire après validation
  nomInput.value = '';
  messageTextarea.value = '';
});

function ajouterLigne(nom, message) {
  // Ajouter une nouvelle ligne au tableau
  const nouvelleLigne = tableau.insertRow(-1);

  // Insérer une cellule pour le nom dans la nouvelle ligne
  const celluleNom = nouvelleLigne.insertCell(0);
  celluleNom.innerHTML = nom;

  // Insérer une cellule pour le message dans la nouvelle ligne
  const celluleMessage = nouvelleLigne.insertCell(1);
  celluleMessage.innerHTML = message;
}

let popUpTachesPlus = document.getElementById('popUpTachesPlus');
let popUpTaches = document.getElementById('popUpTaches');
let closeTaches = document.getElementById('closeTaches');

popUpTachesPlus.addEventListener('click', function(event) {
  event.preventDefault();
  popUpTaches.style.display = 'block';
});

closeTaches.addEventListener('click', function() {
  popUpTaches.style.display = 'none';
});