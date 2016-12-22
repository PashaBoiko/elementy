$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});


jQuery(document).ready(function() {
	// Верхняя левая кнопка
	$("#sandwich, .menu_item").click(function() {
	  $("#sandwich").toggleClass("active");
	});

	// Событие при закрытии верхней кнопки
	$('#header-button').on('hidden.bs.modal', function (e) {
	  $("#sandwich").toggleClass("active");
	})

	// Новости
	$('#owl-carousel').owlCarousel({
		items: 3
	})

	new WOW().init();

	// Эфект на слайдере
	var $active=$('.active');
	$active.find('.slaider-img').addClass("effect");
	// $active('.slaider-img').addClass("effect");

	$('#carousel-example-generic').on('slid.bs.carousel', function () {
		$active.find('.slaider-img').removeClass("effect");
		//setTimeout(function(){
		    $active=$('.active');
		  	$active.find('.slaider-img').addClass("effect");
	 	// },5000);
	})


	// Counter
	var aboutUsList=$('#about-us-list').offset().top;
	var counter=1;
	$(window).scroll(function() {
			var scrollTop = $(this).scrollTop();

			if(scrollTop > aboutUsList-$(window).height() && counter==1){
				$('.count').each(function () {
				    $(this).prop('Counter',0).animate({
				        Counter: $(this).text()
				    }, {
				        duration: 4000,
				        easing: 'swing',
				        step: function (now) {
				            $(this).text(Math.ceil(now));
				        }
				    });
				    counter++;
				});
			}

			if (scrollTop > $('.h2-header').scrollTop()+500){  
				$('.scroll-up').addClass("sticky");
				$('.fixed-menu').addClass("animation-menu");
			}

			else{
				$('.scroll-up').removeClass("sticky");
				$('.fixed-menu').removeClass("animation-menu");
			}
		});

	// Паралакс
	$('.parallax-window').parallax({imageSrc: 'img/paralax.png'});

	// кнопка вверх
	$(".scroll-up").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});

	// главное меню

	$(".main-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	// футтер меню

	$(".footer-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	var parl1 = document.getElementById('parl1');
	var parallax = new Parallax(parl1);

	var parl2 = document.getElementById('parl2');
	var parallax2 = new Parallax(parl2);
});

//placeholder plugin



