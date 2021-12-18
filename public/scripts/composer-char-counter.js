$(document).ready(function() {

  const $tweetText = $('#tweet-text');
  const $tweetCounter = $('#counter');
  
  // function to count char being entered, when > 140 -> turn counter red
  $tweetText.on('keyup', function(event) {
    const $maxValue = 140;
    const $currentValue = event.target.value;
    const amountLeft = $maxValue - $currentValue.length;

    if (amountLeft < 0) {
      $tweetCounter.addClass('red-counter');
    } else {
      $tweetCounter.removeClass('red-counter');
    }
    $tweetCounter.val(amountLeft);
  })

});