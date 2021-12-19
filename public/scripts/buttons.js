$(document).ready(function() {
  const $writeTweetLink = $('a.write-tweet');
  const $tweetForm = $('#tweet-form');
  const $textArea = $('#tweet-text');
  const $upButton = $('#back-to-top');
 
  $tweetForm.hide();
  $upButton.hide();

  // toggle tweet form on click (button in nav bar) and make focus on text area
  $writeTweetLink.on('click', function(event) {
    event.preventDefault();
    $tweetForm.slideToggle('slow', function () {
      $textArea.focus();
    });
  });

  $(document).scroll(function() {
    if ($(this).scrollTop()>250)
     {
      $upButton.show("fast");
     }
    else
     {
      $upButton.hide("fast");
     }
 });

  $upButton.on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000)
  })

});