$(function(){
	$('img').each(function(){
		$(this).on('click', function(){
			if($(this).height() > 50 && $(this).height() < 100){
				$(this).toggle(1000)
			};
		});
	});
});