$(document).on('click', '.saveBtn', function() {
	
	console.log('click');
	console.log(this);

	$(this).parent().empty();
})