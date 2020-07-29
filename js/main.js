
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
	var slide = 1;

	// Detect Device
	function detectMobile() {
	  let check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	};


	var nextButton = document.querySelector('#next');
	var backButton = document.querySelector('#back');





	function slideNext () {
				let from = slide;
			 	let to = from+1;
				slide++;
				removeAllActivesNavigations();
				document.querySelector('#navigation'+slide+'>span').classList.add('active');
				let current = document.querySelector('#phrase'+(slide-1));
		 		let after = document.querySelector('#phrase'+(slide));
		 		hideAllPhrases();
				if (to > 0 && to < 10) { 

					if (slide === 2) {
						// current.classList.toggle('off');
			 			backButton.classList.remove('hide');
						backButton.classList.add('show');
						document.querySelector('.initial-text').classList.remove('on');
					}

			    	after.classList.toggle('on');
			    	removeAllSteps();
			    	if (slide > 1 && slide <=9) { 

			    		document.querySelector('.step'+(to-1)).classList.add('on');
			    	}




				}


			 	if (slide < 9) {

				 	
				 	if (detectMobile()) { moveBackgroundTo(from,to); }
				 	else{ jump('section'+slide); }
					


			 	}	 
			 	if (slide === 9) {
			 		if (detectMobile()) {
			 		 	moveBackgroundToEnd();
			 		 }
			 	}

			 	if (slide === 10) {
			 		document.querySelector('.phrases').style.pointerEvents= 'none';
			 		document.querySelector('#end_mobile').style.pointerEvents= 'all';
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
	}

	function slideBack () {
			let from = slide;
		 	let to = from-1;
		 	slide--;

			removeAllActivesNavigations();
			document.querySelector('#navigation'+slide+'>span').classList.add('active');
		 	let current = document.querySelector('#phrase'+(slide+1));
		 	let before = document.querySelector('#phrase'+(slide));
		 	hideAllPhrases();
		 	if (slide > 0 && slide < 9) {


				    before.classList.toggle('on');
				    if(detectMobile()) {

					    if(to === 1){
					    	moveBackgroundToStart();

					    }else{

					    	 moveBackgroundTo(from,to); 
					    }
				    }
				    else{ jump('section'+slide);  }
				    removeAllSteps();
				    if (slide > 1 && slide <=9) {

				    	document.querySelector('.step'+(to-1)).classList.add('on');
				    }
		 	}





		 	if (slide === 1) {
			 	backButton.classList.add('hide');
			 	backButton.classList.remove('show');
			 	document.querySelector('.initial-text').classList.add('on');

		 	}

		 	if (slide === 9) {
		 		document.querySelector('.phrases').style.pointerEvents= 'all';
		 		document.querySelector('#end_mobile').style.pointerEvents= 'none';
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
	}

	
	// Next button
	nextButton.addEventListener("click", function(event) {
		event.preventDefault();
		slideNext();

	 });

	 // Back button
	 backButton.addEventListener("click", function() {
	 	event.preventDefault();
	 	slideBack();
	 });


	 function navigateTo($position) {
	 	 		 const from = slide;
	 	 		 const to = $position;

	 	 		 
	 	 		 if(slide!=to){
	 		 		slide=$position;
	 		 		document.querySelector('.phrases').style.pointerEvents= 'all';
	 		 		document.querySelector('#end_mobile').style.pointerEvents= 'none';
	 				if (to !== 1) {

	 					document.querySelector('.initial-text').classList.remove('on');
	 				}


	 				if (slide === 1) {

	 					
	 					backButton.classList.remove('show');
	 					backButton.classList.add('hide');
	 					document.querySelector('.initial-text').classList.add('on');
	 				}


	 				if (to > 1) { 
	 					backButton.classList.remove('hide');
	 					backButton.classList.add('show');
	 				}

	 				removeAllSteps();
	 				if (to > 1 && to < 10) {
	 					document.querySelector('.step'+(to-1)).classList.add('on');
	 				}

	 				


	 	 		 	removeAllActivesNavigations();
	 	 		 	document.querySelector('#navigation'+to+'>span').classList.add('active');
	 		 		 hideAllPhrases();
	 		 		 if (to !== 10) { 
	 		 		 	let current = document.querySelector('#phrase'+to); 
	 	 		 	 	current.classList.toggle('on'); }

	 	 		 	 // removeAllSteps();
	 	 		 	 // document.querySelector('.step'+slide).classList.add('on');
	 	 		 	 
	 	 		 	 



	 	 		 	 nextButton.classList.remove('hide');
	 				 nextButton.classList.add('show');
	 				 hideContact();
	 		 		 
	 		 		 	
	 		 		 	if (to === 9) { 

	 		 		 		document.querySelector('.step'+(to-1)).classList.add('on');
	 		 		 		jump('section8'); 
	 		 		 	}
	 		 		 	
	 		 		 	if (to === 10) { 
	 		 		 		 document.querySelector('.phrases').style.pointerEvents= 'none';
	 		 		 		 document.querySelector('#end_mobile').style.pointerEvents= 'all';
	 		 		 		 if (detectMobile()) {
	 		 		 		 	moveBackgroundToEnd();
	 		 				 	showContact();
	 		 		 		 }else {

	 		 		 		 	jump('end');

	 		 		 		 }
	 		 		 		removeAllSteps();
	 		 		 		backButton.classList.remove('hide');
	 		 		 		backButton.classList.add('show');

	 		 		 		nextButton.classList.remove('show');
	 		 		 		nextButton.classList.add('hide');
	 		 		 	}
	 		 		 	
	 		 		 	if (to !== 9 && to !== 10) {

	 		 		 		if(!detectMobile()) {

	 		 		 			jump('section'+to);
	 		 		 		}
	 		 		 		
	 		 		 	}

	 		 		 	if (to === 1) {
	 		 		 		if(detectMobile()){ moveBackgroundToStart(from, to); };
	 		 		 	}else{
	 		 		 		if(to!==10){
	 		 		 			if(detectMobile()){moveBackgroundTo(from, to); };
	 		 		 		}
	 		 		 	}
	 		 		 
	 		 		 

	 	 		 }
	 }

	 // Navigation
	 for (let i=1; i <=10; i++) {
	 	document.querySelector('#navigation'+i).addEventListener("click", function() {
	 		navigateTo(i);
	 	});
	 }

	 // Cleaning ...
 	function removeAllSteps() {
 		for (let h = 1; h <= 8; h++) { 
 			let step = document.querySelector('.step'+h);
 				step.classList.remove('on');

 		}
 	}

 	function hideAllPhrases() {


 		if (document.querySelector('#phrase1').classList.contains('off') ) {
 				phrase.classList.toggle('off');
 		}

 		for (let j = 1; j <= 9; j++) { 
 			let phrase = document.querySelector('#phrase'+j);
 			if (phrase.classList.contains('on') ) {
 				phrase.classList.toggle('on');
 			}

 		}
 	}

 	function removeAllActivesNavigations() {
 		 for (let j = 1; j <= 10; j++) { 
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

	// For Mobile
	var positionX = 0;
	var positionEnd = 0;


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
			moveBackgroundToBack(positionEnd);
		}

		if (to > from) {
			positionEnd = positionOld + positionNew;
			moveBackgroundToFront(positionEnd);
		}




	}

	function moveBackgroundToFront(positionEnd) {
		document.querySelector('.navigation').style.pointerEvents= 'none';
		var elem = document.querySelector('.large-background'),
		  timer;
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 60%`;
		  positionX += 20;
		  
		  if ( positionX >= positionEnd || positionEnd === imageSize ) {
		  	positionX = positionEnd;

		  	document.querySelector('.navigation').style.pointerEvents= 'all';
		    clearInterval( timer );
		  }
		}, 15);
	}

	function moveBackgroundToBack(positionEnd) {


		document.querySelector('.navigation').style.pointerEvents= 'none';
		var elem = document.querySelector('.large-background'),
		  timer;
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 60%`;
		  positionX -= 20;
		  
		  if ( positionX <= positionEnd || positionEnd === 0 ) {
		  	positionX = positionEnd;

		  	document.querySelector('.navigation').style.pointerEvents= 'all';
		    clearInterval( timer );
		  }
		}, 15);
	}

	function moveBackgroundToStart() {
		document.querySelector('.navigation').style.pointerEvents= 'none';
		positionEnd = 0;
		var elem = document.querySelector('.large-background'),
		  timer;
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 60%`;
		  positionX -= 20;
		  
		  if ( positionX <= positionEnd ) {
		  	positionX = positionEnd;

		  	document.querySelector('.navigation').style.pointerEvents= 'all';
		    clearInterval( timer );
		  }
		}, 15);
	}
	function moveBackgroundToEnd(){
		document.querySelector('.navigation').style.pointerEvents= 'none';
		positionEnd = (imageSize/10)*(getPositions(1, 10));


		var elem = document.querySelector('.large-background'),
		  timer;
		timer = setInterval(function() {
		  elem.style.backgroundPosition = `-${positionX}px 60%`;
		  positionX += 20;
		  
		  if ( positionX >= positionEnd ) {
		  	positionX = positionEnd;

		  	document.querySelector('.navigation').style.pointerEvents= 'all';
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