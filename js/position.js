$(document).ready(function()
{
  var Ht=$(window).height();
  var Wt=$(window).width();

  // Setting Position of Homepage Gola
  var gola_holder_ht=$('.concentric-circle-holder').height();
  if(Wt<600)
  {
    $('.concentric-circle-holder').css('top',-1*gola_holder_ht/3);
  }
  else
  {
    $('.concentric-circle-holder').css('top',-1*gola_holder_ht/1.9);
  }


  $(document).scroll(function()
  {
    var scroll=$(window).scrollTop();
    if(scroll>=Ht)
    {
      $('#philosophy-row .landing-logo-holder').css('position','fixed');
      $('#philosophy-row .landing-logo-holder').css('top','3px');
    }
    else
    {
      $('#philosophy-row .landing-logo-holder').css('position', 'absolute');
      $('#philosophy-row .landing-logo-holder').css('top','auto');
    }
  });

});


  $(window).resize(function()
  {
    var Ht=$(window).height();
    var Wt=$(window).width();
    var gola_holder_ht=$('.concentric-circle-holder').height();
    if(Wt<600)
    {
      $('.concentric-circle-holder').css('top',-1*gola_holder_ht/3);
    }
    else
    {
      $('.concentric-circle-holder').css('top',-1*gola_holder_ht/1.9);
    }
  });
