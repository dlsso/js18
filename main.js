

$(document).on('ready', function() {
	var closed = true	// Lets the program know the lightbox is closed

	$(document).on('click', '#submit', function() {
		// When submit button is clicked get the value of the quote and author and store them as variables
		var quote = $('#quote-entry').val()
		var author = $('#author-entry').val()
		// If either field has been left empty warn user, otherwise empty the fields and add quote to top of page
		if(quote === '' || author === ''){alert("Both fields required!")}
		else{
			$('#quote-entry').val('')
			$('#author-entry').val('')

			var quoteBlock = $('<div class="rated"><p>' + quote + '</p><h3 class="author">~ '+ author + '</h3></div>')
			$('#content').prepend(quoteBlock)
			quoteBlock.raty({ number: 3 });
		}
	});

	// When a user clicks a rating...
	$(document).on('click', '.rated img', function() {
		// Sort all the things
		$(".rated").each(function() {
			var score = $(this).find('input').val()
			if(score == 1) { $('#content').prepend(this) }
		})

		$(".rated").each(function() {
			var score = $(this).find('input').val()
			if(score == 2) { $('#content').prepend(this) }
		})

		$(".rated").each(function() {
			var score = $(this).find('input').val()
			if(score == 3) { $('#content').prepend(this) }
		})
	})

	// When author is clicked unhide lightbox
	$(document).on('click', '.author', function() {

		if(closed){
			$('#lightbox').removeClass('hidden')
			// Set variables of author and quote
			var author = $(this).text()
			var quote = $(this).prev().text()
			// Find each instance of author and add those quotes to the lightbox page
			$( "#content h3:contains('"+ author + "')" ).each(function(){
				var author = $(this).text()
				var quote = $(this).prev().text()
				$('#author-content').prepend('<div><p>' + quote + '</p><h3 class="author">'+ author + '</h3></div>')
				closed = false
			})
		}
	})
	// When the back button is clicked re-hide the lightbox and empty it
	$(document).on('click', '#back', function() {
		$('#lightbox').addClass('hidden')
		$('#author-content').html('')
		closed = true
	})

});