/**
 * Trabalhando com jQuery *
 *
 * Este é a folha de script que usei para criar
 * um slide. Com as funcionalidades padrão de
 * um slide
 */

const slider = {

	slideActive: $('.slide-active'),

	/**
	 * Este método é responsável pela troca automática
	 * do slide
	 */
	slide: function() {
		this.slideActive = $('.slide-active');
		var to = this.slideActive.next().length ? this.slideActive.next() : $('.slide-item:first');

		var navItemActive = $('.list-item.item-active');
		var toNavigationItem = navItemActive.next().length ? navItemActive.next() : $('.list-item:first');

		console.log(this)

		this.changeSlideToPosition(to);
		this.changeSlideToPositionNavigation(toNavigationItem);
	},


	/**
	 * Este método é responsável por regressar para o
	 * slide anterior
	 */
	prevSlide: function() {
		this.slideActive = $('.slide-active');
		var to = this.slideActive.prev().length ? this.slideActive.prev() : $('.slide-item:last');

		var navItemActive = $('.list-item.item-active');
		var toNavigationItem = navItemActive.prev().length ? navItemActive.prev() : $('.list-item:last');

		console.log(this)

		this.changeSlideToPosition(to);
		this.changeSlideToPositionNavigation(toNavigationItem);
	},


	/**
	 * Este método é responsável por avançar para o
	 * próximo slide
	 */
	nextSlide: function() {
		this.slideActive = $('.slide-active');
		var to = this.slideActive.next().length ? this.slideActive.next() : $('.slide-item:first');

		var navItemActive = $('.list-item.item-active');
		var toNavigationItem = navItemActive.next().length ? navItemActive.next() : $('.list-item:first');

		console.log(this)

		this.changeSlideToPosition(to);
		this.changeSlideToPositionNavigation(toNavigationItem);
	},


	/**
	 * Este método é responsável pela alteração do
	 * slide para uma certa posição
	 */
	changeSlideToPosition: function(to) {
		this.slideActive = $('.slide-active');

		this.slideActive.removeClass('slide-active').fadeOut(1000);
		to.addClass('slide-active').fadeIn(1000);
	},


	/**
	 * Este método é responsável pela alteração do
	 * posição do slide no menu de navegação
	 */
	changeSlideToPositionNavigation: function(to) {
		var navItemActive = $('.list-item.item-active');

		console.log(navItemActive)

		to.addClass('item-active');
		navItemActive.removeClass('item-active');
	}
};

/** Interagindo com o objecto do slide */

setInterval(function() {
		slider.slide();
	}, 3000
);

$(function() {
	$('.slide-item').prepend(`
		<a href="#" class="btn btn-prev">
			<span class="fa fa-angle-left"></span>
		</a>
	`);

	$('.slide-item').append(`
		<a href="#" class="btn btn-next">
			<span class="fa fa-angle-right"></span>
		</a>
	`);

	$('.btn-prev').click(function() {
		slider.prevSlide();
	});

	$('.btn-next').click(function() {
		slider.nextSlide();
	});

	$('.btn-seeless').click(function() {
		$('.btn-seemore').css('display', 'block');
		$('.slide-info').css('top', '100%');
	});

	$('.btn-seemore').click(function() {
		$.each($('.btn-seemore'), function(i, btn) {
			btn.style.display = 'none';
		});

		$.each($('.btn-seeless'), function(i, btn) {
			btn.style.display = 'block';
		});

		$('.slide-info').css('top', 0);
	});

	$('.list-item-link').click(function() {
		toSlide = $(this.getAttribute('data-id'));
		slider.changeSlideToPosition(toSlide);

		/** Movimentando a navegação */
		var navItemActive = $('.list-item.item-active');
		navItemActive.removeClass('item-active');

		$(this).parent('.list-item').addClass('item-active');

		return false;
	});
});
