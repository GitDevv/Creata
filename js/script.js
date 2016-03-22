$(document).ready(function(){
	
	
$('.parallax-window').parallax({imageSrc: 'img/header/bg.png'});	
$('.parallax-1').parallax({imageSrc: 'img/header/bg.png'});		
	
	$('.work-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'.wraper-work-slider .cont-slider .prev',
        nextArrow:'.wraper-work-slider .cont-slider .next',
        autoplay:false,
		draggable:false,
		fade:true,
		dots:false,
		speed: 0
     });	
	
        $(window).scroll(function(){
           if ($(this).scrollTop() > 60  ){
                 $('.middle-container').addClass('active');
            } else {
				$('.middle-container').removeClass('active');
			} 
        });//scroll	
	
	
	$('.item_techno  li .image img, .list_item h4').click(function(){
		$('.item_techno  .info').fadeOut(0);
		$(this).parent('.image').children('.info').fadeIn(0);
	});
	$('.item_techno  li .info .close, .item_techno   .info ').click(function(){
		$('.item_techno  .info').fadeOut(0);
	});	
	
	$('.wrapper_burger .button').click(function(){
		$(this).parent().toggleClass('active');
		$(this).parent().children('form').fadeToggle(0);
	});	
	
	
	
  $('input[name="phone"]').mask("+7(999) 999 - 99 - 99");
	
	$('.callback, .have_questions a, .advant .adv, .rectan a, .block_diagram a').click(function(){
	  $('.modal_callback').fadeIn(0);
	});
 	
	$('.modal_callback .closed').click(function(){
		  $('.modal_callback').fadeOut(0);
		$("#callback_1").trigger("reset");
	});
 	
	
	
    $("#callback_1").submit(function() {
		$.ajax({
			type: "POST",
			url: "write.php",
			data: $("#callback_1").serialize()
		}).done(function() {
            $("#callback_1").trigger("reset");
			 
		});
		return false;
	}); 
    $("#call").submit(function() {
		$.ajax({
			type: "POST",
			url: "write.php",
			data: $("#call").serialize()
		}).done(function() {
            $("#call").trigger("reset");
			 
		});
		return false;
	}); 	
	
    $("#callback_top").submit(function() {
		$.ajax({
			type: "POST",
			url: "write.php",
			data: $("#callback_top").serialize()
		}).done(function() {
            $("#callback_top").trigger("reset");
			 
		});
		return false;
	}); 	
	
    $("#subs").submit(function() {
		$.ajax({
			type: "POST",
			url: "subscription.php.php",
			data: $("#subs").serialize()
		}).done(function() {
            $("#subs").trigger("reset");
			 
		});
		return false;
	}); 	
	
	
 	
});
	
$(window).load(function () {
  new WOW().init();
});

$(window).scroll(function(){
	var st = $(this).scrollTop();
	
	$('.parallax').css({
		"transform" : "translate(0%,-" + st/3 + "% )"
	});
});



$(window).scroll(function(){

	if ($(window).scrollTop() > '3299' && $(window).scrollTop() < '3589'){
		$('.advant').css('background', '#aebfd7');
		$('.advant .number').css('color','#a1b4d0');
	}
	if ($(window).scrollTop() > '3589' && $(window).scrollTop() < '4379'){
		$('.advant').css('background', '#a8d4cd');
		$('.advant .number').css('color','#9ec8c1');
	}
	if ($(window).scrollTop() > '4379' ){
		$('.advant').css('background', '#b9b3db');
		$('.advant .number').css('color','#aba3d7');
	}	

});