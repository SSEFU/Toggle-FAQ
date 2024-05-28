$(document).ready(function(){
    $(".domanda").click(function(){
     // si chiude automaticamente //
     if($(this).next(".risposta").hasClass("active")){
       $(this).next(".risposta").removeClass("active").slideUp()
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus")	
     }
   else{
     $(".card .risposta").removeClass("active").slideUp()
     $(".card .domanda span").removeClass("fa-minus").addClass("fa-plus");
     $(this).next(".risposta").addClass("active").slideDown()
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
    }
    })
  })
  