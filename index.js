const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("myParam");

var user1 = {
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
};

var user2 = {
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
};

window.addEventListener("load", function () {
  //render display names
  const displayName = document.querySelectorAll(".display-name");
  for (const name of displayName) {
    name.textContent = user2.displayName;
  }
  //render banner picture
  document.querySelector(
    ".banner"
  ).style.backgroundImage = `url(${user2.coverPhotoURL})`;

  //render tweet count
  document.querySelector(
    "#tweet-count"
  ).textContent = `${user2.tweetCount} Tweets`;

  //render profile image
  document.querySelector(".profile-img").src = user2.avatarURL;

  //render username
  const userName = document.querySelectorAll("#username");
  for (const user of userName) {
    user.textContent = user2.userName;
  }

  //render timestamp
  document.querySelector("#timestamp").textContent =
    user2.tweets[0].timestamp.split(" ")[0];

  //render join date
  document.querySelector("#join-date").textContent = user2.joinedDate;
  //render following count
  document.querySelector("#following").textContent = user2.followingCount;
  //render follower count
  document.querySelector("#followers").textContent = user2.followerCount;

  //render tweets
  // const createTweet = () => {
  //   <div class="tweet-container">
  //     <div class="tweet">
  //       <div class="tweet-main">
  //         <img class="tweet-avatar" src="./assets/elonmusk.jpg" />
  //         <div class="tweet-body">
  //           <div class="tweet-header">
  //             <span class="display-name"></span>
  //             <small id="username"></small>
  //             <small id="timestamp"></small>
  //           </div>
  //           <div class="tweet-content">
  //             <p>This is some demo content</p>
  //           </div>
  //           <div class="tweet-footer">
  //             <small id="reply-footer">5.2K</small>
  //             <small id="retweet-footer">7.7K</small>
  //             <small id="like-footer">65k</small>
  //             <small id="download-footer">boxthing</small>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>;
  // };
});
