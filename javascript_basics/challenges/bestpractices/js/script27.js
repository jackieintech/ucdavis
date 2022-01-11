(function(){
	"use strict"

	const headingOriginal = document.querySelector("h1");
	const formTag= document.querySelector("form");
	console.log(headingOriginal);

	formTag.addEventListener("submit", function(){
		// alert("thanks!");
		event.preventDefault();
		let myNum = parseInt(document.querySelector("input").value);

		if(myNum){
			headingOriginal.style.fontSize = myNum + "px";
		}
		else {
			alert("Please enter a number.");
		}
	});
})();