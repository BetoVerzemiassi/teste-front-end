$(document).ready(function () {   
    $('.checkbox-wrap').on('click', function () {       
        $('[type="radio"]').addClass('checkbox-wrap:before');
        $('.acoes .bt').show();
    });

    $('.bt-confirmar').click(function (e) { 
        e.preventDefault();
       $.get("resultado.json", {},
           function (data) {
               var $alternativaUm = $('#a1');
               var $alternativaDois = $('#a2');
               var $alternativaTres = $('#a3');
               var $alternativaQuatro = $('#a4');              

               if ($alternativaUm || $alternativaDois ||  $alternativaQuatro) {
                    $('#feedbackNegativo').show();                    
               }
               if ($alternativaTres){
                    $('#feedbackPositivo').show();
               }               
           }
       );
    });


});