$(document).on('click', '.saveBtn', function() {
	
	console.log('click');
	console.log(this);

	$(this).parent().empty();
})

$(document).on('click', '.deleteBtn', function() {

	var thisID = $(this).siblings('.idInput').val();
	console.log(thisID);
	
	$.ajax({
		method: "POST",
		url: "/api/delete/" + thisID,
	}).done(function() {
		console.log('article deleted');
	})

	$(this).parent().empty();
})