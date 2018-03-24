$(document).ready(function(){
	$("#img-1,#img-2,#img-3").each(function(){
		$(this).mouseenter(function(){
			$(this).animate({
				position:"relative",
				top:"-5px",
			},"fast");
			$(this).addClass("shadowbox");
		});
	});

	$("#img-1,#img-2,#img-3").each(function(){
		$(this).mouseleave(function(){
			$(this).animate({
				position:"relative",
				top:"5px",
			},"fast");
			$(this).removeClass("shadowbox");
		});
	});

});