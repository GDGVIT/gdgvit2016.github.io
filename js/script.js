$(document).ready(function()
{

  //code for smooth scroll
  $(".concentric-circle-holder").click(function() {
      $('html, body').animate({
          scrollTop: $(".landing-text-mobile").offset().top-70
      }, 1000);
    });

    $('#home-nav').click(function()
    {
      $('html, body').animate({
          scrollTop: $(".landing-background").offset().top
      }, 700);
    });

    $('#philosophy-nav').click(function()
    {
      $('html, body').animate({
          scrollTop: $("#philosophy-row").offset().top
      }, 700);
    });

    $('#skill-nav').click(function()
    {
      $('html, body').animate({
          scrollTop: $("#what_we_do_row").offset().top
      }, 700);
    });

    $('#project-nav').click(function()
    {
      $('html, body').animate({
          scrollTop: $(".projects-container").offset().top
      }, 700);
    });

    $('#board-nav').click(function()
    {
      $('html, body').animate({
          scrollTop: $(".team").offset().top
      }, 700);
    });

    $('#contact-nav').click(function()
    {
      $('html, body').animate({
          scrollTop: $(".connect").offset().top
      }, 700);
    });

    var Wt=$(window).width();
    if(Wt>600)
    {
      $('.button-collapse').sideNav({
      menuWidth: 400, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      });
    }
    else {
      $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    }




  pulsate();
  setTimeout('wave('+wave_count1+')',1000);
  //Uncomment for second wave
  //setTimeout('wave('+wave_count2+')',248);
});

var wave_count1=1;
var wave_count2=1;
function pulsate()
{
  $('.pulsate').removeClass("logo-pulsate").delay(400);
  $('.pulsate').addClass( "logo-pulsate", function()
  {
    setTimeout(pulsate,770);
  });
}

function wave(wave_count)
{
  wave_str_prev="#c"+(wave_count-1);
  if(wave_count==7)
  {
    wave_count=1;
  }
  wave_str="#c"+wave_count;
  $(wave_str_prev).removeClass('create-wave');
  //glow(wave_str_prev);
  $(wave_str).addClass('create-wave', function()
  {
      wave_count=wave_count+1;
      //deglow(wave_str);
      //setTimeout('deglow('+wave_str+')',248);
      setTimeout('wave('+wave_count+')',248);
  });
}

function glow(str)
{

  for(var i=70;i<=204;i=i+0.3)
  {
    stall(str,i);
  }
}

function deglow(str)
{
  for(var i=204;i>=70;i=i-0.3)
  {
    stall(str,i);
  }
}
function stall(str,i)
{
  $(str).css('border-color','rgb('+i+','+i+','+i+')');
}
