function makeStickyNav() {
	/*
	makes the nav section sticky when that section scrolls to the top of the page
	*/

	var $stickyNav = $('.sticky-nav');
	var stNavOn = "sticky-nav-fixed-active";
	var $content = $('.content');
	var contAddMargin = "content-nav-margin-adjust";

	$(window).scroll(function() {
		if($(this).scrollTop() > $(window).height()) {
			$stickyNav.addClass(stNavOn);
			$content.addClass(contAddMargin);
		}
		else {
			$stickyNav.removeClass(stNavOn);
			$content.removeClass(contAddMargin);
		}
	});
}


function downChevron() {
		/* 
		function activates a down chevron symbol that appears when the page viewer moves their mouse inside the page window
		clicking the chevron scrolls the page up by 200px
		scrolling the page or clicking on the chevron dissapears it and removes functionalty
		srolling to the top of the page restores functionality
		*/
		var $chevron = $('.down-chevron');
		var chevronOn = "down-chevron-active";
		var moved = false;

		function activateChevron() {
			$chevron.css('z-index', '10');
				$(window).on("mousemove", function() {
						$chevron.addClass(chevronOn);
						$chevron.on('transitionend', function() {
						$chevron.removeClass(chevronOn);
					});
				});

				$chevron.on('click', function() {
					$('html, body').animate({scrollTop: 300}, 400);
				});
		}


		function deactivateChevron() {
			$chevron.css('z-index', '-10');
			$(window).off("mousemove");
			$chevron.off('click');
		}

		if (!moved && $(window).scrollTop() === 0) {
			activateChevron();
		}


		$(window).scroll(function() {
			if ($(window).scrollTop() > 0) {
				deactivateChevron();
			}
			else if ($(window).scrollTop() === 0) {
				activateChevron();
			}
		});
}


function playVideo() {
	/*
		if the embeded html5 video is playable, play it after a short delay to allow preloading
	*/
	var $video = $('#video-background');

	$video.on('canplay', function() {
		setTimeout(function() {
			$video[0].play();
		}, 1000);
	});
}


function main(){
	makeStickyNav();
	playVideo();
	downChevron();

}


$(document).ready(main);