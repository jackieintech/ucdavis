(function(){
	"use strict"
		const myButton = document.querySelector("button");
		const myParagraph = document.querySelector("p");
		console.log(myButton);
		console.log(myParagraph);

		myButton.addEventListener('click', function(){
			alert("I'll make you green!");
			myParagraph.style.color = "green";
		});

})();