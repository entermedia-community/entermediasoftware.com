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
				
});


















