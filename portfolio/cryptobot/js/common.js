$(function() {

	// Custom JS


	// Create a new instance of Headhesive
	var options = {
		// Scroll offset. Accepts Number or "String" (for class/ID)
		offset: 300, // OR — offset: '.classToActivateAt',

		// If using a DOM element, we can choose which side to use as offset (top|bottom)
		offsetSide: 'top',

		// Custom classes
		classes: {

			// Cloned elem class
			clone: 'headhesive',

			// Stick class
			stick: 'headhesive--stick',

			// Unstick class
			unstick: 'headhesive--unstick'
		},

		// Throttle scroll event to fire every 250ms to improve performace
		throttle: 250,

		// Callbacks
		onInit: function () { },
		onStick: function () { },
		onUnstick: function () { },
		onDestroy: function () { },
	}

	// Create a new instance of Headhesive.js and pass in some options
	var header = new Headhesive('.main_head', options);
 

	$(".robot").keyup(function (e) {
		var kino = $(this).val();
		console.log(kino);
		$('.pchela').text(kino);
	});





	$('.close_mnu').click(function (e) {
		e.preventDefault();
		$(".main_menu").toggleClass('active_mobile');
	});
	
	
	$('.hamburger').click(function (e) {
		e.preventDefault();
		$(".hamburger").toggleClass('is-active');
		$(".left_menu").toggleClass('open_left_menu');
	});



// Меню скачаное
 
	$(function () {
		var Accordion = function (el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			// Variables privadas
			var links = this.el.find('.link');
			// Evento
			links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
		}

		Accordion.prototype.dropdown = function (e) {
			var $el = e.data.el;
			$this = $(this),
				$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
			};
		}

		var accordion = new Accordion($('#accordion'), false);
	});


});
