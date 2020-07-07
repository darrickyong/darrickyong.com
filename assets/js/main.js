/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});

	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '-20vh',
							bottom: '-20vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			})
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
      });
      
  // Skills.
  	$(".skill-react-icon").mouseover(function () {
      $(".skill-react-icon").removeClass("devicon-react-original");
      $(".skill-react-icon").addClass("devicon-react-original-wordmark colored");
    });

    $(".skill-react-icon").mouseleave(function () {
      $(".skill-react-icon").removeClass("devicon-react-original-wordmark colored");
      $(".skill-react-icon").addClass("devicon-react-original");
    });

    $('.skill-rails-icon').mouseover(function () {
      $('.skill-rails-icon').removeClass('devicon-rails-plain');
      $('.skill-rails-icon').addClass('devicon-rails-plain-wordmark colored');
    });
    
	  $('.skill-rails-icon').mouseleave(function () {
      $('.skill-rails-icon').removeClass('devicon-rails-plain-wordmark colored');
      $('.skill-rails-icon').addClass('devicon-rails-plain');
    });

    $('.skill-js-icon').mouseover(function () {
      $('.skill-js-icon').removeClass('devicon-javascript-plain');
      $('.skill-js-icon').addClass('devicon-javascript-plain colored');
    });
    
	  $('.skill-js-icon').mouseleave(function () {
      $('.skill-js-icon').removeClass('devicon-javascript-plain colored');
      $('.skill-js-icon').addClass('devicon-javascript-plain');
    });

    $('.skill-css-icon').mouseover(function () {
      $('.skill-css-icon').removeClass('devicon-css3-plain');
      $('.skill-css-icon').addClass('devicon-css3-plain-wordmark colored');
    });
    
	  $(".skill-css-icon").mouseleave(function () {
      $(".skill-css-icon").removeClass("devicon-css3-plain-wordmark colored");
      $(".skill-css-icon").addClass("devicon-css3-plain");
    });

    $('.skill-express-icon').mouseover(function () {
      $('.skill-express-icon').removeClass('devicon-express-original');
      $('.skill-express-icon').addClass('devicon-express-original-wordmark colored');
    });
    
	  $('.skill-express-icon').mouseleave(function () {
      $('.skill-express-icon').removeClass('devicon-express-original-wordmark colored');
      $('.skill-express-icon').addClass('devicon-express-original');
    });

    $('.skill-git-icon').mouseover(function () {
      $('.skill-git-icon').removeClass('devicon-git-plain');
      $('.skill-git-icon').addClass('devicon-git-plain-wordmark colored');
    });
    
	  $('.skill-git-icon').mouseleave(function () {
      $('.skill-git-icon').removeClass('devicon-git-plain-wordmark colored');
      $('.skill-git-icon').addClass('devicon-git-plain');
    });

    $('.skill-html-icon').mouseover(function () {
      $('.skill-html-icon').removeClass('devicon-html5-plain');
      $('.skill-html-icon').addClass('devicon-html5-plain-wordmark colored');
    });
    
	  $(".skill-html-icon").mouseleave(function () {
      $(".skill-html-icon").removeClass("devicon-html5-plain-wordmark colored");
      $(".skill-html-icon").addClass("devicon-html5-plain");
    });
    
    $('.skill-mongodb-icon').mouseover(function () {
      $('.skill-mongodb-icon').removeClass('devicon-mongodb-plain');
      $('.skill-mongodb-icon').addClass('devicon-mongodb-plain-wordmark colored');
    });
    
	  $('.skill-mongodb-icon').mouseleave(function () {
      $('.skill-mongodb-icon').removeClass('devicon-mongodb-plain-wordmark colored');
      $('.skill-mongodb-icon').addClass('devicon-mongodb-plain');
    });

    $('.skill-nodejs-icon').mouseover(function () {
      $('.skill-nodejs-icon').removeClass('devicon-nodejs-plain');
      $('.skill-nodejs-icon').addClass('devicon-nodejs-plain-wordmark colored');
    });
    
	  $('.skill-nodejs-icon').mouseleave(function () {
      $('.skill-nodejs-icon').removeClass('devicon-nodejs-plain-wordmark colored');
      $('.skill-nodejs-icon').addClass('devicon-nodejs-plain');
    });

    $('.skill-postgresql-icon').mouseover(function () {
      $('.skill-postgresql-icon').removeClass('devicon-postgresql-plain');
      $('.skill-postgresql-icon').addClass('devicon-postgresql-plain-wordmark colored');
    });
    
	  $('.skill-postgresql-icon').mouseleave(function () {
      $('.skill-postgresql-icon').removeClass('devicon-postgresql-plain-wordmark colored');
      $('.skill-postgresql-icon').addClass('devicon-postgresql-plain');
    });

    $('.skill-ruby-icon').mouseover(function () {
      $('.skill-ruby-icon').removeClass('devicon-ruby-plain');
      $('.skill-ruby-icon').addClass('devicon-ruby-plain-wordmark colored');
    });
    
	  $('.skill-ruby-icon').mouseleave(function () {
      $('.skill-ruby-icon').removeClass('devicon-ruby-plain-wordmark colored');
      $('.skill-ruby-icon').addClass('devicon-ruby-plain');
    });

    $('.skill-d3js-icon').mouseover(function () {
      $('.skill-d3js-icon').removeClass('devicon-d3js-plain');
      $('.skill-d3js-icon').addClass('devicon-d3js-plain colored');
    });
    
	  $('.skill-d3js-icon').mouseleave(function () {
      $('.skill-d3js-icon').removeClass('devicon-d3js-plain colored');
      $('.skill-d3js-icon').addClass('devicon-d3js-plain');
    });
    
})(jQuery);