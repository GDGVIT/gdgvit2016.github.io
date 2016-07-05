$(document).ready(function()
{
  var Ht=$(window).height();
  var Wt=$(window).width();

  if(Wt<600)
  {
    var CC=$('.concentric-circle-holder').height();
    $('.concentric-circle-holder').css('left',-1*CC/2.43);
    $('.concentric-circle-holder').css('top',CC/5);
  /*  if((Ht-Wt)<=100 || (Wt-Ht)<=100)
    {
      $('.concentric-circle-holder').css('left',-1*CC/2.65);
    }*/
  }
});
