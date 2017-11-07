// docment.getElementById("output")

function displayTime() {
	function addZero(arg) {
		if (arg < 10) {
			arg = "0" + arg;
		}
		return arg;
	}
	function addZeros(arg) {
		if (arg < 10) {
			arg = "00" + arg;
		} else if (arg < 100) {
			arg = "0" + arg;
		} 
		return arg;
	}
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var miliseconds = date.getMilliseconds();
	if (hours > 12) {
		hours -= 12;
	} else if (hours === 0) {
		hours = 12;
	}
	var time = hours + ":" + addZero(minutes) + ":" + addZero(seconds);
	document.getElementById("output").textContent = time;
	document.getElementById("outputMil").textContent = miliseconds;
	// console.log(addZeros(miliseconds))
	setTimeout(function() {displayTime();}, 1);

}

displayTime();




// console.log(date)
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getDay())
// console.log(date.getTime())
// console.log(date.getSeconds())

// var year = setTimeout(function() {alert(date.getFullYear());}, 3000)
// function test() {
// 	console.log("test")
// }




// var view = {
// 	setUpEventListeners: function() {
// 		var button = document.getElementById('btn1');
// 		button.addEventListener("click", displayTime);
// 	}
// }

// view.setUpEventListeners();



