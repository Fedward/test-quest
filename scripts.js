"use strict";

let cells = [],
	startButton;

window.onload = function () {
	startButton = document.getElementById("startButton");
	// startButton.onclick = startRotate;	
	cells = document.querySelectorAll("#container p");
}

function startRotate(){	
	startButton.removeAttribute("onclick");
	startButton.innerHTML = "In progress";
	console.log("Starting rotation!...");
	let i = 0;
	let interval = setInterval(rotate, 250);

	function rotate(){
		console.log("Cell №", i + 1, "rotate START");

		setTimeout((function(index){
			return function(){
				console.log("Cell №", index + 1, "rotate END");
				if ( index + 1 === cells.length ) {
					console.log("Finish!");
					alert("Success!");	
					reset();				
				}
			}			
		})(i), 1000);

		// let currentAttribute = cells[i].getAttribute("class");	
		// cells[i].setAttribute("class", currentAttribute + " rotate");
		cells[i].classList.add("rotate");
		i++;
		if ( i === cells.length) {
			clearInterval(interval);
		}
	}
}

function reset(){
	startButton.innerHTML = "Start";
	// startButton.onclick = startRotate;
	startButton.setAttribute("onclick", "startRotate()");	
	for (let i = 0; i < cells.length; i++) {
		// cells[i].setAttribute("class", "cell");
		if (cells[i].classList == "rotate") {
			cells[i].removeAttribute("class");
		} else {
		cells[i].classList.remove("rotate");
		};
	}
}

/* TO DO:
 try {
        document.addEventListener("DOMContentLoaded", function() { 
        	-------------------------------
        });
    } catch (e) { } */