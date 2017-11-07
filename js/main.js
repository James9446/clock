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
	function dots(num) {
		var str = '';
		for (i = 0; i < num; i++) {
			str += "."
		}
		return str;
	}

	function brackets(num) {
		var str = '';
		var tens = '';
		var fives = '';
		var ones = '';
		for (i = 0; i < num; i++) {
			ones += "|";
			if (ones === "|||||") {
				ones = '';
				fives += "[]";
			}
			if (fives === "[][]") {
				fives = '';
				tens += "{}";
			}
		}
		str = tens + fives + ones;
		return str;
	}

	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var miliseconds = date.getMilliseconds();
	var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
	                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
	                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];        // Hundreds

	if (hours > 12) {
		hours -= 12;
	} else if (hours === 0) {
		hours = 12;
	}
	
	var time = hours + ":" + addZero(minutes) + ":" + addZero(seconds);
	var romanTime = convert(hours) + ":" + convert(minutes) + ":" + convert(seconds);
	var dotTime = dots(hours) + " : " + dots(minutes) + " : " + dots(seconds);
	var bracketTime = brackets(hours) + " : " + brackets(minutes) + " : " + brackets(seconds);

	document.getElementById("output").textContent = time;
	document.getElementById("roman-output").textContent = romanTime;
	document.getElementById("dot-output").textContent = dotTime;
	document.getElementById("brackets-output").textContent = bracketTime;
	// document.getElementById("outputMil").textContent = convert(miliseconds);
	// console.log(addZeros(miliseconds))
	setTimeout(function() {displayTime();}, 1);

}

displayTime();




