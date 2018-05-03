jQuery(document).ready(function($){

	var uzunluk=1;
	uzunluk++;
	var sira=0;

	$('.slider ul li:not(:eq('+sira+'))').hide();
	$('.bsag').click(function(event){
		$('.slider ul li').fadeOut();
		if (sira<uzunluk) {
			sira++;
			$('.slider ul li:eq('+sira +')').fadeIn();
		}
		else {
			sira=0;
			$('.slider ul li:eq('+sira +')').fadeIn();
		};
	});

	$('.bsol').click(function(event){
		$('.slider ul li').fadeOut();
		if (sira>0) {
			sira++;
			$('.slider ul li:eq('+sira +')').fadeIn();
		}
		else{
			sira=uzunluk;
			$('.slider ul li:eq('+sira +')').fadeIn();
		}
	})

});
