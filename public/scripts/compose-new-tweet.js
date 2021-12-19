$(document).ready(function() {
  const $writeTweet = $('a.write-tweet');
  const $tweetForm = $('#tweet-form');
  const $textArea = $('#tweet-text');
  const $button = $('#tweet-button');
  const $error = $("#error");

  // do not display compose tweet form when document loaded initially
  $tweetForm.hide();
  $writeTweet.show();

  // only display when 'write new tweet' link clicked, and then don't hide
  $writeTweet.on('click', function(event) {
    event.preventDefault();
    $tweetForm.show();
    $textArea.focus();
    $writeTweet.hide();
  });

  $button.on('click', function(event) {

    // if user tries to submit an empty tweet, display error message
    if ($textArea.val().length === 0) {
      $error.html('Tweet cannot be empty. Please write something.').addClass("error-message");

      setTimeout(function() {
        $error.hide();
      }, 3000);

      event.preventDefault();
      return;
    }

    // if user tries to submit tweet more than 140 chars long, display error message
    if ($textArea.val().length > 140) {
      $error.html(`That's a bit too long for a tweet. Please rephrase.`).addClass("error-message");

      setTimeout(function() {
        $error.hide();
      }, 3000);

      event.preventDefault();
      
    }

    
  });

});