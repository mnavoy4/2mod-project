const reviewsDiv = document.querySelector("#reviews");
const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username");
let reviewsURL = "http://localhost:3000/reviews";
const hiddenUsername2 = document.querySelector("#hiddenUsername2");
const hiddenUsername3 = document.querySelector("#hiddenUsername3");
hiddenUsername2.value = username;
hiddenUsername3.value = username;

function fetchReviews(){
  fetch(reviewsURL)
    .then(response => response.json())
    .then(renderReviews)
}

function renderReviews(reviews){
  reviews.forEach(review => {
    let reviewDiv = document.createElement("div");
    reviewDiv.className = "card mx-4 justify-content-around col-3 my-2"
    const wikiSearchString = review.quote.source.replace(" ", "_")
    reviewDiv.innerHTML = `<p class="card-title"><strong>Quote:</strong> ${review.quote.quote}</p>
      <p><strong>Philosophy:</strong> <a href=https://en.wikipedia.org/wiki/${review.quote.philosophy}>${review.quote.philosophy}</a></p>
      <p><strong>Source:</strong> <a href=https://en.wikipedia.org/wiki/${wikiSearchString}>${review.quote.source}</a></p>
      <p><strong>Rating:</strong> ${review.rating}</p>
      <p><strong>My Review:</strong> ${review.user_review}</p>`;
      reviewsDiv.append(reviewDiv);
  });
}

if (username){
  reviewsURL = `${reviewsURL}?username=${username}`
}

document.addEventListener("DOMContentLoaded", fetchReviews());
