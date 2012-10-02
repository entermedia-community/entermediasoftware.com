function goToByScroll(id) {
			id = id.replace("#","\"");
			id = '.scrollto[name=' + id +'"]';
			var div = $(id);
			$('html,body').animate({scrollTop: div.offset().top},'slow');
		}

$(window).load(function() 
{
		jQuery('.flexslider').flexslider({
				  animation: "slide",
				  controlsContainer: ".flex-container",
				  slideshow: "true",
				  slideshowSpeed: 6000 
		});
				
				
		jQuery("a.thickbox, a.emdialog").livequery(
						function() 
						{
							jQuery(this).fancybox(
							{ 
								'zoomSpeedIn': 300, 'zoomSpeedOut': 300, 'overlayShow': true,
								enableEscapeButton: true, type: 'iframe'
							});
						}); 

		$('.scrollto').click(function(e) {
			e.preventDefault();
			var id = $(this).attr('href');
			goToByScroll(id);
		});
				
});


















