/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [{
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  /**
   * takes in single tweet object and creates a markup that will be used to render tweets dynamically
   * @param {*} single tweetObj 
   * @returns tweet markup
   */
  const createTweetElement = function(tweetObj) {
    let $tweet = $(`
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


  /**
   * takes in an array of tweet objects, calls createTweetElement for each tweet and appends each one to the #tweets-container.
   * @param {*} tweets
   * @returns createdTweet
   */
  const renderTweets = function(tweets) {
    $('.container').empty();

    for (const tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('#tweets-container').append(newTweet);
    }
  };

  renderTweets(data);

});