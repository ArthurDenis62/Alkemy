$(function() {
    $('#accueil').click(function() {
      $.ajax({
        url: 'Accueil.html',
        success: function(data) {
          $('#ContenuGlobal').html(data);
        }
      });
    });
  });

  $(function() {
    $('#boiteReception').click(function() {
      $.ajax({
        url: 'BoiteReception.html',
        success: function(data) {
          $('#ContenuGlobal').html(data);
        }
      });
    });
  });

  $(function() {
    $('#gestion').click(function() {
      $.ajax({
        url: 'Gestion.html',
        success: function(data) {
          $('#ContenuGlobal').html(data);
        }
      });
    });
  });

  $(function() {
    $('#projets').click(function() {
      $.ajax({
        url: 'Projets.html',
        success: function(data) {
          $('#ContenuGlobal').html(data);
        }
      });
    });
  });

  $(function() {
    $('#seConnecter').click(function() {
      $.ajax({
        url: 'seConnecter.html',
        success: function(data) {
          $('#ContenuGlobal').html(data);
        }
      });
    });
  });

  $(function() {
    $('#comptes').click(function() {
      $.ajax({
        url: 'Comptes.html',
        success: function(data) {
          $('#ContenuGlobal').html(data);
        }
      });
    });
  });

  $(function() {
    $('#mesTaches').click(function() {
      $.ajax({
        url: 'MesTaches.html',
        success: function(data) {
          $('#ContenuGlobal').html(data);
        }
      });
    });
  });