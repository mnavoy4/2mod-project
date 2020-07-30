const quotesURL = "http://localhost:3000/quotes"
const quotesDiv= document.querySelector("#all-quotes")
const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username");
const hiddenUsername2 = document.querySelector("#hiddenUsername2");
const hiddenUsername3 = document.querySelector("#hiddenUsername3");
const hiddenUsername4 = document.querySelector("#hiddenUsername4");
hiddenUsername2.value = username;
hiddenUsername3.value = username;
hiddenUsername4.value = username;

function fetchQuotes(){
  fetch(quotesURL)
    .then(response => response.json())
    .then(renderQuotes)
}

function renderQuotes(quotes){
  quotes.forEach(quote => {
    const quoteDiv = document.createElement("div");
    quoteDiv.innerHTML = `<p>Quotation: ${quote.quote}</p>
      <p>Source: ${quote.source}</p>
      <p>Philosophy: ${quote.philosophy}</p>`
      quotesDiv.append(quoteDiv)
  })
}

document.addEventListener("DOMContentLoaded", fetchQuotes());
