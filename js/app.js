
$(document).ready(function() {

	var limit;

	$('#number').on('keypress', function (event) {
		if (event.which == '13'){
			$('div').children('p').remove();
			limit = $(this).val();
			$(this).val('');
			for (var i=0; i<limit; i++) {
				if ((i%3!=0) && (i%5!=0)) {
					$('div').append('<p>'+i+'</p>');
				} else if ((i%3==0) && (i%5!=0)) {
					$('div').append('<p class="fizz">fizz</p>');
				} else if ((i%3!=0) && (i%5==0)) {
					$('div').append('<p class="fuzz">fuzz</p>');
				} else if ((i%3==0) && (i%5==0)) {
					$('div').append('<p class="fizzfuzz">fizzfuzz</p>');
				}
			}
		}
	});

});