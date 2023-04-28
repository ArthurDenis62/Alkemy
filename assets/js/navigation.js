$(function() {
  $('#carteMental').click(function() {
    $.ajax({
      url: './GestionModule/CarteMental.html',
      success: function(data) {
        $('#ContenuGlobal').html(data);
      }
    });
  });
});