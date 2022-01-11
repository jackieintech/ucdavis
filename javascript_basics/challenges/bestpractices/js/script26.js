(function(){

	"use strict"
		const myButton = document.querySelector("button");
		const myDiv = document.querySelector("div");
		let numParagraphs=1;
		console.log(myDiv);
		console.log(myButton);

		myButton.addEventListener("click", function(){
			let numParagraphs++;
			let newP= document.createElement("p");
			let pText= document.createTextNode(`This is paragraph number ${numParagraphs}.`);
			alert("I'm sending you more info!");
			newP.appendChild(pText);
			myDiv.appendChild(newP);
			console.log(numParagraphs);

		});


		const removeButton = document.getElementsByTagName("button")[1];

		// console.log(removeButton);


				// console.log(myDiv);
				// console.log(goodbyeParagraph);

		
// console.log(theDiv);

		removeButton.addEventListener("click", function(){
			let numParagraphs--;

			console.log(numParagraphs);

			if (numParagraphs >= 1){
			let myRemoveDiv = document.querySelector("div");
			let myParagraphs = myRemoveDiv.getElementsByTagName("p");
			let goodbyeParagraph=myParagraphs[1];
			let theDiv = myRemoveDiv.removeChild(goodbyeParagraph);
			}
			else {
				numParagraphs++;
				alert("hey that's enough now!");

			}
		});

})();