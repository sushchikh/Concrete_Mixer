/*
 ######   #######  ##     ## ##    ## ######## ########   #######  ##      ## ##    ##
##    ## ##     ## ##     ## ###   ##    ##    ##     ## ##     ## ##  ##  ## ###   ##
##       ##     ## ##     ## ####  ##    ##    ##     ## ##     ## ##  ##  ## ####  ##
##       ##     ## ##     ## ## ## ##    ##    ##     ## ##     ## ##  ##  ## ## ## ##
##       ##     ## ##     ## ##  ####    ##    ##     ## ##     ## ##  ##  ## ##  ####
##    ## ##     ## ##     ## ##   ###    ##    ##     ## ##     ## ##  ##  ## ##   ###
 ######   #######   #######  ##    ##    ##    ########   #######   ###  ###  ##    ##
 */





function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">ДНИ</div><span class="number day">'+day+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">ЧАСЫ</div><span class="number hour">'+hour+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">МИН.</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">СЕК.</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2018/05/09 00:00:00');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Время действия акции закончилось =(</span></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}



// ##     ##    ###    #### ##
// ###   ###   ## ##    ##  ##
// #### ####  ##   ##   ##  ##
// ## ### ## ##     ##  ##  ##
// ##     ## #########  ##  ##
// ##     ## ##     ##  ##  ##
// ##     ## ##     ## #### ########

//   $(document).on('change', '#form input:checkbox', function() {
// if($(this).is(':checked')){
// $("#form input[type=text]").removeAttr('disabled');
// $('#form button').removeAttr('disabled');

// }
// else {
// $("#form input[type=text]").attr('disabled','disabled');

// }
// });

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      // i++;
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $('.hidden_form_container').removeClass('show_form_container');
      $('.hidden_form_wrapper').removeClass('show_form_container');
    });
    return false;

  });


  $("#form_hidden").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      // i++;
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $('.hidden_form_container').removeClass('show_form_container');
      $('.hidden_form_wrapper').removeClass('show_form_container');
    });
    return false;

  });



  $('.button').bind('click', function(){
    $('.hidden_form_container').addClass('show_form_container');
  })
  $('.close').bind('click', function(){
    $('.hidden_form_container').removeClass('show_form_container');
  });

  $('.button').bind('click', function(){
    $('.hidden_form_wrapper').addClass('show_form_container');
  })
  $('.close').bind('click', function(){
    $('.hidden_form_wrapper').removeClass('show_form_container');
  })

  $('.callback_button').bind('click', function(){
    $('.hidden_form_wrapper').addClass('show_form_container');
  })
  $('.callback_button').bind('click', function(){
    $('.hidden_form_container').addClass('show_form_container');
  })

// ребята, сорри за это, делал пьяный на велосипеде с костылями, это просто пиздец, больше такого не делаю, честно, это один из первых сайтов