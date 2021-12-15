$(document).ready(function() {

  const $tweetText = $('#tweet-text');
  const $tweetCounter = $('.counter');
  const $button = $('#tweet-button');

  // function to count char being entered, when > 140 -> turn counter red
  $tweetText.on('keypress', function(event) {
    const $maxValue = 140;
    const $currentValue = event.target.value.length;
    console.log($currentValue)
    const amountLeft = $maxValue - $currentValue;

    if (amountLeft < 0) {
      $tweetCounter.addClass('red-counter');
    }

    $tweetCounter.val(amountLeft);

  })

});