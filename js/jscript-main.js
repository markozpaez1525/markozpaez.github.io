(function() {
  

	jQuery(document).ready(function(){
		
		/* Carousel Display */ 
		$('.carousel').carousel({
		  interval: 30000
		})
		
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
		
		function clearTextBox(){
			
		}
		
		/* Navigation ScrollTo */ 
		$("#navHome").click(function() {
			slideUpDown(document.getElementById('myHome'), -150);
		});
		$("#navPortfolio").click(function() {
			slideUpDown(document.getElementById('myPortfolio'), -100);
		});		
		$("#navBlogs").click(function() {
			slideUpDown(document.getElementById('myBlogs'), -90);
		});
		$("#navAbout").click(function() {
			slideUpDown(document.getElementById('myPersonalInfo'), -75);
		});
		$("#navContact").click(function() {
			$('#email, #name, #phone, #message').val('');
			$('.badge-warning').hide();
		});
		$(".fa-chevron-up").click(function() {
			slideUpDown(document.getElementById('myPortfolio'), -1000);
		});
		
		/* Hide Flipster Next&Prev Button*/
		$('.flipster__button').hide();
		
		/* Hide Markoz Job Experiences*/
		$('#authorExperience, #authorEducation, #readMoreMinus').hide();
		
		
		
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
		
		
		// Click Job Experience
		$('#readMorePlus').click(function() {
			$('#txtAnswerRiddle').val('');
			$('.blank-answer').hide();
			$('#modalRiddle').modal();
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
		
		/* Home Introduction */
		var intro = 0;
		var txtSpeed = 50;
		var txtHomeIntro = "Are you looking for a Web Developer? If yes, then you are in the right place! Hire me!";

		function typeWriterIntro() {
			
			var p1 = "homeIntro";
			if (intro < txtHomeIntro.length) {
				document.getElementById(p1).innerHTML += txtHomeIntro.charAt(intro);
				intro++;
				setTimeout(typeWriterIntro, txtSpeed);
			}
		}
		
		typeWriterIntro();
				
		var intro2 = 0;
		var txtSpeed2 = 50;
		var txtHomeDesc = "I have been in a Web Development industry for 4 years and counting and gained a lot of experience through the companies and clients that I have been connected. Please check out my Portfolio below. I'm interested in working with you and discuss how can I help you?";
		
		setInterval(
		function typeWriterDesc() {
			
			var p2 = "homeDesc";
			if (intro2 < txtHomeDesc.length) {
				document.getElementById(p2).innerHTML += txtHomeDesc.charAt(intro2);
				intro2++;
				setTimeout(typeWriterDesc, txtSpeed2);
			}
		}, 6500);
		
		
		/* Footer */ 
		var dt = new Date();
		$("#footerYear").text(dt.getFullYear());
		
		
	});
	
	
})();
