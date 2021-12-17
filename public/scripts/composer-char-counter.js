$(document).ready(function() {

  const $tweetText = $('#tweet-text');
  const $tweetCounter = $('#counter');
  const $newTweet = $('form.new-tweet')

  // function to count char being entered, when > 140 -> turn counter red
  $tweetText.on('keypress', function(event) {
    const $maxValue = 140;
    const $currentValue = event.target.value;
    console.log($currentValue.length);
    const amountLeft = $maxValue - $currentValue.length;

    if (amountLeft < 0) {
      $tweetCounter.addClass('red-counter');
    }
    $tweetCounter.val(amountLeft);

  })

  $newTweet.on('submit', (event) => {

    event.preventDefault();


  });


});