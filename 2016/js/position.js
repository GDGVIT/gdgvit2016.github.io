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

  $(window).resize(function()
  {
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

});
