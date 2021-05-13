const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("user");
const index = parseInt(myParam.split("user")[1]) - 1;

const twitterNumberFormat = (num) => {
  if (num >= 1000 && num < 10000000) {
    return (num /= 1000).toString() + "K";
  } else if (num >= 1000000) {
    return (num /= 1000000).toString() + "M";
  } else {
    return num;
  }
};

const users = [
  {
    userName: "@elonmusk",
    tweetCount: 136000,
    displayName: "Elon Musk",
    joinedDate: "June 2009",
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: "assets/elonmusk.jpg",
    coverPhotoURL: "assets/elonmusk-cover.jpeg",
    tweets: [
      {
        text: "We are going to put a Doge on the moon!",
        timestamp: "5/10/2021 00:01:20",
      },
      {
        text: "I admit to judging books by their cover",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Starship to the moon",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "Out on launch pad, engine swap underway",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },
  {
    userName: "@BillGates",
    tweetCount: 3537,
    displayName: "Bill Gates",
    joinedDate: "June 2009",
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: "assets/billgates.jpg",
    coverPhotoURL: "assets/billgates-cover.jpeg",
    tweets: [
      {
        text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Should I start tweeting memes? Let me know in a comment.",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "In 2020, I read a book every hour.",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },
];
console.log(twitterNumberFormat(users[1].tweetCount));

window.addEventListener("load", function () {
  //loop over user array and find user with same number -1 (index)
  //populate data
  //loop over users tweets and populate
  //render tweets for each element in tweets array.
  (function renderTweets() {
    const tweetContainer = document.querySelector(".tweet-container");
    for (const tweet of users[index].tweets) {
      const newTweet = document.createElement("div");
      newTweet.className = "tweet";
      newTweet.innerHTML = `
            <div class="tweet-main">
              <img class="tweet-avatar" src="${users[index].avatarURL}" />
              <div class="tweet-body">
                <div class="tweet-header">
                  <span class="display-name sml">${
                    users[index].displayName
                  }</span>
                  <small id="username">${users[index].userName}</small>
                  <small id="timestamp">${tweet.timestamp.split(" ")[0]}</small>
                </div>
                <div class="tweet-content">
                  <p>${tweet.text}</p>
                </div>
                <div class="tweet-footer">
                  <small id="reply-footer">🗨️</small>
                  <small id="retweet-footer"><i class="fa fa-retweet"></i>
                    
                  </small>
                  <small id="like-footer"><i class="fa fa-heart"></i></small>
                  <small id="download-footer"><i class="fa fa-upload"></i></small>
                </div>
              </div>
            </div>
        `;
      tweetContainer.appendChild(newTweet);
    }
  })();

  //render display names
  const displayName = document.querySelectorAll(".display-name");
  for (const name of displayName) {
    name.textContent = users[index].displayName;
  }
  //render banner picture
  document.querySelector(
    ".banner"
  ).style.backgroundImage = `url(${users[index].coverPhotoURL})`;

  //render tweet count
  document.querySelector("#tweet-count").textContent = `${twitterNumberFormat(
    users[index].tweetCount
  )} Tweets`;

  //render profile image
  document.querySelector(".profile-img").src = users[index].avatarURL;

  //render username
  const userName = document.querySelectorAll("#username");
  for (const user of userName) {
    user.textContent = users[index].userName;
  }

  //render timestamp
  document.querySelector("#timestamp").textContent =
    users[index].tweets[0].timestamp.split(" ")[0];

  //render join date
  document.querySelector("#join-date").textContent = users[index].joinedDate;
  //render following count
  document.querySelector("#following").textContent = twitterNumberFormat(
    users[index].followingCount
  );
  //render follower count
  document.querySelector("#followers").textContent = twitterNumberFormat(
    users[index].followerCount
  );
});
