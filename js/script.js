// Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function () {
  //Ad ogni click
  $('.box').click(function () {
    var boxCliccato = $(this);
    //parte una chiamata AJAX

      $.ajax(
        {
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function (data, stato) {
            var numeroClick = data.response;
            console.log(numeroClick);
            if (numeroClick <= 5 ) {

              boxCliccato.addClass('bg_yellow').text(numeroClick);
              

            }else if (numeroClick > 5) {

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
