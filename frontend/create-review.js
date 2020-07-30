const quoteDiv= document.querySelector("#quote");
const quotesURL = "http://localhost:3000/quotes";
const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username");
const hiddenUsername = document.querySelector("#hiddenUsername");
const hiddenQuoteId = document.querySelector("#hiddenQuoteId");
const hiddenUsername2 = document.querySelector("#hiddenUsername2");
const hiddenUsername3 = document.querySelector("#hiddenUsername3");
hiddenUsername.value = username;
hiddenUsername2.value = username;
hiddenUsername3.value = username;
const link = document.querySelector("#link-to-reviews");

function fetchRandomQuote(){
  fetch(quotesURL)
    .then(response => response.json())
    .then(renderRandomQuote)
}

function renderRandomQuote(quotes){
  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  const wikiSearchString = randomQuote.source.replace(" ", "_")
  const quoteP = document.createElement("p");
  hiddenQuoteId.value = randomQuote.id;
  quoteP.innerHTML = `<p>${randomQuote.quote}</p>
  <p>Philosophy: <a href=https://en.wikipedia.org/wiki/${randomQuote.philosophy} target="_blank">${randomQuote.philosophy}</a></p>
  <p>Source: <a href=https://en.wikipedia.org/wiki/${wikiSearchString} target="_blank">${randomQuote.source}</a></p>`;
  quoteDiv.append(quoteP);
}

document.addEventListener("DOMContentLoaded", fetchRandomQuote());