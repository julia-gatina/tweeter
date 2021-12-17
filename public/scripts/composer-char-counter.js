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

 // serialize the form data and send it to the server as a query string
  $newTweet.on('submit', (event) => {
    event.preventDefault();

    const data = $newTweet.serialize();

 $.ajax({
        url: "http://localhost:8080/tweets",
        mathod: "POST",
        data: data ,
        success: function (response) {

          console.log('this is response: ', response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });   
  });
  
});
