$('input[type="password"]').focus(function() {
   $('.eye').addClass('up');
});

$('input[type="password"]').blur(function() {
   $('.eye').removeClass('up');
});


$('input[type="text"]').focus(function() {
   $('.eye').addClass('down');
});

$('input[type="text"]').blur(function() {
   $('.eye').removeClass('down');
});

$('input').blur(function() {
   $('.eye').addClass('blink');
   setTimeout(function() {
      $('.eye').removeClass('blink');
   },600);
});