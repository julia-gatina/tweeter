/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

const userDataObject = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};


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
}


  const createdTweet = createTweetElement(userDataObject);
  $('#tweets-container').append(createdTweet);


});