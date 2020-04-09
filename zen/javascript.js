let quotes = [
  {
    content: "When you realize nothing is lacking, the whole world belongs to you",
    author: " - Lao Tzu"
  },
  {
    content:
"What the superior man seeks is in himself; what the small man seeks is in others.",
    author: "- Confucius"
  },
  {
    content: "To seek is to suffer. To seek nothing is bliss.",
    author: "- unknown "
  },
  {
    content: "I live by letting things happen.",
    author: "- Dogen"
  },
  {
    content: "Who you are is always right. ",
    author: " - Ming-Dao Deng"
  }
];

function newQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote').innerHTML = quotes[randomNumber].content;
  document.getElementById('author').innerHTML = quotes[randomNumber].author;
  var ripple = document.createElement('div');
  ripple.setAttribute("class","ripple");
  container.appendChild(ripple);
}
