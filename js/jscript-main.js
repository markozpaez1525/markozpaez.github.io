(function() {
  

	jQuery(document).ready(function(){
		
		/* ToolTip */ 
		$('[data-toggle="tooltip"]').tooltip();

		/* Slide Up & Down - Menu Navigation */
		function slideUpDown(yourElement, yOffset) {

			 var yCoordinate = yourElement.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({
				top: yCoordinate + yOffset,
				behavior: 'smooth'
			});
			clear();
		}
		
		function clear(){
			slideUpDown("0", "0");
		}
		
		/* Navigation ScrollTo */ 
		$("#navHome").click(function() {
			slideUpDown(document.getElementById('myHome'), -200);
		});
		$("#navPortfolio").click(function() {
			slideUpDown(document.getElementById('myPortfolio'), -150);
		});	
		$("#navServices").click(function() {
			slideUpDown(document.getElementById('myServices'), -150);
		});			
		$("#navBlogs").click(function() {
			slideUpDown(document.getElementById('myBlogs'), -150);
		});
		$("#navAbout").click(function() {
			slideUpDown(document.getElementById('myPersonalInfo'), -150);
		});
		$("#navContact").click(function() {
			$('#email, #name, #phone, #message').val('');
			$('.badge-warning').hide();
		});
		$(".fa-chevron-up").click(function() {
			slideUpDown(document.getElementById('myPortfolio'), -1500);
		});
		
		/* Hide Flipster Next&Prev Button*/
		$('.flipster__button').hide();
		
		
		//------- 3D Landing Page event  js --------//  
		$('#slideshow-2').hide(); 
		$('#slideshow-1').show(); 
		
		$('.shadow').hover(function(){
			$('#slideshow-1').addClass('animated hinge delay-5s');
			$('#slideshow-1').hide(); 
			$('#slideshow-2').show(); 
			$('#slideshow-2').addClass('animated zoomIn delay-5s');
		});
		
		
		/* Tab - Personal Information */ 
		$('a[href="#tab1primary"]').click();
		$('li a[href="#tab1primary"]').parent().addClass('active');
		
		$('a[href="#tab1primary"]').click(function() {
			$('li a[href="#tab2primary"], li a[href="#tab3primary"]').parent().removeClass('active');
			$('li a[href="#tab1primary"]').parent().addClass('active');
		});
		
		$('a[href="#tab2primary"]').click(function() {
			$('li a[href="#tab1primary"], li a[href="#tab3primary"]').parent().removeClass('active');
			$('li a[href="#tab2primary"]').parent().addClass('active');
		});
		
		$('a[href="#tab3primary"]').click(function() {
			$('li a[href="#tab1primary"], li a[href="#tab2primary"]').parent().removeClass('active');
			$('li a[href="#tab3primary"]').parent().addClass('active');
		});
		
		/* Hide Markoz Job Experiences*/
		$('#authorExperience, #authorEducation, #readMoreMinus').hide();
		
		
		// Click Job Experience
		$('#readMorePlus').click(function() {
			$('#txtAnswerRiddle').val('');
			$('.blank-answer').hide();
			//$('#modalRiddle').modal();
			$('#readMorePlus').hide();
			$('#authorExperience, #authorEducation, #readMoreMinus').show();
		});
		$('#readMoreMinus').click(function() {
			$('#authorExperience, #authorEducation, #readMoreMinus').hide();
			$('#readMorePlus').show();
		});
		
		
		
		// Click Submit Riddle Answer
		$('#btnAnswerRiddle').click(function() {
			var answerRiddle = $('#txtAnswerRiddle').val();
			if (answerRiddle == 'slow eater' || answerRiddle == 'invalid'){
				$('#emojiWrong, #readMorePlus').hide();
				$('#emojiCorrect').show();
				$('#modalEmoji').modal();
				$('#modalRiddle').modal('toggle');
				$('#authorExperience, #authorEducation, #readMoreMinus').show();
			}else if (answerRiddle == ''){
				$('.blank-answer, #readMorePlus').show();
			}else{
				$('#emojiCorrect, #authorExperience, #authorEducation').hide();
				$('#emojiWrong, #readMorePlus').show();
				$('#modalEmoji').modal();
				$('#modalRiddle').modal('toggle');
			}
		});
		
		
		/* Footer */ 
		var dt = new Date();
		$("#footerYear").text(dt.getFullYear());
		
		
	});
	
	
})();
