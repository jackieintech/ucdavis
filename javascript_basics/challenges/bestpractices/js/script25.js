(function(){

	"use strict"

		let removeButton = document.getElementsByTagName("button")[1];

		removeButton.addEventListener("click", function(){
			let myDiv = document.querySelector("div");
			let myParagraphs = myDiv.getElementsByTagName("p");
			let goodbyeParagraph=myParagraphs[1];
			let theDiv = myDiv.removeChild(goodbyeParagraph);
		});


})();