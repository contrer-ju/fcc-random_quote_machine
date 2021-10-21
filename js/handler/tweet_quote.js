function tweetQuote() {
  document
    .getElementById("buttom_Tweet")
    .setAttribute(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
}
