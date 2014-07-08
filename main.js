// var addQuote = $('<textarea class="quote-entry" placeholder="Enter your quote here"></textarea><br>');

// var quote = $('<textarea class="quote-entry" placeholder="Enter your quote here"></textarea><br>');




$(document).on('ready', function() {

	$(document).on('click', '#submit', function() {

		var quote = $('#quote-entry').val()
		var author = $('#author-entry').val()
		$('#quote-entry').val('')
		$('#author-entry').val('')

		$('#content').prepend('<h3>~ '+ author + '</h3>')
		$('#content').prepend('<p>' + quote + '</p>')
		

	});
  
});