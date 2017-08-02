$(document).ready(function() {
    $('#boton-tweets').click(function(event) {
        var text = $('#text-tweet').val();
        event.preventDefault();
            $('#board').prepend(
                '<div class="box-tweets note">' + 
                    '<div class="media pin">' + 
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
                            '<div class="boton-eliminar">' +
                            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                            '</div>' +
                            '<br>' + 
                            '<p>' + text + '</p>' + 
                        '</div>' +
                        '<div class="likeable">' + 
                          '<span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>' +
                          '<span class= "contador">0</span>' + 
                        '</div>' + 
                    '</div>' +
                '</div>'
            );

        $('#text-tweet').val(); 

        $('#text-tweet').focus();
    });

    $(document).on('click', '.boton-eliminar',function(event) {
     event.stopPropagation();
      $(this).parents('.note').fadeToggle(1000);

    });

    $(document).on('click', '.likeable', function(event) {
        $(this).css('color', '#E0245E');  
        var num = 0;
        var likeable = $(this).find('span.contador')
        likeable.text(parseInt(likeable.text())+1)
    });

});