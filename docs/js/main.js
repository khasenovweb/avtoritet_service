 $(document).ready(function(){
 	$('.services__auto__circle').mouseover(function(){
 		var pos = $(this).offset();
 		var padding_right = $(window).width() - pos.left;
 		var otstup = 200 - padding_right;
 		if(padding_right < 200) {
 			$(this).children('.services__auto__circle__content').css('left', -otstup-60);
 		}
 	});
 });