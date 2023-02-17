$(document).ready(function() {
      $('.acc .acc_title').on('click', f_acc);
  });
   
  function f_acc(){
    $('.acc .acc_text').not($(this).next()).slideUp(1000);
      $(this).next().slideToggle(1000);
  }