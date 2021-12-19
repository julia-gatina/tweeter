$(document).ready(function() {
  const $writeTweetLink = $('a.write-tweet');
  const $tweetForm = $('#tweet-form');
  const $textArea = $('#tweet-text');
  const $upButton = $('#back-to-top');
 
  $tweetForm.hide();
  $writeTweetLink.show();
  $upButton.hide();

  // Once 'write new tweet' clicked, show new tweet form and hide 'write-new-tweet'
  $writeTweetLink.on('click', function(event) {
    event.preventDefault();

    $tweetForm.show("fast");
    $textArea.focus();
    $writeTweetLink.hide("fast", "linear");
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