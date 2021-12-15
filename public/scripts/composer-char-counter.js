$(document).ready(function() {
  
  
const $tweetText = $('#tweet-text');
const $tweetCounter = $('#tweet-counter');
const $button = $('#tweet-button');


$tweetText.on('keypress', function (event) {
  const $maxValue = 140; 
  const $currentValue = event.target.value.length;
  console.log($currentValue)
  const amountLeft = $maxValue - $currentValue;
  $tweetCounter.val(amountLeft);

})

});

