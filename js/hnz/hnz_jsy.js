$(function(){
	  $('.hnz_jsy-box dd').hide();
	$('.hnz_jsy-box dl').hover(function(){
		$(this).find('b').html('&or;');
		$(this).find('dd').stop();
		$(this).find('dd').slideToggle(200);
		
		},function(){
			$(this).find('dd').slideToggle(200);
			$(this).find('b').html('&and;');
		})
	})