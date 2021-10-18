$(function () {
	let menu = $('.menu__list');
	let menuBtn = $('.menu__btn');
	let menuLink = $('.menu__list-link');
	let header = $('.header');
	$(menuBtn).on('click', function () {
		$(menu).toggleClass('open');
		$(this).toggleClass('open');
		$(header).toggleClass('gradient');
	});
	$(menuLink).on('click', function () {
		$(menu).removeClass('open');
		$(header).removeClass('gradient');
		$(menuBtn).toggleClass('open');

	})
	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass('open');
			$(header).removeClass('gradient');
			$(menuBtn).removeClass('open');
		}
	});
	$(window).scroll(function () {

		$(menuBtn).removeClass('open');
		$(menu).removeClass('open');
		$(header).removeClass('gradient');
	});
	$(window).ready(function () {
		if ($(window).width() < 551) {
			$(".closed").toggleClass("show").children(".footer__list-title");

			$(".footer__list-title").click(function () {
				if ($(this).parent().hasClass("show")) {
					$(".footer__list-item").addClass("show").children(".footer__dropdown-list").hide("medium");
					$(this).parent().toggleClass("show").children(".footer__dropdown-list").slideToggle("medium");
				} else {
					$(this).parent().toggleClass("show").children(".footer__dropdown-list").slideToggle("medium");
				}
			});

		}
	});


	$('.header-slider').slick({
		infinite: false,
		variableWidth: true,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',
	});
	$('.day-1-slider').slick({
		infinite: false,
		variableWidth: true,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',
	});
	$('.day-2-slider').slick({
		infinite: false,
		variableWidth: true,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',
		rtl: true,
	});
	$('.day-3-slider').slick({
		infinite: false,
		variableWidth: true,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',
		rtl: true,
	});
	$('.day-4-slider').slick({
		infinite: false,
		variableWidth: true,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',

	});
	$('.day-5-slider').slick({
		infinite: false,
		variableWidth: true,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',
		rtl: true,
	});
	$('.day-6-slider').slick({
		infinite: false,
		variableWidth: true,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',
	});
	$('.day-7-slider').slick({
		infinite: false,
		variableWidth: true,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',
		rtl: true,
	});
	$('.team__slider').slick({
		infinite: false,
		variableWidth: true,
// 		slidesToShow: 3,
// slidesToScroll: 1,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',
	});
	

	
	
	$('<div class="form__controls"><div class="form__controls-btn form__btn-minus"><img src="images/icons/minus.svg" alt=""></div><div class="form__controls-btn form__btn-plus"><img src="images/icons/plus.svg" alt=""></div></div>').insertAfter('.form__input-guests');

	$('.form__item-guests').each(function () {
		var spinner = jQuery(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.form__btn-plus'),
			btnDown = spinner.find('.form__btn-minus'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});
	$('.form__input-guests').change(function(){
		let parents = $(this).parents();
				let summ =  ($('#summ', parents).data('price') * $('#guests', parents).val()).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				$('#summ', parents).html(summ + ' руб');
				let summ2 =  ($('#summ2', parents).data('price') * $('#guests', parents).val()).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				$('#summ2', parents).html(summ2 + ' руб');
				let summ3 =  ($('#summ3', parents).data('price') * $('#guests', parents).val()).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				$('#summ3', parents).html(summ3 + ' руб');
	});
	
	  $('.form__controls-btn').on('click', function () {
		  let summ =  (($('#guests').val()) * $('#summ').data('price')).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		  $('#summ').html(summ + ' руб');
		  let summ2 =  (($('#guests').val()) * $('#summ2').data('price')).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		  $('#summ2').html(summ2 + ' руб');
		  let summ3 =  (($('#guests').val()) * $('#summ3').data('price')).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		  $('#summ3').html(summ3 + ' руб');
	  });

	  $('.form__controls-btn').on('click', function () {

				let parents = $(this).parents();
				let summ =  ($('#summ', parents).data('price') * $('#guests', parents).val()).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				$('#summ', parents).html(summ + ' руб');
				let summ2 =  ($('#summ2', parents).data('price') * $('#guests', parents).val()).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				$('#summ2', parents).html(summ2 + ' руб');
				let summ3 =  ($('#summ3', parents).data('price') * $('#guests', parents).val()).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				$('#summ3', parents).html(summ3 + ' руб');
		
			});


	//здесь рассчитывает сумму с исходными значениями !
	$('.form__item-guests').each(function () {

	  let parents = $(this).parents();
		let summ =  ($('#summ', parents).data('guests') * $('#guests', parents).val()).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('#summ', parents).html(summ + ' руб');
		let summ2 =  ($('#summ2', parents).data('guests') * $('#guests', parents).val()).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('#summ2', parents).html(summ2 + ' руб');
		let summ3 =  ($('#summ3', parents).data('guests') * $('#guests', parents).val()).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('#summ3', parents).html(summ3 + ' руб');

	});

	
	   let summ = (($('#guests').val()) * $('#summ').data('price')).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	   $('#summ').html(summ + ' руб');
	   let summ2 = (($('#guests').val()) * $('#summ2').data('price')).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	   $('#summ2').html(summ2 + ' руб');
	   let summ3 = (($('#guests').val()) * $('#summ3').data('price')).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	   $('#summ3').html(summ3 + ' руб');

	
});
$(function(){
	

	new AirDatepicker('#calendar', {
		range: true,
		multipleDatesSeparator: ' - ',
		inline: false,
		altFieldDateFormat: "",
		keyboardNav: true,
		autoClose: true,
		
	
	})
	// $('.form-calendar__icon').click(function(){
	// 	let dp = new AirDatepicker('#calendar');

	// 	dp.toggle();
		
	// 	$('.form-calendar').addClass('test')
	// });

})


new WOW().init();

