(function(){
	"use strict"

		const myBody = document.querySelector("body");
	console.log(myBody);

	document.addEventListener("keydown", function(event){

		const keyPressed = event.which;
		if(keyPressed == 66){
			 myBody.setAttribute("class", "one");
			};
		if(keyPressed == 86){
			 myBody.setAttribute("class", "two");
			};
		if(keyPressed == 67){
			 myBody.setAttribute("class", "three");
			};
		if(keyPressed == 70){
			 myBody.setAttribute("class", "four");
			};
		if(keyPressed == 71){
			 myBody.setAttribute("class", "five");
			};
		// else {
		// 	alert("You didn't press one of the specified keys.");
		// }
		// switch(keyPressed) {
		// 	case 66: myBody.setAttribute("class", "one");
		// 	case 86: myBody.setAttribute("class", "two");
		// 	case 67: myBody.setAttribute("class", "three");
		// 	case 70: myBody.setAttribute("class", "four");
		// 	case 71: myBody.setAttribute("class", "five");
		// 	default: alert("You didn't press one of the specified keys!");
		// }
	}); 
})();