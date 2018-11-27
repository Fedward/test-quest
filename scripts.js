document.addEventListener("DOMContentLoaded", function() {
	"use strict";
	
	let startButton = document.getElementById("startButton"),
		cells = document.querySelectorAll("#container p");
	
	startButton.addEventListener("click", startRotate);

	function startRotate(){	
		startButton.removeEventListener("click", startRotate);
		startButton.innerHTML = "In progress";
		console.log("Starting rotation!...");
		let i = 0,
			interval = setInterval(rotate, 250);

		function rotate(){
			console.log("Cell №", i + 1, "rotate START");
	    	let handler = rotateEnd(i);			
			cells[i].addEventListener("transitionend", handler);
			cells[i].classList.toggle("rotate");
			i++;
			if ( i === cells.length) {
				clearInterval(interval);
			}

			function rotateEnd(index) {
				return function (){
					console.log("Cell №", index + 1, "rotate END");
	        		cells[index].removeEventListener("transitionend", handler);
	        
					if ( index + 1 === cells.length ) {
						console.log("Finish!");
						alert("Success!");	
						reset();					
					}
				}
			}

			function reset(){
				startButton.innerHTML = "Start";
				startButton.addEventListener("click", startRotate);
				for (let i = 0; i < cells.length; i++) {
	        		cells[i].classList.toggle("rotate");	
				}
			}
		}
	}		
});



/* TO DO:
 try {
        document.addEventListener("DOMContentLoaded", function() { 
        	-------------------------------
        });
    } catch (e) { } */