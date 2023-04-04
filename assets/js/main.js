
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