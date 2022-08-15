// Задание № 1

function compareArrays(arr1, arr2) {
	let result = arr1.every((item, index) => arr2[index] === item);
	
	if (arr1.length !== arr2.length) {
		return false;
	}

	return result;
}

//Задание № 2

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((item) => item > 0 && item % 3 ===0).map((item) => item * 10);

  return resultArr;
}


//.filter((item) => resultArr[item] % 3 == 0).map((item) => resultArr[item] * 10)