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

$(function() {
  $('#definition').click(function() {
    $.ajax({
      url: './GestionModule/Definition.html',
      success: function(data) {
        $('#ContenuGlobal').html(data);
      }
    });
  });
});

$(function() {
  $('#methodeJs').click(function() {
    $.ajax({
      url: './GestionModule/MethodeJS.html',
      success: function(data) {
        $('#ContenuGlobal').html(data);
      }
    });
  });
});