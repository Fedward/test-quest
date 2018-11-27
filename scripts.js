"use strict";

let cells = [],
	startButton;

window.onload = function () {
	startButton = document.getElementById("startButton");
	startButton.addEventListener("click", startRotate);
	cells = document.querySelectorAll("#container p");
}

function startRotate(){	
	startButton.removeEventListener("click", startRotate);
	startButton.innerHTML = "In progress";
	console.log("Starting rotation!...");
	let i = 0;
	let interval = setInterval(rotate, 250);

	function rotate(){
		console.log("Cell №", i + 1, "rotate START");
    	let handler = rotateEnd(i);

		function rotateEnd(index) {
			return function (){
				console.log("Cell №", index + 1, "rotate END");
        		cells[index].removeEventListener("transitionend", handler);
        
				if ( index + 1 === cells.length) {
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

		cells[i].addEventListener("transitionend", handler);
		cells[i].classList.toggle("rotate");
		i++;
		if ( i === cells.length) {
			clearInterval(interval);
		}
	}
}

/* TO DO:
 try {
        document.addEventListener("DOMContentLoaded", function() { 
        	-------------------------------
        });
    } catch (e) { } */


//  Недоделочка, сюда не смотреть
//"use strict";

// let cells = [],
// 	startButton,
// 	testObj = {};

// window.onload = function () {
// 	startButton = document.getElementById("startButton");
// 	startButton.addEventListener("click", startRotate);
// 	cells = document.querySelectorAll("#container p");
// }

// function startRotate(){	
// 	startButton.removeEventListener("click", startRotate);
// 	startButton.innerHTML = "In progress";
// 	console.log("Starting rotation!...");
// 	let i = 0;
// 	let interval = setInterval(rotate, 250);
// 	const handler = rotateEnd(i);

// 	function rotate(){
// 		console.log("Cell №", i + 1, "rotate START");

// /*		setTimeout((function(index){
// 			return function(){
// 				console.log("Cell №", index + 1, "rotate END"); // старая реализация с использованием setTimeout без 
// 				if ( index + 1 === cells.length ) {				// без EventListener - transitionend
// 					console.log("Finish!");
// 					alert("Success!");	
// 					reset();				
// 				}
// 			}			
// 		})(i), 1000);*/

// 		function rotateEnd(index) {
// 			return function (){
// 				console.log("Cell №", index + 1, "rotate END");
// 				if ( index + 1 === cells.length) {
// 					console.log("Finish!");
// 					alert("Success!");	
// 					reset();					
// 				}
// 			}
// 		}

// 		function reset(){
// 			startButton.innerHTML = "Start";
// 			startButton.addEventListener("click", startRotate);
// 			for (let i = 0; i < cells.length; i++) {
// 				cells[i].removeEventListener("transitionend", handler);
// 				cells[i].classList.toggle("rotate");			
// 		/*		if (cells[i].classList.length === 1 && cells[i].classList[0] === "rotate") {
// 					cells[i].removeAttribute("class");	// способ, если не нужно, чтобы оставался пустой атрибут class у ячеек
// 				} else {
// 				cells[i].classList.toggle("rotate");
// 				};*/	
// 			}
// 		}		

// 		cells[i].addEventListener("transitionend", rotateEnd(i));
// 		cells[i].classList.toggle("rotate");
// 		i++;
// 		if ( i === cells.length) {
// 			clearInterval(interval);
// 		}
// 	}
// }