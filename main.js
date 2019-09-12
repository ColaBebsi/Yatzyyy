document.addEventListener("DOMContentLoaded", function(event) {
	
	let input1 = document.getElementById("player1_ones");
	let input2 = document.getElementById("player1_twos");
	let input3 = document.getElementById("player1_threes");
	let input4 = document.getElementById("player1_fours");
	let input5 = document.getElementById("player1_fives");
	let input6 = document.getElementById("player1_sixes");
	let inputpairs = document.getElementById("player1_pairs");
	let inputtwopairs = document.getElementById("player1_twopairs");
	let inputthreeofakind = document.getElementById("player1_threeofakind");
	let inputfourofakind = document.getElementById("player1_fourofakind");
	let inputstraight = document.getElementById("player1_straight");
	let inputlargestraight = document.getElementById("player1_largestraight");
	let inputfullhouse = document.getElementById("player1_fullhouse");
	let inputchance = document.getElementById("player1_chance");
	let inputyatzy = document.getElementById("player1_yatzy");
	let button = document.getElementById("sumBtn");
	let bonus = 0;
	
	
	button.addEventListener("click", function(e) {
		input1 = Number(input1.value);
		input2 = Number(input2.value);
		input3 = Number(input3.value);
		input4 = Number(input4.value);
		input5 = Number(input5.value);
		input6 = Number(input6.value);
		inputpairs = Number(inputpairs.value);
		inputtwopairs = Number(inputtwopairs.value);
		inputthreeofakind = Number(inputthreeofakind.value);
		inputfourofakind = Number(inputfourofakind.value);
		inputstraight = Number(inputstraight.value);
		inputlargestraight = Number(inputlargestraight.value);
		inputfullhouse = Number(inputfullhouse.value);
		inputchance = Number(inputchance.value);
		inputyatzy = Number(inputyatzy.value);
		summary = input1 + input2 + input3 + input4 + input5 + input6;
		if (summary >= 63) {
			bonus = 50;
			document.getElementById("player1_bonus").innerHTML = bonus;
		} else {
			document.getElementById("player1_bonus").innerHTML = bonus;
		}
		document.getElementById("player1_sum").innerHTML = summary;
		let total = (summary + inputpairs + inputtwopairs + inputthreeofakind + inputfourofakind + inputstraight + inputlargestraight + 
			inputfullhouse + inputchance + inputyatzy + bonus);

		
		document.getElementById("player1_total").innerHTML = total;
	});

	/*let input2 = document.getElementById("player1_twos");
	input2.addEventListener("input", function(e) {
		input2 = Number(input2.value);
		console.log(input2);
	});

	function summary(input1, input2) {
		let sum = input1 + input2;
		console.log(sum);
	};*/

	

	

});