/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

//const $tweet = $(`<line class="posted-tweet">Hello world</line>`);

const createTweetElement = function(tweetObj) {
  const $tweet = $(`
  <article class="tweet">
    <header>
      <div class="username">
        <i class="far fa-smile-wink"></i>
        <span>${tweetObj.user.name}</span>
      </div>
      <div class="handle">${tweetObj.user.handle}</div>
    </header>
  
    <main>
      <p>${tweetObj.content.text}</p>
  
    </main>
  
    <footer>
      <line>${new Date(tweetObj.created_at).toLocaleDateString('en-US')}</line>
      <div><i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
    `);
  return $tweet;
}

setTimeout(() => {
  const createdTweet = createTweetElement(userDataObject);
  $('#tweets-container').append(createdTweet);
}, 1000);


// const $tweet = createTweetElement(tweetData);