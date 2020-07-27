
// Go to the start
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0,0);

//Loader
window.onload = function() { 

	var body = document.querySelector('body');
 	var loader = document.querySelector('#loader');
 	setTimeout(function(){ 

 		loader.classList.add('hide-loader'); 


 	}, 2000);

 };



(function() {

	"use strict";

	var imageSize = 12226; //px
	// var endImage = 10
	// Detect Device
	function detectMobile() {
	  let check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	};


	var nextButton = document.querySelector('#next');
	var backButton = document.querySelector('#back');







	var slide = 1;
	// Next button
	nextButton.addEventListener("click", function(event) {

		event.preventDefault();


		slide++;
		removeAllActivesNavigations();
		document.querySelector('#navigation'+slide+'>span').classList.add('active');
		let current = document.querySelector('#phrase'+(slide-1));
 		let after = document.querySelector('#phrase'+(slide));
 		hideAllPhrases();
		if (slide > 0 && slide < 10) { 

			if (slide === 2) {
				// current.classList.toggle('off');
	 			backButton.classList.remove('hide');
				backButton.classList.add('show');
				document.querySelector('.initial-text').classList.remove('on');
			}

	    	after.classList.toggle('on');
	    	removeAllSteps();
	    	document.querySelector('.step'+slide).classList.add('on');

		}


	 	if (slide < 9) {

		 	
		 	if (detectMobile()) { moveBackgroundToFront(); }
		 	else{ jump('section'+slide); }
			


	 	}	 
	 	if (slide === 9) {
	 		if (detectMobile()) {
	 		 	moveBackgroundToEnd();
	 		 }
	 	}

	 	if (slide === 10) {
	 		document.querySelector('#phrase9').classList.remove('on');

	 		if (detectMobile()) {
	 			slide=10;
	 		 	moveBackgroundToEnd();
			 	showContact();
	 		 }else {

	 		 	jump('end');
	 		 }

	 		nextButton.classList.add('hide');
	 		nextButton.classList.remove('show');

	 	}

	 });

	 // Back button
	 backButton.addEventListener("click", function() {
	 	slide--;
		removeAllActivesNavigations();
		document.querySelector('#navigation'+slide+'>span').classList.add('active');
	 	let current = document.querySelector('#phrase'+(slide+1));
	 	let before = document.querySelector('#phrase'+(slide));
	 	hideAllPhrases();
	 	if (slide > 0 && slide < 9) {


			    before.classList.toggle('on');
			    if (detectMobile()) { moveBackgroundToBack(); }
			    else{ jump('section'+slide);  }
			    removeAllSteps();
			    if (slide > 2 && slide <=8) {

			    	document.querySelector('.step'+slide).classList.add('on');
			    }
	 	}
	 	if (slide === 1) {
		 	backButton.classList.add('hide');
		 	backButton.classList.remove('show');
		 	document.querySelector('.initial-text').classList.add('on');

	 	}

	 	if (slide === 9) {

	 		hideContact();
	 		if (detectMobile()){
	 			moveBackgroundToEnd();
	 		}
	 			else{ jump('section8');	}

	 		let before = document.querySelector('#phrase9');
	 		before.classList.toggle('on');
		 	nextButton.classList.remove('hide');
			nextButton.classList.add('show');




	 	}

	 });

	 // Navigation
	 	 
	 document.querySelector('#navigation1').addEventListener("click", function() {
	 		 const from = slide;
	 		 const to = 1;

	 		 if(slide!=1){
		 		slide=1;

	 		 	removeAllActivesNavigations();
	 		 	document.querySelector('#navigation'+slide+'>span').classList.add('active');
		 		 hideAllPhrases();
		 		 let current = document.querySelector('#phrase1');
	 		 	 current.classList.toggle('on');

	 		 	 removeAllSteps();
	 		 	 document.querySelector('.initial-text').classList.add('on');
	 		 	 document.querySelector('#back').classList.remove('show');
	 		 	 document.querySelector('#back').classList.add('hide');


	 		 	 document.querySelector('#next').classList.remove('hide');
				 document.querySelector('#next').classList.add('show');
				 hideContact();
		 		 if(detectMobile()){ moveBackgroundToStart(from, to); }else{
		 		 	jump('section1');

		 		 }
		 		 

	 		 }
	 });
 	 
	 document.querySelector('#navigation2').addEventListener("click", function() {
	 		const from = slide;
	 		const to = 2;

	 		if(slide!=2){ 

	 		 	slide=2;
	 		 	removeAllActivesNavigations();
	 		 	document.querySelector('#navigation'+slide+'>span').classList.add('active');
	 		 	hideAllPhrases();
	 		 	let current = document.querySelector('#phrase2');
	 		 	current.classList.toggle('on');

	 		 	removeAllSteps();
	 		 	document.querySelector('.step1').classList.add('on');
	 		 	document.querySelector('.initial-text').classList.remove('on');
	 		 	document.querySelector('#next').classList.remove('hide');
	 		 	document.querySelector('#next').classList.add('show');


	 		 	document.querySelector('#back').classList.remove('hide');
				document.querySelector('#back').classList.add('show');
				hideContact();
		 		jump('section2');
		 		if(detectMobile()){ moveBackgroundTo(from, to); }
	 		}
	 });

	 document.querySelector('#navigation3').addEventListener("click", function() {
	 		 const from = slide;
	 		 const to = 3;
	 		 if(slide!=3){ 
	 		 	slide=3;
	 		 	removeAllActivesNavigations();
	 		 	document.querySelector('#navigation'+slide+'>span').classList.add('active');
		 		hideAllPhrases();
		 		let current = document.querySelector('#phrase3');
		 		current.classList.toggle('on');

		 		removeAllSteps();
		 		document.querySelector('.step2').classList.add('on');
		 		document.querySelector('.initial-text').classList.remove('on');
		 		document.querySelector('#next').classList.remove('hide');
		 		document.querySelector('#next').classList.add('show');


		 			 		 	document.querySelector('#back').classList.remove('hide');
				document.querySelector('#back').classList.add('show');
				hideContact();
		 		jump('section3');
		 		if(detectMobile()){ moveBackgroundTo(from, to); }
		 	}
	 });

	 document.querySelector('#navigation4').addEventListener("click", function() {
	 		 const from = slide;
	 		 const to = 4;
	 		 if(slide!=4){ 

	 		 	slide=4;
	 		 	removeAllActivesNavigations();
	 		 	document.querySelector('#navigation'+slide+'>span').classList.add('active');
	 		 	hideAllPhrases();
	 		 	let current = document.querySelector('#phrase4');
	 		 	current.classList.toggle('on');

	 		 	removeAllSteps();
	 		 	document.querySelector('.step3').classList.add('on');
	 		 	document.querySelector('.initial-text').classList.remove('on');
	 		 	document.querySelector('#next').classList.remove('hide');
	 		 	document.querySelector('#next').classList.add('show');


	 		 		 		 	document.querySelector('#back').classList.remove('hide');
				document.querySelector('#back').classList.add('show');
				hideContact();
	 		 	jump('section4');
	 		 	if(detectMobile()){ moveBackgroundTo(from, to); }
	 		 }
	 });

	 document.querySelector('#navigation5').addEventListener("click", function() {
		 	const from = slide;
		 	const to = 5;
	 		 if(slide!=5){ 
	 		 	slide=5;
	 		 	removeAllActivesNavigations();
	 		 	document.querySelector('#navigation'+slide+'>span').classList.add('active');
		 		 hideAllPhrases();
		 		 let current = document.querySelector('#phrase5');
		 		 current.classList.toggle('on');

		 		 removeAllSteps();
		 		 document.querySelector('.step4').classList.add('on');
		 		 document.querySelector('.initial-text').classList.remove('on');
		 		 document.querySelector('#next').classList.remove('hide');
		 		 document.querySelector('#next').classList.add('show');


		 		 	 		 	document.querySelector('#back').classList.remove('hide');
				document.querySelector('#back').classList.add('show');
				hideContact();
		 		 jump('section5');
		 		 if(detectMobile()){ moveBackgroundTo(from, to); }

		 		}
	 });

	 document.querySelector('#navigation6').addEventListener("click", function() {
		 	const from = slide;
		 	const to = 6;
	 		if(slide!=6){ 
	 		 slide=6;
	 		 removeAllActivesNavigations();
	 		 document.querySelector('#navigation'+slide+'>span').classList.add('active');
	 		 hideAllPhrases();
	 		 let current = document.querySelector('#phrase6');
	 		 current.classList.toggle('on');

	 		 removeAllSteps();
	 		 document.querySelector('.step5').classList.add('on');
	 		 document.querySelector('.initial-text').classList.remove('on');
	 		 document.querySelector('#next').classList.remove('hide');
	 		 document.querySelector('#next').classList.add('show');

	 		 	 		 	document.querySelector('#back').classList.remove('hide');
				document.querySelector('#back').classList.add('show');
				hideContact();
	 		 jump('section6');
	 		 if(detectMobile()){ moveBackgroundTo(from, to); }
	 		}
	 });


	 document.querySelector('#navigation7').addEventListener("click", function() {
		 	const from = slide;
		 	const to = 7;
	 		 if(slide!=7){ 

	 		 slide=7;

	 		 removeAllActivesNavigations();
	 		 document.querySelector('#navigation'+slide+'>span').classList.add('active');
	 		 hideAllPhrases();
	 		 let current = document.querySelector('#phrase7');
	 		 current.classList.toggle('on');
	 		 
	 		 removeAllSteps();
	 		 document.querySelector('.step6').classList.add('on');
	 		 document.querySelector('.initial-text').classList.remove('on');
	 		 document.querySelector('#next').classList.remove('hide');
	 		 document.querySelector('#next').classList.add('show');

	 		 document.querySelector('#back').classList.remove('hide');
				document.querySelector('#back').classList.add('show');
				hideContact();
	 		 	jump('section7');
	 		 	if(detectMobile()){ moveBackgroundTo(from, to); }
	 		}
	 });

	 document.querySelector('#navigation8').addEventListener("click", function() {
	 		 
		 	const from = slide;
		 	const to = 8;
	 		 if(slide!=8){ 
	 		 	slide=8;
	 		 	removeAllActivesNavigations();
	 		 	document.querySelector('#navigation'+slide+'>span').classList.add('active');
	 		 	hideAllPhrases();
	 		 	let current = document.querySelector('#phrase8');
	 		 	current.classList.toggle('on');

	 		 	removeAllSteps();
	 		 	document.querySelector('.step7').classList.add('on');
	 		 	document.querySelector('.initial-text').classList.remove('on');
	 		 	document.querySelector('#back').classList.remove('hide');
				document.querySelector('#back').classList.add('show');

				document.querySelector('#next').classList.remove('hide');
				document.querySelector('#next').classList.add('show');
				hideContact();
				if(detectMobile()){ moveBackgroundTo(from, to); }else{
	 		 		jump('section8');

				}

	 		}
	 });


	 document.querySelector('#navigation9').addEventListener("click", function() { 
	 		 	
				const from = slide;
				const to = 9;
	 		 	slide=9;
	 		 	hideAllPhrases();
		 		removeAllActivesNavigations();
		 		document.querySelector('#navigation'+slide+'>span').classList.add('active');
	 		 	let current = document.querySelector('#phrase9');
	 		 	current.classList.toggle('on');

	 		 	removeAllSteps();
	 		 	document.querySelector('.step8').classList.add('on');
	 		 	document.querySelector('.initial-text').classList.remove('on');
	 		 	document.querySelector('#back').classList.remove('hide');
				document.querySelector('#back').classList.add('show');

				document.querySelector('#next').classList.remove('hide');
				document.querySelector('#next').classList.add('show');


				 hideContact();
				if(detectMobile()){ moveBackgroundToEnd(); }else{

		 		 jump('section8');
				}

		 		 

	 });
	// To end
 	document.querySelector('#navigation10').addEventListener("click", function() { 
 			
 			const from = slide;
		 	const to = 10;

 			if(slide!=10){ 
	 		 	slide=10;
	 		 	removeAllActivesNavigations();
	 		 	document.querySelector('#navigation10>span').classList.add('active');
		 		 hideAllPhrases();


		 		 
		 		 if (detectMobile()) {
		 		 	moveBackgroundToEnd();
				 	showContact();
		 		 }else {

		 		 	jump('end');

		 		 }
		 		 
		 		 removeAllSteps();
		 		 document.querySelector('.initial-text').classList.remove('on');
		 		 document.querySelector('#next').classList.add('hide');
		 		 document.querySelector('#next').classList.remove('show');

		 		 document.querySelector('#back').classList.remove('hide');
		 		 document.querySelector('#back').classList.add('show');
	 		}
	 });

 	function removeAllSteps() {
 		for (var h = 1; h <= 8; h++) { 
 			let step = document.querySelector('.step'+h);
 				step.classList.remove('on');

 		}
 	}

 	function hideAllPhrases() {


 		if (document.querySelector('#phrase1').classList.contains('off') ) {
 				phrase.classList.toggle('off');
 		}

 		for (var j = 1; j <= 9; j++) { 
 			let phrase = document.querySelector('#phrase'+j);
 			if (phrase.classList.contains('on') ) {
 				phrase.classList.toggle('on');
 			}

 		}
 	}

 	function removeAllActivesNavigations() {
 		 for (var j = 1; j <= 10; j++) { 
 		 	let nav = document.querySelector('#navigation'+j+'>span');
 		 	if (nav) {
 				nav.classList.remove('active');	
 		 	}

 		}
 	}



 	function hideContact() {

	 	document.querySelector('#end_mobile').classList.remove('on');

	 	
 	}
 	function showContact() {
		 	document.querySelector('#end_mobile').classList.add('on');
 	}

	 var newTop = 0;
	 // Animation for scroll
	function jump(h) {

		if (!detectMobile()) {


		    var top = document.getElementById(h).offsetTop,
		        left = document.getElementById(h).offsetLeft;

		    var animator = createAnimator({
		        start: [newTop,top],
		        end: [left, top],
		        duration: 1000
		    }, function(vals){
		    	//10855 ,0
		    	window.scrollTo(vals[0], vals[1]);

		    });
		    
		    //run
		    animator();
		    newTop = left;


		}
	}

	var positionX = 0;
	var positionEnd = 0;
	function moveBackgroundToFront() {

		positionEnd = positionEnd + (imageSize/10);


		var elem = document.querySelector('.large-background'),
		  timer;
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 40%`;
		  positionX += 20;
		  
		  if ( positionX >= positionEnd ) {
		  	positionX = positionEnd;

		  	
		    clearInterval( timer );
		  }
		}, 15);
	}

	function moveBackgroundToBack() {

		positionEnd = positionEnd - (imageSize/10)


		var elem = document.querySelector('.large-background'),
		  timer;
		// Move the element 10px on the right every 16ms
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 40%`;
		  positionX -= 20;
		  
		  // clear the timer at 400px to stop the animation
		  if ( positionX <= positionEnd ) {
		  	positionX = positionEnd;

		  	
		    clearInterval( timer );
		  }
		}, 15);
	}




	function getPositions(from, to) {

		if(from<to) {
			return to-from;
		}else{
			return from-to;
		}
	}

	function moveBackgroundTo(from, to) {

		let positionOld = positionEnd;
		let positionNew = (imageSize/10)*(getPositions(from, to));
		
		if(to < from) {
			positionEnd = positionOld - positionNew;
			moveBackgroundToBack2(positionEnd);
		}

		if (to > from) {
			positionEnd = positionOld + positionNew;
			moveBackgroundToFront2(positionEnd);
		}




	}

	function moveBackgroundToFront2(positionEnd) {

		var elem = document.querySelector('.large-background'),
		  timer;
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 40%`;
		  positionX += 20;
		  
		  if ( positionX >= positionEnd || positionEnd === imageSize ) {
		  	positionX = positionEnd;

		  	
		    clearInterval( timer );
		  }
		}, 15);
	}

	function moveBackgroundToBack2(positionEnd) {



		var elem = document.querySelector('.large-background'),
		  timer;
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 40%`;
		  positionX -= 20;
		  
		  if ( positionX <= positionEnd || positionEnd === 0 ) {
		  	positionX = positionEnd;

		  	
		    clearInterval( timer );
		  }
		}, 15);
	}

	function moveBackgroundToStart() {

		positionEnd = 0;
		var elem = document.querySelector('.large-background'),
		  timer;
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 40%`;
		  positionX -= 20;
		  
		  if ( positionX <= positionEnd ) {
		  	positionX = positionEnd;

		  	
		    clearInterval( timer );
		  }
		}, 15);
	}
	function moveBackgroundToEnd(){

		positionEnd = (imageSize/10)*(getPositions(1, 10));


		var elem = document.querySelector('.large-background'),
		  timer;
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 40%`;
		  positionX += 20;
		  
		  if ( positionX >= positionEnd ) {
		  	positionX = positionEnd;

		  	
		    clearInterval( timer );
		  }
		}, 15);
	}

	// Creating animation
	function createAnimator(config, callback, done) {
	    if (typeof config !== "object") throw new TypeError("Arguement config expect an Object");

	    var start = config.start,
	        mid = Object.assign({}, start), //clone object
	        math = Object.assign({}, start), //precalculate the math
	        end = config.end,
	        duration = config.duration || 1000,
	        startTime, endTime;

	    //t*(b-d)/(a-c) + (a*d-b*c)/(a-c);
	    function precalculate(a, b, c, d) {
	        return [(b - d) / (a - c), (a * d - b * c) / (a - c)];
	    }

	    function calculate(key, t) {
	        return t * math[key][0] + math[key][1];
	    }

	    function step() {
	        var t = Date.now();
	        var val = end;
	        if (t < endTime) {
	            val = mid;
	            for (var key in mid) {
	                mid[key] = calculate(key, t);
	            }
	            callback(val);
	            requestAnimationFrame(step);
	        } else {
	            callback(val);
	            done && done();
	        }
	    }

	    return function () {
	        startTime = Date.now();
	        endTime = startTime + duration;

	        for (var key in math) {
	            math[key] = precalculate(startTime, start[key], endTime, end[key]);
	        }

	        step();
	    }
	}



})();