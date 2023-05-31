$(document).ready(function() {
    function getQuote() {
      $.getJSON('https://api.quotable.io/random', function(data) {
        $('#text').text('"' + data.content + '"'); // Add quotation marks around the quote
        $('#author').text('- ' + data.author);
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + data.content + '" ' + data.author));
      });
    }
  
    getQuote(); // Get a quote when the page loads
  
    $('#new-quote').click(getQuote); // Get a new quote when the button is clicked
  });
  