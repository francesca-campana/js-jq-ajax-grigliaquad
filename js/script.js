// Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function () {

//Creo dinamivamente i quadrati
  var numeroQuadrati = 36;
  for (var i = 0; i < numeroQuadrati; i++) {

    var source = $("#box-template").html();
    var template = Handlebars.compile(source);

    var context = $('.box');
    var html = template(context);
    $('.wrapper').append(html);

  }

  //Ad ogni click
  $(document).on('click','.box',
    function () {
    var boxCliccato = $(this);
    //parte una chiamata AJAX

      $.ajax(
        {
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function (data, stato) {
            var numeroClick = data.response;
            console.log(numeroClick);
            // Se è <= 5
            if (numeroClick <= 5 ) {

              // il quadrato diventa giallo
              boxCliccato.removeClass('bg_green');
              boxCliccato.addClass('bg_yellow').text(numeroClick);


            // Se è > di 5
            }else if (numeroClick > 5) {

              // il quadrato diventa verde
              boxCliccato.removeClass('bg_yellow');
              boxCliccato.addClass('bg_green').text(numeroClick);

            } else {

            }
          },
          error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errori);
          }

        });


  });

});
