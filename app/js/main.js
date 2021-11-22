$(function () {
	let menu = $('.header-menu__list');
	let menuBtn = $('.menu__btn');
	let menuLink = $('.header-menu__list-link');
	$(menuBtn).on('click', function () {
		$(menu).toggleClass('open');
		$(this).toggleClass('open');
	});
	$(menuLink).on('click', function () {
		$(menu).removeClass('open');
		$(menuBtn).toggleClass('open');

	})
	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass('open');
			$(menuBtn).removeClass('open');
		}
	});

	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 500) {
            $(menuBtn).removeClass('open');
            $(menu).removeClass('open');
        }
    });
	$(window).ready(function () {
		if ($(window).width() < 1001) {	
				$('.slider').removeAttr('dir');
				$('.day-7__content-img').insertAfter('.day-7__title');
				$('.day-2__content-img').insertBefore('.day-2__text-left p:first-child');
				$('.day-3-slider').removeClass('_dark').addClass('_light');
				$('.header-social').insertAfter('.header__inner');
			}
		});

	$(window).ready(function () {
			if ($(window).width() < 769) {
				$('.header__top-btn').appendTo('.header-menu__list');
				$('.day-2__content-img').insertBefore('.day-2__text-left p:first-child');
			}
		});
		$(window).ready(function () {
			if ($(window).width() < 501) {
				$('.day-2__content-img').appendTo('.day-2__text-left');
				$('.day-7__content-img').insertAfter('.day-7__text-left p:nth-child(2)');
$('.form__textarea').removeAttr('placeholder').attr('placeholder', 'Напишите ваш комментарий');
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
		responsive: [
			{
				breakpoint: 1001,
				settings: {
					rtl: false,
				}
		},
	]
	});
	$('.day-3-slider').slick({
		infinite: false,
		variableWidth: true,
		prevArrow: '<button class="slider-btn slider-btn__left __icon-arrow"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right __icon-arrow"></button>',
		rtl: true,
		responsive: [
			{
				breakpoint: 1001,
				settings: {
					rtl: false,
				}
		},
	]
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
		responsive: [
			{
				breakpoint: 1001,
				settings: {
					rtl: false,
				}
		},
	]
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
		responsive: [
			{
				breakpoint: 1001,
				settings: {
					rtl: false,
				}
		},
	]
	});
	$('.team__slider').slick({
		infinite: false,
		variableWidth: true,
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
})

