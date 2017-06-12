$(document).ready(function(){
  $("#menu-button1").bind( "click", function() {
    $('#menubar').toggleClass('open');
    $('#menu-button1').hide(0);
    $('#overlay').show(0);
    $('#menu-button2').show(0);
  });

  $('#menu-button2').bind( "click", function() {
    $('#menubar').removeClass('open');
    $('#menu-button1').show(0);
     $('#menu-button2').hide(0);
     $('#overlay').hide(0);
  });
  $('ul li > .submenu').parent().click(function() {
    var sub = $(this).children('.submenu');
    if ( $(sub).is(':hidden') ) {
      $(sub).slideDown(200);
    } else {

    }
});

$('.menulink').on('click',function(e){
  e.preventDefault();
  var url = $(this).attr("href");
  console.log(url);
  CallPage(url);
});

function CallPage(url){
  $.ajax({
    url:url,
    type:"GET",
    async: false,
    datatype:'text/html',
    success: function( response ) {
        console.log(response);
      $('.content-wrapper').html(response);

    },
    error:function(error){
      console.log('error',error);
    }
  });

};



});
