(function(){
	"use strict"
	var pagetop;
		var myBody = document.querySelector("body");

		window.addEventListener("scroll", function(){
			pagetop = window.pageYOffset;
			console.log(pagetop);

			// if (pagetop >= 0){
			// 	myBody.setAttribute("class", "one");
			// }
			// if (pagetop >= 500){
			// 	myBody.setAttribute("class", "two");
			// }
			// if (pagetop >= 1000){
			// 	myBody.setAttribute("class", "three");
			// }
			// if (pagetop >= 1500){
			// 	myBody.setAttribute("class", "four");
			// }
			// if (pagetop >= 2000){
			// 	myBody.setAttribute("class", "five");
			// }
			switch(true) {
				case pagetop <500: myBody.className="one"; break;
				case pagetop <1000: myBody.className="two"; break;
				case pagetop <1500: myBody.className="three"; break;
				case pagetop <2000: myBody.className="four"; break;
				default: myBody.className="five";
			}
		});
		// console.log(myBody);

		// myBody.addEventListener("mouseover", function(){
		// 	myBody.setAttribute("class", "two");
	


		// });

})();