(function(){
	"use strict"
		const myDiv = document.querySelector("div");

		myDiv.addEventListener("mouseover", function(){
			// myDiv.setAttribute("class", "big");
			// console.log(myDiv);
			myDiv.className = "big";
		});
		myDiv.addEventListener("mouseout", function(){
			myDiv.removeAttribute("class", "big");
		});


})();