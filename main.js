
// This program would be much better if written object oriented, would do it that way next time
var quote1 = $('<div class="rated"><button class="delete">Remove Quote</button><p>Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.</p><h3 class="author">~ John Woods</h3></div>')
var quote2 = $('<div class="rated"><button class="delete">Remove Quote</button><p>Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.</p><h3 class="author">~ Eric S. Raymond</h3></div>')
var quoteBlocks = [quote1, quote2]


$(document).on('ready', function() {
	var closed = true	// Lets the program know the lightbox is closed
	$('.rated').raty()		// Adds star rating to quotes already in the html
console.log(closed)
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
			var quoteBlock = $('<div class="rated"><button class="delete">Remove Quote</button><p>' + quote + '</p><h3 class="author">~ '+ author + ' </h3></div>')
			quoteBlocks.push(quoteBlock)
			$('#content').prepend(quoteBlock)
			quoteBlock.raty();
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
console.log(closed)

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
	// When random quote is clicked unhide the quotebox, hide delete button, get a random quote from the quoteBlocks array and add it to the box
	$(document).on('click', '#randomQuote', function() {
		if(closed){
			$('#quotebox').removeClass('hidden')
			$('.delete').addClass('hidden')
			var randomQuote = quoteBlocks[Math.floor(Math.random()*quoteBlocks.length)]
			$('#quotebox-content').prepend(randomQuote.clone())
			closed = false
		}
	})
console.log(closed)

	// When the back button is clicked re-hide the lightbox and empty it
	$(document).on('click', '#back', function() {
		$('#lightbox').addClass('hidden')
		$('#author-content').html('')
		closed = true
	})
	// When the close button is clicked hide the quotebox and empty it
	$(document).on('click', '#close', function() {
		$('#quotebox').addClass('hidden')
		$('.delete').removeClass('hidden')
		$('#quotebox-content').html('')
		closed = true
	})
	// When the delete button is clicked remove that quote, any other undo buttons, and make a new undo button
	$(document).on('click', '.delete', function() {
		var current = $(this).closest('.rated')
		lastBlock = current.clone()
		$('.content').find('#undo').remove()
		current.html('<button id="undo">Undo</button>')
		// Check each block and if quote doesn't match, keep it in the array
		quoteBlocks = $.grep(quoteBlocks, function(block){
			if(block.find('p').html() === current.find('p').html()) {}
			else{return block}
		})
console.log(closed)

	})
	// When the undo button is clicked add the last deleted item back
	$(document).on('click', '#undo', function() {
		quoteBlocks.push(lastBlock)
		$(this).closest('.rated').html(lastBlock)
	})
	console.log(closed)
	setInterval(function() { console.log(closed) }, 2000)

});