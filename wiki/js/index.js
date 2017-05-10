
var quoteArray = [
  ["Eagles do not beget Doves."],
  ["The owl of ignorance lays the egg of pride.", "Proverb"],
  ["An eagle does not catch flies.", "Proverb"],
  ["At his best, man is the noblest of all animals; separated from law and justice he is the worst.", "Aristotle"],
  ["The dog is the god of frolic.", "Henry Ward Beecher"],
  ["I like pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.", "Sir Winston Churchill"],
  ["Animals are such agreeable friends, they ask no questions, they pass no criticisms.", "George Elliot"],
  ["The cow is of the bovine ilk: One end is moo, the other, milk.", "Ogden Nash"]
];

var countQuotes = quoteArray.length;
seedQuote();

document.getElementById("new-quote").onclick = function(e) {
  seedQuote();
}

function getQuote() {
  var whichQuote = Math.floor(Math.random() * (countQuotes));
}

function seedQuote() {
  var whichQuote = Math.floor(Math.random() * (countQuotes));

  document.getElementById("quote").innerHTML = quoteArray[whichQuote][0];

  if (quoteArray[whichQuote][1]) {
    var quoteAuthor = quoteArray[whichQuote][1];
  } else {
    var quoteAuthor = "Unknown Author";
  }

  document.getElementById("quote-author").innerHTML = quoteAuthor;
}

var colors = ["#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  function getRandomColor() {
    var color =  Math.floor(Math.random() * colors.length);
    
     $("body").css({
        background: colors[color],
       });
}
  $('#new-quote').on('click', function(){
    getRandomColor();
  });

$('#tweet-button').on('click', function tweetQuote(e) {
    var twitterURL = 'https://twitter.com/intent/tweet';
    var text = $('#new-quote').text() + ' - ' + $('#quote-author a').text();
    if(text.length > 140) {
      text = text.substr(0, 137) + '...';
    }
    text = encodeURIComponent(text);
    window.open(twitterURL + '?text=' + text, '_blank');
  });