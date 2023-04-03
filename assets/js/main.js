let popUpNotesPlus = document.getElementById('popUpNotesPlus');
let popUpNotes = document.getElementById('popUpNotes');
let close = document.getElementById('close');

popUpNotesPlus.addEventListener('click', function(event) {
  event.preventDefault();
  popUpNotes.style.display = 'block';
});

close.addEventListener('click', function() {
    popUpNotes.style.display = 'none';
});