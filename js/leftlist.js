$(document).ready(function(){
	$("#left-detail").hide();
	$("#toggle-btn").click(function(){
		$("#left-detail").animate({
			height:"toggle",
			width:"toggle"
		});
		$("#left-welcome").toggle();
		
		$("#colla-btn").toggleClass("icon fa fa-th-list");
		$("#colla-btn").toggleClass("icon fa fa-times");
	});
});
