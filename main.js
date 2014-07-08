// var addQuote = $('<textarea class="quote-entry" placeholder="Enter your quote here"></textarea><br>');

// var quote = $('<textarea class="quote-entry" placeholder="Enter your quote here"></textarea><br>');




$(document).on('ready', function() {

	$(document).on('click', '#submit', function() {

		var quote = $('#quote-entry').val()
		var author = $('#author-entry').val()
		if(quote === '' || author === ''){alert("Both fields required!")}
		else{
		$('#quote-entry').val('')
		$('#author-entry').val('')

		$('#content').prepend('<h3 class="author">~ '+ author + '</h3>')
		$('#content').prepend('<p>' + quote + '</p>')
		}

	});
  

	$(document).on('click', '.author', function() {

		$('#lightbox').removeClass('hidden')
		var author = $(this).text()
		var quote = $(this).prev().text()


		// $('#author-content').prepend('<h3>'+ author + '</h3>')
		// $('#author-content').prepend('<p>' + quote + '</p>')

//		if($('#content').find('h3').text() === author) { alert("ding!")}


		console.log(author)

		$( "#content h3:contains('"+ author + "')" ).each(function(){


			var author = $(this).text()
			var quote = $(this).prev().text()
			$('#author-content').prepend('<h3>'+ author + '</h3>')
			$('#author-content').prepend('<p>' + quote + '</p>')

		})


	})

	$(document).on('click', '#back', function() {

		$('#lightbox').addClass('hidden')
		$('#author-content').html('')

	})


});