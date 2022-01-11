(function(){
	"use strict"
		const myButton = document.querySelector("button");
		const myParagraphs = document.querySelectorAll("p");
		console.log(myButton);
		console.log(myParagraphs);

		myButton.addEventListener('click', function(){
			alert("I'll make you all green!");
			for(let i=0; i<myParagraphs.length; i++){
				myParagraphs[i].style.color = "green";
			}
		});
})();