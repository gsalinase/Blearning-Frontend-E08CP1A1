$(document).ready(function() {
  $('#boton-tweets').click(function(event) {
    var text = $('#text-tweet').val();
    event.preventDefault();
        $('#board').append(
            '<div class="box-tweets">' + 
                '<div class="media">' + 
                    '<div class="media-left">' +
                        '<a href="img/foto-perfil-1.jpg">' +  
                        '<img class="media-object avatar-tweets" width="48px" src="img/foto-perfil-1.jpg" alt="Foto de Gonzalo Salinas">' +
                        '</a>' + 
                    '</div>' + 
                    '<div class="media-body">' + 
                        '<strong>Gonzalo Salinas</strong>' +
                        '<span> @ gsalinase </span>' + 
                        '<small>.</small>' + 
                        '<span> 1s </span>' + 
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                        '<br>' + 
                        '<p>' + text + '</p>' + 
                    '</div>' +
                    '<div class="likeable">' + 
                      '<span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>' +
                      '<span> 0 </span>' + 
                    '</div>' + 
                '</div>' +
            '</div>'
        );

        $('#text-tweet').val(); 

        $('#text-tweet').focus();
  });



  
});