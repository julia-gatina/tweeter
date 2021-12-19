$(document).ready(function() {
  const $writeTweet = $('a.write-tweet');
  const $tweetForm = $('#tweet-form');
  const $textArea = $('#tweet-text');
  const $tweetButton = $('#tweet-button');
  const $upButton = $('#back-to-top');
  const $error = $("#error");

  // do not display compose tweet form when document loaded initially
  $tweetForm.hide();
  $writeTweet.show();

  // Once 'write new tweet'clicked, show new tweet form and hide 'write-new-tweet'
  $writeTweet.on('click', function(event) {
    event.preventDefault();

    $tweetForm.show("fast");
    $textArea.focus();
    $writeTweet.hide("slow", "linear");

  });

  $tweetButton.on('click', function(event) {

    // if user tries to submit an empty tweet, display error message
    if ($textArea.val().length === 0) {
      $error.html('Tweet cannot be empty. Please write something.').addClass("error-message");

      setTimeout(function() {
        $error.hide("slow");
      }, 3000);

      event.preventDefault();
      return false;
    }

    // if user tries to submit tweet more than 140 chars long, display error message
    if ($textArea.val().length > 140) {
      $error.html(`That's a bit too long for a tweet. Please rephrase.`).addClass("error-message");

      setTimeout(function() {
        $error.hide("slow");
      }, 3000);

      event.preventDefault();
      return false;
    }
    
  });

  $upButton.on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000)
  })

});