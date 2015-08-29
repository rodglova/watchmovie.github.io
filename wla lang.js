$(document).ready(function()
{
  $('#photos img:gt(0)').hide();

  setInterval(function()
  {
    var current = $('#photos img:visible');
    var next = current.next().length ? current.next() : $('#photos img:eq (0)');
    current.fadeOut(1000);
    next.fadeIn(1000);
  
  }, 3000);

});