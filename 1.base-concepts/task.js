"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d === 0) {
		arr[0] = -b / (2 * a);
	} else if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}

	return arr;
}



function calculateTotalMortgage(percent, contribution, amount, date) {
	
	if (typeof percent !== 'number') {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	};

	if (typeof contribution !== 'number') {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	};

	if (typeof amount !== 'number') {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	};

	let payuotAmount = Number(amount) - Number(contribution);
	let currentYear = new Date();
	let totalMonths = (date.getFullYear() - currentYear.getFullYear()) * 12;
	let p = (Number(percent) / 12) / 100;
	let monthlyPayment = payuotAmount * (p + (p / (Math.pow(1 + p, totalMonths) - 1)));
	let totalAmount = monthlyPayment * totalMonths;



	console.log(Number(totalAmount.toFixed(2)));

	return Number(totalAmount.toFixed(2));
}
