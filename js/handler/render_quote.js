function newQuote() {
  let randomQuote = Math.floor(Math.random() * 100);
  let randomColor = Math.floor(Math.random() * 12);
  currentQuote = store[randomQuote]["quote"];
  currentAuthor = store[randomQuote]["author"];

  document.getElementById("quote").innerHTML = store[randomQuote]["quote"];
  document.getElementById("author").innerHTML = store[randomQuote]["author"];
  document.getElementById("quote-left").style.color = colors[randomColor];
  document.getElementById("quote").style.color = colors[randomColor];
  document.getElementById("author").style.color = colors[randomColor];
  document.getElementsByTagName("body")[0].style.background = colors[randomColor];
}
