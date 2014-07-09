
	var quoteBlocks = []

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
			// Create a varibale containing the quote, author and delete button
			var quoteBlock = $('<div class="rated"><button id="delete">Remove Quote</button><p>' + quote + '</p><h3 class="author">~ '+ author + ' </h3></div>')
			quoteBlocks.push(quoteBlock)
			$('#content').prepend(quoteBlock)
			quoteBlock.raty({ number: 5 });
		}
	});

	// When a user clicks a rating...
	$(document).on('click', '.content .rated img', function() {
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

		$(".rated").each(function() {
			var score = $(this).find('input').val()
			if(score == 4) { $('#content').prepend(this) }
		})

		$(".rated").each(function() {
			var score = $(this).find('input').val()
			if(score == 5) { $('#content').prepend(this) }
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

	$(document).on('click', '#randomQuote', function() {

		if(closed){
			$('#quotebox').removeClass('hidden')
			var randomQuote = quoteBlocks[Math.floor(Math.random()*quoteBlocks.length)]
			$('#quotebox-content').prepend(randomQuote.clone())
			closed = false
		}
	})

	// When the back button is clicked re-hide the lightbox and empty it
	$(document).on('click', '#back', function() {
		$('#lightbox').addClass('hidden')
		$('#author-content').html('')
		closed = true
	})
	// When the close button is clicked hide the quotebox and empty it
	$(document).on('click', '#close', function() {
		$('#quotebox').addClass('hidden')
		$('#quotebox-content').html('')
		closed = true
	})
	// When the delete button is clicked remove that quote
	$(document).on('click', '#delete', function() {
		var current = $(this).closest('.rated')
		current.remove()
		
		quoteBlocks = $.grep(quoteBlocks, function(block){

			if(block.find('p').html() === current.find('p').html()) {

			}
			else{return block}
		})

	})

});

// arr = jQuery.grep(arr, function( n, i ) {
//   return ( n !== 5 && i > 4 );
// });