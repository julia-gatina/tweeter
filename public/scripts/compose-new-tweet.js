$(document).ready(function() {
  const $writeTweet = $('a.write-tweet');
  const $TweetForm = $('#tweet-form');

  // do not display compose tweet form when document loaded
  $TweetForm.hide();
  
  // only display when 'write new tweet' link clicked, and then don't hide
  $writeTweet.on('click', function(event) {
    event.preventDefault();
    $TweetForm.show();
 });





});