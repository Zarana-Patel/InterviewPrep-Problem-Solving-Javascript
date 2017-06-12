jQuery(document).ready(function($){
	//open the lateral panel

	$('.menu').on('click', function(){
	//	$('.row').css('transform','translateY(520px)');
		$('.menulist').slideDown();
		});
		$('#close').on('click', function(){
		//	$('.row').css('transform','translateY(520px)');
			$('.menulist').slideUp();
			});
			var t = setInterval(function(){
				$(".carousel ul").animate({marginLeft:-600},1000,function(){
					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginLeft:0});
				})
			},5000);
		});
