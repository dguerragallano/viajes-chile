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

    $("i").on("dblclick", function(){
        $(this).css("color", "#ff9900");
    });

    $(".card-title").click(function(){
        alert("Debido a la situación generada por el COVID-19, nuestros viajes se encuentran temporalmente cancelados. Rellena el formulario y te avisaremos cuando abramos nuestra agenda. ¡Gracias!");
    });

  });