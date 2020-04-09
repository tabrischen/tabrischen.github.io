let quotes = [
"When you realize nothing is lacking, the whole world belongs to you. - Lao Tzu",
"What the superior man seeks is in himself; what the small man seeks is in others.  - Confucius",
"To seek is to suffer. To seek nothing is bliss.",
"I live by letting things happen. - Dogen",
"Who you are is always right. - Ming-Dao Deng"
]

//window.addEventListener('load',newQuote);



function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var container = document.getElementById('container');
  document.getElementById('quote').innerHTML = quotes[randomNumber];
  var ripple = document.createElement('div');
  ripple.setAttribute("class","ripple");
  container.appendChild(ripple);
}
