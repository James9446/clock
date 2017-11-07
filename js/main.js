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
	// function romanConvert(num) {
	// 	if (num <= 3) {
	// 		for (var i = 0; )
	// 	}
	// 	if (num = 10) {
	// 		num = "X"
	// 	}
	// 	return time;
	// }
	var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
	                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
	                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];        // Hundreds

	function convert(num) {
	  var numeral = "";
	  var digits = num.toString().split('').reverse();
	  for (var i=0; i < digits.length; i++){
	    numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
	  }
	  if (numeral === "") {
	  		numeral = "nulla";
	  	}
	  return numeral;  
	}
	if (hours > 12) {
		hours -= 12;
	} else if (hours === 0) {
		hours = 12;
	}
	var time = hours + ":" + addZero(minutes) + ":" + addZero(seconds);
	var romanTime = convert(hours) + ":" + convert(minutes) + ":" + convert(seconds);

	document.getElementById("output").textContent = time;
	document.getElementById("roman-output").textContent = romanTime;
	// document.getElementById("outputMil").textContent = convert(miliseconds);
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



