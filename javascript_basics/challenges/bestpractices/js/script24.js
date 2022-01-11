(function(){
	"use strict"
		const myButton = document.querySelector("button");
		const myDiv = document.querySelector("div");

		console.log(myDiv);
		console.log(myButton);

		myButton.addEventListener("click", function(){
			let newP= document.createElement("p");
			let pText= document.createTextNode("So much information");
			alert("I'm sending you more info!");
			newP.appendChild(pText);
			myDiv.appendChild(newP);
		});


})();