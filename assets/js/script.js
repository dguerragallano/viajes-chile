$(document).ready(function(){

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault(); 
            var hash = this.hash;
            $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
      }
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });

    $("i").on("click", function(){
        $(this).css("color", "#e68a00");
    });

    $(".card-title").click(function(){
        alert("Debido a la situación generada por el COVID-19, nuestros viajes se encuentran temporalmente cancelados. Rellena el formulario y te avisaremos cuando abramos nuestra agenda. ¡Gracias!");
    });

  });