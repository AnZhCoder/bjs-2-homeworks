// Задание № 1

function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((item, index) => arr2[index] === item);
}

//Задание № 2

function advancedFilter(arr) {
	return arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10);
}
