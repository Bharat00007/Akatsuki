'use strict'

const preloader  = $('.beehive-preloader');
$(window).on('load', function() {
	const preloaderFadeOutTime = 500;
	function hidePreloader() {
		preloader.fadeOut(preloaderFadeOutTime);
	}
	hidePreloader();
});

// Ready event
jQuery(document).ready(function($) {
	
	const navigation = $('.navbar-main');
	
	if( navigation.hasClass('fixed-top') ) {
		//alert( 'hello' );
		let lastScrollTop = 0;
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 50) {
				navigation.addClass('nav-scrolling');
			  if ($(this).scrollTop() > lastScrollTop){
					navigation.addClass('to-bottom');
					navigation.removeClass('to-top');
			  } else {
					navigation.addClass('to-top');
					navigation.removeClass('to-bottom');
			  }
			 lastScrollTop = $(this).scrollTop();
			} else {
				navigation.removeClass('nav-scrolling');
			}
		});
	}
	
	// Trigger hiraku sidebar
	$('.navbar-main .navbar-nav-links').hiraku({
		btn: '.navbar-main .navbar-toggler',
		direction: 'right',
		breakpoint: 991.98
	});
	
	// Trigger animation
	let wow = new WOW({
		boxClass: 'animated',
	});
	wow.init();
	
	new Swiper('.main-theme-components.swiper-slider', {
		slidesPerView: 2,
		spaceBetween: 8,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
		640: {
		  slidesPerView: 4,
		},
		767.98: {
		  slidesPerView: 6,
		},
		991.98: {
		  slidesPerView: 8,
		},
		1199.98: {
		  slidesPerView: 11,
		},
	  }
	});
	
	new Swiper('.theme-shots-carousel.normal .swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,
		},
		pagination: {
			el: '.swiper-pagination',
		},
	});
	
	new Swiper('.theme-shots-carousel.large-screen .swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,
		},
		pagination: {
			el: '.swiper-pagination',
		},
	});

	const filterList = {
		
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#template-list').mixItUp({
			selectors: {
			  target: '.template',
		  },
		  load: {
		  filter: '.main'  
		}     
			});								
		
		}

	};
	
	// Run the show!
	filterList.init();

});
