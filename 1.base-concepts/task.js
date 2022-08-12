
function solveEquation(a, b, c) {
	"use strict";
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
			arr[0] = Math.ceil(-b/(2*a));
		return arr
	} else if (d > 0) {
		arr[0] = Math.ceil((-b + Math.sqrt(d)) / (2 * a)); 
		arr[1] = Math.ceil((-b - Math.sqrt(d)) / (2 * a));
		return arr;
	}

	return arr; // array
}



function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;

	 //код для задачи №2 писать здесь

	return totalAmount;
}
