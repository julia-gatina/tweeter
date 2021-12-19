/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const $newTweet = $('form.new-tweet');
  const $textArea = $('#tweet-text');
  const $tweetCounter = $('#counter');

  // Load tweets send to the server, GET request
  const loadTweets = () => {
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: "GET",
      success: function(tweetsArray) {
        renderTweets(tweetsArray);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  };

  loadTweets();

  /**
   * takes in an array of tweet objects, calls createTweetElement for each tweet and appends each one to the #tweets-container.
   * @param {*} tweetsArray
   * @returns createdTweet
   */
  const renderTweets = function(tweetArray) {
    $('#tweets-container').empty();
    const tweetArrayReversed = tweetArray.reverse();
    for (const tweet of tweetArrayReversed) {
      const newTweet = createTweetElement(tweet);
      $('#tweets-container').append(newTweet);
    }
  };

  /**
   * takes in single tweet object and creates a markup that will be used to render tweets dynamically
   * @param {*} single tweetObj 
   * @returns tweet markup
   */
  const createTweetElement = function(tweetObj) {
    const $tweet = $(`
      <article class="tweet">
        <header>
          <div class="username">
            <img class="avatars" src=${tweetObj.user.avatars} alt="User Avatar"> 
            
            <span>${tweetObj.user.name}</span>
          </div>
          <div class="handle">${tweetObj.user.handle}</div>
        </header>
      
        <main>
          <p>${tweetObj.content.text}</p>
        </main>
      
        <footer>
          <line>${timeago.format(tweetObj.created_at)}</line>
          <div><i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
        `);
    return $tweet;
  };

  // Serialize the form data and send it to the server as a query string
  $newTweet.on('submit', (event) => {
    event.preventDefault();

    const data = $newTweet.serialize();

    postNewTweet(data);
  });

  // Send 'POST' request to the server
  const postNewTweet = (tweetObj) => {
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: "POST",
      data: tweetObj,
      success: () => {
        loadTweets();
        resetInputElements();
      },
      error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
    });
  }

  // reset 'compose tweet' input and char counter after a tweet posted
  const resetInputElements = function() {
    $textArea.val('');
    $tweetCounter.val('140');
  };

});