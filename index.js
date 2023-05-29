const likeButton = document.querySelector(".like-button");
const groupCuff = document.querySelector(".group-cuff");
const groupTop = document.querySelector(".group-top");
const groupConnector = document.querySelector(".group-connector");
const groupTopRight = document.querySelector(".group-top-right");
const groupBottomRight = document.querySelector(".group-bottom-right");
let numOfClicks = 0;

likeButton.addEventListener("click", () => {
  numOfClicks++;
  if (numOfClicks >= 12) {
    groupConnector.classList.add("cracked");
    likeButton.classList.add("exploded");
  } else if (numOfClicks >= 9) {
    groupTopRight.classList.add("cracked");
  } else if (numOfClicks >= 6) {
    groupBottomRight.classList.add("cracked");
  } else if (numOfClicks >= 3) {
    groupTop.classList.add("cracked");
  }
  likeButton.classList.add("big");
});

likeButton.addEventListener("transitionend", () => {
  likeButton.classList.remove("big");
});
